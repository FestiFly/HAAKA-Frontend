import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
const Maze404 = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const navigate = useNavigate();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const isMoving = useRef(false);

    const cols = 9;
    const rows = 9;
    const cellSize = dimensions.width / cols;

    type MazeCell = { visited: boolean; walls: boolean[] };
    const maze = useRef<MazeCell[][]>([]);
    const player = useRef({ x: 0, y: 0, px: 0, py: 0 });
    const goal = useRef({ x: cols - 1, y: rows - 1 });

    const offsetX = useRef(0);
    const offsetY = useRef(0);

    const resizeCanvas = () => {
  const maxWidth = 300; //
  const screenWidth = window.innerWidth;

  const targetWidth = Math.min(maxWidth, screenWidth * 0.9);

  const cellSize = Math.floor(targetWidth / cols);
  const width = cellSize * cols;
  const height = cellSize * rows;

  setDimensions({ width, height });
};


    useEffect(() => {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    useEffect(() => {
        if (dimensions.width === 0) return;
        generateMaze();
        startAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dimensions]);

    const generateMaze = () => {
        maze.current = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => ({ visited: false, walls: [true, true, true, true] }))
        );

        const visit = (x: number, y: number) => {
            maze.current[y][x].visited = true;
            const directions = [
                [0, -1, 0],
                [1, 0, 1],
                [0, 1, 2],
                [-1, 0, 3],
            ].sort(() => Math.random() - 0.5);

            for (const [dx, dy, dir] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && ny >= 0 && nx < cols && ny < rows && !maze.current[ny][nx].visited) {
                    maze.current[y][x].walls[dir] = false;
                    maze.current[ny][nx].walls[(dir + 2) % 4] = false;
                    visit(nx, ny);
                }
            }
        };

        visit(0, 0);
        player.current = { x: 0, y: 0, px: 0, py: 0 };
        offsetX.current = (dimensions.width - cols * cellSize) / 2;
        offsetY.current = (dimensions.height - rows * cellSize) / 2;

    };

    const tryMove = (dx: number, dy: number) => {
        if (isMoving.current) return;  // ignore moves while moving

        const { x, y } = player.current;
        const cell = maze.current[y][x];
        let dir = -1;
        if (dx === 0 && dy === -1) dir = 0;
        else if (dx === 1 && dy === 0) dir = 1;
        else if (dx === 0 && dy === 1) dir = 2;
        else if (dx === -1 && dy === 0) dir = 3;

        if (dir !== -1 && !cell.walls[dir]) {
            player.current.x += dx;
            player.current.y += dy;
            isMoving.current = true;  // start movement
        }

        if (player.current.x === goal.current.x && player.current.y === goal.current.y) {
            setTimeout(() => navigate('/'), 800);
        }
    };

    const startAnimation = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, dimensions.width, dimensions.height);

            // Draw maze
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const cell = maze.current[y][x];
                    const cx = offsetX.current + x * cellSize;
                    const cy = offsetY.current + y * cellSize;

                    if (cell.walls[0]) drawLine(ctx, cx, cy, cx + cellSize, cy);
                    if (cell.walls[1]) drawLine(ctx, cx + cellSize, cy, cx + cellSize, cy + cellSize);
                    if (cell.walls[2]) drawLine(ctx, cx + cellSize, cy + cellSize, cx, cy + cellSize);
                    if (cell.walls[3]) drawLine(ctx, cx, cy + cellSize, cx, cy);
                }
            }
            const targetX = player.current.x * cellSize + offsetX.current;
            const targetY = player.current.y * cellSize + offsetY.current;
            const dx = targetX - player.current.px;
            const dy = targetY - player.current.py;
            const speed = 0.2;
            // Animate player position
            if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
                player.current.px = targetX;
                player.current.py = targetY;
                isMoving.current = false; // movement finished
            } else {
                player.current.px += dx * speed;
                player.current.py += dy * speed;
            }

            // Draw goal
            ctx.fillStyle = '#fff';
            ctx.fillRect(
                offsetX.current + goal.current.x * cellSize + 6,
                offsetY.current + goal.current.y * cellSize + 6,
                cellSize - 12,
                cellSize - 12
            );

            // Draw player
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(player.current.px + cellSize / 2, player.current.py + cellSize / 2, cellSize / 3, 0, Math.PI * 2);
            ctx.fill();

            requestAnimationFrame(render);
        };

        render();
    };

    const drawLine = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp' || e.key === 'w') tryMove(0, -1);
            if (e.key === 'ArrowDown' || e.key === 's') tryMove(0, 1);
            if (e.key === 'ArrowLeft' || e.key === 'a') tryMove(-1, 0);
            if (e.key === 'ArrowRight' || e.key === 'd') tryMove(1, 0);
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    useEffect(() => {
        let startX = 0, startY = 0;
        const canvas = canvasRef.current;

        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const dx = e.changedTouches[0].clientX - startX;
            const dy = e.changedTouches[0].clientY - startY;

            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 30) tryMove(1, 0);
                else if (dx < -30) tryMove(-1, 0);
            } else {
                if (dy > 30) tryMove(0, 1);
                else if (dy < -30) tryMove(0, -1);
            }
        };

        canvas?.addEventListener('touchstart', handleTouchStart);
        canvas?.addEventListener('touchend', handleTouchEnd);

        return () => {
            canvas?.removeEventListener('touchstart', handleTouchStart);
            canvas?.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-black text-white px-6 pt-16 space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-8 right-8 text-sm font-light tracking-wider z-20"
                >
                    <div>{now}</div>
                    <div className="mt-1">COIMBATORE</div>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-black tracking-tight leading-none text-white select-none"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    LOST?
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl font-light text-center max-w-2xl mt-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Sorry, you’ve been lost inside <span className="font-semibold text-white">HAAKA</span>'s maze.
                    Not to worry, though I’ll help you find your way out.
                </motion.p>

                <motion.button
                    onClick={() => navigate('/')}
                    className="text-sm uppercase tracking-widest border border-gray-600 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 mt-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    Go Back Home
                </motion.button>
            </div>

            <p className="text-center text-sm md:text-base mt-4 mb-4 px-4 text-white">
                Use your mind like a ninja to escape this pixelated nightmare! Once you reach the end, you’ll be back on track. Good luck!
            </p>

            {/* Maze canvas */}
            <canvas
                ref={canvasRef}
                width={dimensions.width}
                height={dimensions.height}
                className="mx-auto mt-6 z-10 touch-none"
            />

        </>
    );


};

export default Maze404;

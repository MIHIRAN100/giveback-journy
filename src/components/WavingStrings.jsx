import React, { useEffect, useRef } from 'react';

const WavingStrings = ({ 
    count = 7, 
    speed = 1, 
    opacity = 0.8, 
    interactive = true,
    className = '',
    style = {} 
}) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
    const isVisibleRef = useRef(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        // Resize handler
        const handleResize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Intersection Observer to stop animation when scrolled out of view
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting;
            },
            { threshold: 0.05 }
        );

        if (canvas.parentElement) {
            observer.observe(canvas.parentElement);
        }

        // Mouse movement handler
        const handleMouseMove = (e) => {
            if (!interactive) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.targetX = e.clientX - rect.left;
            mouseRef.current.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.targetX = -1000;
            mouseRef.current.targetY = -1000;
        };

        const parentEl = canvas.parentElement;
        if (interactive && parentEl) {
            parentEl.addEventListener('mousemove', handleMouseMove);
            parentEl.addEventListener('mouseleave', handleMouseLeave);
        }

        // Palette definition for strings (including crisp white glowing strings)
        const stringConfigs = [
            { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.95)', width: 3.2, freq: 0.003, amp: 48, speed: 0.014, yRatio: 0.25 },
            { color: '#f8fafc', glow: 'rgba(255, 255, 255, 0.85)', width: 2.4, freq: 0.004, amp: 38, speed: 0.018, yRatio: 0.4 },
            { color: '#10b981', glow: 'rgba(16, 185, 129, 0.6)', width: 2.2, freq: 0.0025, amp: 55, speed: 0.009, yRatio: 0.55 },
            { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.9)', width: 2.8, freq: 0.0035, amp: 35, speed: 0.015, yRatio: 0.7 },
            { color: '#e2e8f0', glow: 'rgba(255, 255, 255, 0.8)', width: 2.0, freq: 0.005, amp: 28, speed: 0.022, yRatio: 0.35 },
            { color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.5)', width: 2.2, freq: 0.0038, amp: 48, speed: 0.011, yRatio: 0.8 },
            { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.9)', width: 2.5, freq: 0.002, amp: 62, speed: 0.008, yRatio: 0.18 },
        ];

        // Draw loop
        const render = () => {
            animationFrameId = requestAnimationFrame(render);

            if (!isVisibleRef.current) return;

            const dpr = window.devicePixelRatio || 1;
            const width = canvas.width / dpr;
            const height = canvas.height / dpr;

            ctx.clearRect(0, 0, width, height);

            // Smooth mouse interpolation
            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

            time += 0.015 * speed;

            const linesToDraw = stringConfigs.slice(0, count);

            linesToDraw.forEach((cfg, idx) => {
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.lineWidth = cfg.width;

                // Create gradient stroke along width
                const grad = ctx.createLinearGradient(0, 0, width, height);
                grad.addColorStop(0, 'transparent');
                grad.addColorStop(0.15, cfg.color);
                grad.addColorStop(0.5, cfg.glow);
                grad.addColorStop(0.85, cfg.color);
                grad.addColorStop(1, 'transparent');

                ctx.strokeStyle = grad;
                ctx.shadowColor = cfg.glow;
                ctx.shadowBlur = 12;

                ctx.beginPath();

                const baseY = height * cfg.yRatio;
                const step = 6; // Sampling step

                for (let x = -20; x <= width + 20; x += step) {
                    // Sine wave calculation with multiple harmonics
                    const wave1 = Math.sin(x * cfg.freq + time * cfg.speed * 100 + idx) * cfg.amp;
                    const wave2 = Math.cos(x * cfg.freq * 1.5 - time * cfg.speed * 80) * (cfg.amp * 0.4);
                    let y = baseY + wave1 + wave2;

                    // Mouse displacement effect
                    if (mouseRef.current.x > -500) {
                        const dx = x - mouseRef.current.x;
                        const dy = y - mouseRef.current.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const maxDist = 200;

                        if (dist < maxDist) {
                            const factor = (1 - dist / maxDist) * 35;
                            // Push string upwards or downwards based on relative mouse Y
                            y += Math.sin(dist * 0.05 - time * 3) * factor;
                        }
                    }

                    if (x === -20) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.stroke();
                ctx.restore();
            });
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (parentEl) {
                parentEl.removeEventListener('mousemove', handleMouseMove);
                parentEl.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (canvas.parentElement) {
                observer.unobserve(canvas.parentElement);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, [count, speed, opacity, interactive]);

    return (
        <canvas
            ref={canvasRef}
            className={`waving-strings-canvas ${className}`}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                ...style
            }}
        />
    );
};

export default WavingStrings;

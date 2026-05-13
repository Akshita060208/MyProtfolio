import { useEffect, useRef } from 'react';

export default function PetalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number, particles: Particle[];
    const mouse = { x: -1000, y: -1000 };
    const particleCount = 40;
    const colors = ['#e8a0bf', '#fbb1d1', '#ffd8e6', '#874c67'];

    class Particle {
      x!: number;
      y!: number;
      size!: number;
      speedX!: number;
      speedY!: number;
      rotation!: number;
      rotationSpeed!: number;
      opacity!: number;
      color!: string;
      type!: number;
      scale!: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.size = Math.random() * 8 + 4;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1.5 + 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.type = Math.floor(Math.random() * 3);
        this.scale = 1;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 50);
        this.rotation += this.rotationSpeed;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const targetScale = 1.8;
          this.scale += (targetScale - this.scale) * 0.1;
        } else {
          this.scale += (1 - this.scale) * 0.05;
        }

        if (this.y > height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.scale(this.scale, this.scale);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        if (this.type === 0) {
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(this.size * 0.5, -this.size, this.size, this.size, 0, this.size * 2.5);
          ctx.bezierCurveTo(-this.size, this.size, -this.size * 0.5, -this.size, 0, 0);
        } else if (this.type === 1) {
          const s = this.size * 0.8;
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(0, 0, -s, 0, -s, s * 0.5);
          ctx.bezierCurveTo(-s, s, 0, s * 1.3, 0, s * 1.5);
          ctx.bezierCurveTo(0, s * 1.3, s, s, s, s * 0.5);
          ctx.bezierCurveTo(s, 0, 0, 0, 0, s * 0.3);
        } else {
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(this.size * 1.2, -this.size * 0.5, this.size * 1.2, this.size * 1.5, 0, this.size * 1.5);
          ctx.bezierCurveTo(-this.size * 1.2, this.size * 1.5, -this.size * 1.2, -this.size * 0.5, 0, 0);
        }
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

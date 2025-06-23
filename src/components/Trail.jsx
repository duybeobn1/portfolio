import { useEffect, useRef } from "react";

const InkTrailCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas on window resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let points = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      points = points.filter((p) => now - p.time < 400); // keep points < 400ms old

      ctx.beginPath();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];

        const age = now - p1.time;
        const opacity = 1 - age / 400;

        ctx.strokeStyle = `rgba(120, 120, 120, ${opacity})`;
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };
    animate();

    const addPoint = (e) => {
      points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    };

    window.addEventListener("mousemove", addPoint);

    return () => {
      window.removeEventListener("mousemove", addPoint);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
    />
  );
};

export default InkTrailCursor;

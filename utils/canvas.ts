const delaunayFast = require('delaunay-fast');

class Point {
  x: number;
  y: number;
  velX: number;
  velY: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.velX = (Math.random() - 0.5) * 0.4;
    this.velY = (Math.random() - 0.5) * 0.4;
  }

  update(width: number, height: number) {
    this.x += this.velX;
    this.y += this.velY;

    if (this.x >= width) this.x = 0;
    if (this.x <= 0) this.x = width;
    if (this.y >= height) this.y = 0;
    if (this.y <= 0) this.y = height;
  }
}

export class DelaunaySystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private points: Point[] = [];
  private width: number = 0;
  private height: number = 0;
  private animationId: number | null = null;
  private count: number;
  private mouseX: number = 0;
  private mouseY: number = 0;

  constructor(canvas: HTMLCanvasElement, count = 500) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.count = count;
    this.resize();
    this.initPoints();

    window.addEventListener('mousemove', e => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  public resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.initPoints();
  }

  private initPoints() {
    this.points = [];
    for (let i = 0; i < this.count; i++) {
      this.points.push(new Point(this.width, this.height));
    }
  }

  private drawTriangle(i1: number, i2: number, i3: number, vertices: number[][]) {
    const a = vertices[i1];
    const b = vertices[i2];
    const c = vertices[i3];

    const centerX = (a[0] + b[0] + c[0]) / 3;
    const centerY = (a[1] + b[1] + c[1]) / 3;
    const distance = Math.hypot(centerX - this.mouseX, centerY - this.mouseY);
    const radius = 500;

    const visibility = Math.min(1, Math.max(0, 1 - (distance - 50) / (radius - 50)));
    const opacity = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 3e4;
    if (visibility <= 0.05) return;

    this.ctx.beginPath();
    this.ctx.moveTo(a[0], a[1]);
    this.ctx.lineTo(b[0], b[1]);
    this.ctx.lineTo(c[0], c[1]);
    this.ctx.closePath();

    this.ctx.fillStyle = `rgba(65, 41, 90, ${opacity * visibility * 2})`;
    this.ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * visibility * 0.5})`;
    this.ctx.fill();
    this.ctx.stroke();
  }

  public start() {
    const render = () => {
      this.ctx.fillStyle = '#1C172E';
      this.ctx.fillRect(0, 0, this.width, this.height);

      const vertices = this.points.map(p => {
        p.update(this.width, this.height);
        return [p.x, p.y];
      });

      vertices.push([0, 0], [this.width, 0], [0, this.height], [this.width, this.height]);
      const triangles = delaunayFast.triangulate(vertices);

      for (let i = 0; i < triangles.length; i += 3) {
        this.drawTriangle(triangles[i], triangles[i + 1], triangles[i + 2], vertices);
      }

      this.animationId = requestAnimationFrame(render);
    };

    render();
  }

  public stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

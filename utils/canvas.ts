type Color = {
  r: number;
  g: number;
  b: number;
};

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

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const MOUSE_RADIUS = 300;
const MOUSE_INNER = 50;

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
  private color: Color = { r: 65, g: 41, b: 90 };
  private lastFrameTime: number = 0;
  private vertices: number[][] = [];
  private boundMouseMove: (e: MouseEvent) => void;

  constructor(canvas: HTMLCanvasElement, count = 500) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.count = count;
    this.resize();
    this.initPoints();

    this.boundMouseMove = (e: MouseEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    };
    window.addEventListener('mousemove', this.boundMouseMove);
  }

  public resize() {
    const dpr = window.devicePixelRatio || 1;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.initPoints();
  }

  private initPoints() {
    this.points = [];
    this.vertices = [];
    for (let i = 0; i < this.count + 4; i++) {
      this.vertices.push([0, 0]);
    }
    for (let i = 0; i < this.count; i++) {
      this.points.push(new Point(this.width, this.height));
    }
  }

  private drawTriangle(i1: number, i2: number, i3: number) {
    const p1 = this.vertices[i1];
    const p2 = this.vertices[i2];
    const p3 = this.vertices[i3];

    const centerX = (p1[0] + p2[0] + p3[0]) / 3;
    const centerY = (p1[1] + p2[1] + p3[1]) / 3;

    const dx = centerX - this.mouseX;
    const dy = centerY - this.mouseY;
    const distSq = dx * dx + dy * dy;
    const radiusSq = MOUSE_RADIUS * MOUSE_RADIUS;

    if (distSq > radiusSq) return;

    const distance = Math.sqrt(distSq);
    const visibility = Math.min(1, Math.max(0, 1 - (distance - MOUSE_INNER) / (MOUSE_RADIUS - MOUSE_INNER)));
    if (visibility <= 0.3) return;

    const opacity = Math.abs(p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1])) / 3e4;

    this.ctx.beginPath();
    this.ctx.moveTo(p1[0], p1[1]);
    this.ctx.lineTo(p2[0], p2[1]);
    this.ctx.lineTo(p3[0], p3[1]);
    this.ctx.closePath();

    const { r, g, b } = this.color;

    this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * visibility * 2})`;
    this.ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * visibility * 0.25})`;
    this.ctx.fill();
    this.ctx.stroke();
  }

  public setColor(red: number, green: number, blue: number) {
    this.color = { r: red, g: green, b: blue };
  }

  public start() {
    const render = (now: number) => {
      this.animationId = requestAnimationFrame(render);

      const delta = now - this.lastFrameTime;
      if (delta < FRAME_INTERVAL) return;
      this.lastFrameTime = now - (delta % FRAME_INTERVAL);

      this.ctx.fillStyle = '#1C172E';
      this.ctx.fillRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.count; i++) {
        const p = this.points[i];
        p.update(this.width, this.height);
        this.vertices[i][0] = p.x;
        this.vertices[i][1] = p.y;
      }

      // Corner points
      this.vertices[this.count][0] = 0;
      this.vertices[this.count][1] = 0;
      this.vertices[this.count + 1][0] = this.width;
      this.vertices[this.count + 1][1] = 0;
      this.vertices[this.count + 2][0] = 0;
      this.vertices[this.count + 2][1] = this.height;
      this.vertices[this.count + 3][0] = this.width;
      this.vertices[this.count + 3][1] = this.height;

      const triangles = delaunayFast.triangulate(this.vertices);

      for (let i = 0; i < triangles.length; i += 3) {
        this.drawTriangle(triangles[i], triangles[i + 1], triangles[i + 2]);
      }
    };

    this.animationId = requestAnimationFrame(render);
  }

  public stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    window.removeEventListener('mousemove', this.boundMouseMove);
  }
}

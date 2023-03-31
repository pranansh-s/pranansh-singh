import { NextPage } from "next";
import { useEffect, useRef } from "react";

import * as delaunayFast from 'delaunay-fast';
import { motion } from "framer-motion";

const Canvas: NextPage = (props) => {
    const canRef = useRef<HTMLCanvasElement>(null);
    let canvas = canRef.current as HTMLCanvasElement;

    let points: point[] = [];
    let tri: any[] = [], del;
    let COUNT = 200;

    const init = () => {
        for (var i = 0; i < COUNT; i++) {
          let p = new point();
          points.push(p);

          tri.push([p.x, p.y]);
        }
        let a = new point();
        a.x = 0;
        a.y = 0;
        a.velx = 0;
        a.vely = 0;
        points.push(a);

        let b = new point();
        b.velx = 0;
        b.vely = 0;
        b.x = canvas.width;
        b.y = 0;
        points.push(b);

        let c = new point();
        c.velx = 0;
        c.vely = 0;
        c.x = 0;
        c.y = canvas.height;
        points.push(c);

        let d = new point();
        d.velx = 0;
        d.vely = 0;
        d.x = canvas.width;
        d.y = canvas.height;
        points.push(d);

        tri.push([0, 0]);
        tri.push([canvas.width, 0]);
        tri.push([0, canvas.height]);
        tri.push([canvas.width, canvas.height]);
        console.log(points);
    }

    const drawTriangle = (ctx: any, x: number, y: number, z: number) => {
        let a = points[x],
            b = points[y],
            c = points[z];
        
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.lineTo(c.x, c.y);
        ctx.closePath();
        
        let opa = Math.abs(a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y)) / (3e4);
        ctx.fillStyle = `rgba(50, 41, 90, ${opa})`;
        ctx.fill();
        ctx.stroke();
    }

    class point {
        x: number;
        y: number;
        velx: number;
        vely: number;
        constructor() {
            this.x = Math.floor(Math.random() * canvas.width);
            this.y = Math.floor(Math.random() * canvas.height);
            this.velx = (Math.random() - 0.5) * 0.4;
            this.vely = (Math.random() - 0.5) * 0.4;
        }
        
        update() {
            this.x += this.velx;
            this.y += this.vely;
        
            if (this.x >= canvas.width) this.x = 1;
            if (this.x <= 0) this.x = canvas.width - 1;
            if (this.y >= canvas.height) this.y = 1;
            if (this.y <= 0) this.y = canvas.height - 1;
        }
    }

    useEffect(() => {
        canvas = canRef.current as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');
        let animationId: any;

        const render = () => {
            ctx!.strokeStyle = "#00000000";
            ctx!.fillStyle = "#1C172E";
            ctx!.fillRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < COUNT; i++) {
                points[i].update();
                tri[i][0] = points[i].x;
                tri[i][1] = points[i].y;
            }

            del = delaunayFast.triangulate(tri);
            for (var i = 0; i < del.length; i += 3) {
                drawTriangle(ctx, del[i], del[i + 1], del[i + 2]);
            }
            animationId = window.requestAnimationFrame(render);
        }

        if(!points.length) init();
        render();

        return () => window.cancelAnimationFrame(animationId);
    }, []);


    return(
        <div className="fixed top-0 left-0 -z-10">
            <canvas className="absolute" ref={canRef} {...props}/>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute w-screen h-screen" style={{boxShadow: "inset 0px 0px 100px 83px rgba(0, 0, 0, 0.7)"}} />
        </div>
    ) 
}

export default Canvas;
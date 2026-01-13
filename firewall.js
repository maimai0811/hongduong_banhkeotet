const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
let cw, ch;

function resizeCanvas() {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, color, speed, angle) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.angle = angle;
        this.alpha = 1;
        this.gravity = 0.05;
        this.friction = 0.98;
        this.trail = [];
    }

    update() {
        this.trail.push({x:this.x, y:this.y});
        if(this.trail.length > 5) this.trail.shift();

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.speed *= this.friction;
        this.alpha -= 0.015;
    }

    draw() {
        for(let i=0; i<this.trail.length; i++){
            const point = this.trail[i];
            ctx.globalAlpha = (i/this.trail.length) * this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 2, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }
}

class Firework {
    constructor() {
        this.x = Math.random() * cw * 0.8 + cw*0.1;
        this.y = ch;
        this.targetY = Math.random()*ch*0.5 + ch*0.2;
        this.speed = Math.random()*6 + 4;
        this.color = ['#c81e1e','#f59e0b','#fcd34d'][Math.floor(Math.random()*3)];
        this.exploded = false;
        this.particles = [];
        this.trail = [];
    }

    update() {
        if(!this.exploded){
            this.trail.push({x:this.x, y:this.y});
            if(this.trail.length > 5) this.trail.shift();
            this.y -= this.speed;
            if(this.y <= this.targetY) this.explode();
        }

        this.particles.forEach(p => p.update());
        this.particles = this.particles.filter(p => p.alpha > 0);
    }

    explode() {
        this.exploded = true;
        const count = 80 + Math.floor(Math.random()*40);
        for(let i=0; i<count; i++){
            const angle = Math.random()*Math.PI*2;
            const speed = Math.random()*6 + 2;
            this.particles.push(new Particle(this.x, this.y, this.color, speed, angle));
        }
    }

    draw() {
        if(!this.exploded){
            // vẽ quả pháo và trail
            for(let i=0; i<this.trail.length; i++){
                const point = this.trail[i];
                ctx.globalAlpha = i/this.trail.length;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 3, 0, Math.PI*2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 4, 0, Math.PI*2);
            ctx.fill();
        }
        this.particles.forEach(p => p.draw());
    }
}

let fireworks = [];
let lastSpawn = 0;

function animate(timestamp){
    ctx.clearRect(0,0,cw,ch);

    if(!lastSpawn || timestamp - lastSpawn > 700){
        fireworks.push(new Firework());
        lastSpawn = timestamp;
    }

    fireworks.forEach(fw => { fw.update(); fw.draw(); });
    fireworks = fireworks.filter(fw => !fw.exploded || fw.particles.length > 0);

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

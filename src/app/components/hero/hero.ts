import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,  // MUST have this
  imports: [CommonModule],  // MUST have this
  templateUrl: './hero.html',  // Your HTML file name
  styleUrls: ['./hero.scss']   // Your SCSS file name
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  typedText = '';
  private words = ['Angular Developer', 'UI Architect', 'RxJS Expert', 'Component Designer'];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout: any;
  private animationFrameId: number = 0;

  ngOnInit() {
    this.startTypingAnimation();
    this.setupParticleBackground();
  }

  startTypingAnimation() {
    const type = () => {
      const currentWord = this.words[this.wordIndex];
      
      if (this.isDeleting) {
        this.typedText = currentWord.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.typedText = currentWord.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      if (!this.isDeleting && this.charIndex === currentWord.length) {
        this.isDeleting = true;
        this.typingTimeout = setTimeout(type, 2000);
        return;
      }

      if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }

      const speed = this.isDeleting ? 50 : 100;
      this.typingTimeout = setTimeout(type, speed);
    };
    
    type();
  }

  setupParticleBackground() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      
      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      this.animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
  }

  ngOnDestroy() {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }
}
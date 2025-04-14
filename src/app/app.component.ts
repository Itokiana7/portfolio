import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  @ViewChild('cursor') cursor!: ElementRef<HTMLDivElement>;

  private mouseX = 0;
  private mouseY = 0;
  private currentX = 0;
  private currentY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)){
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      });
  
      this.animateCursor();
    }
    
  }

  animateCursor() {
    const el = this.cursor.nativeElement;

    const animate = () => {
      this.currentX += (this.mouseX - this.currentX) * 0.1;
      this.currentY += (this.mouseY - this.currentY) * 0.1;

      el.style.left = `${this.currentX}px`;
      el.style.top = `${this.currentY}px`;

      requestAnimationFrame(animate);
    };

    animate();
  }
}

import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PopupComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  show : boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }


onPopup(){
  this.show = !this.show;
  console.log(this.show);
}

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#zoom-out", {
        scale: 2.5, // Tu peux tester entre 2 et 10 pour voir ce qui rend bien
        opacity: 0,
        filter: "blur(5px)",
        scrollTrigger: {
          trigger: "#zoom-out",
          pin: true,
          scrub : 2,
          end: "+=" + window.innerHeight * 0.001,
        }
      });

      gsap.to("#about-me", {
        opacity: 1, // Fade-in effect
        y: 50,      // Slide-up effect from 50px below
        duration: 1,  // Duration of the effect
        ease: "power2.out", // Smooth easing for the animation
        scrollTrigger: {
          trigger: "#about-me",
          start: "top 80%",  // When #about-me reaches 80% of the viewport height
          end: "bottom top", // End when it completely reaches the top of the viewport
          scrub: true, // Smooth transition as you scroll
        }
      });
    }
  }
}

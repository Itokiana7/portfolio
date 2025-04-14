import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { HeaderComponent } from '../../component/header/header.component';
import { SkillsComponent } from '../../component/skills/skills.component';
import { ExperienceComponent } from '../../component/experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".txt1",{
        x: "52vw",
        duration: 3,
        scrollTrigger:{
          trigger : ".txt1",
          start : "top 80%"
        } 
      });
    }
  }

}

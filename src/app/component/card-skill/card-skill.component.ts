import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  standalone: true,
  imports: [],
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.scss'
})
export class CardSkillComponent {
  @Input() id!:number;
  @Input() skill!:string;
}

import { Component, inject } from '@angular/core';
import { CardSkillComponent } from '../card-skill/card-skill.component';
import { Skill } from '../../interface/skill';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../service/skill.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardSkillComponent,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  _skill_Service = inject(SkillService);
  listHardSkills! : Skill[];
  listSoftSkills! : Skill[];
  constructor(){
    this.listHardSkills = this._skill_Service.listHardSkills;
    this.listSoftSkills = this._skill_Service.listSoftSkills;
  }
}

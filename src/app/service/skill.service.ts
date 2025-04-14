import { Injectable } from '@angular/core';
import { Skill } from '../interface/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  listHardSkills : Skill[] = [
    {
      id : 1,
      name : 'HTML/CSS'
    },
    {
      id : 2,
      name : 'javascript'
    },
    {
      id : 3,
      name : 'PHP'
    },
    {
      id : 4,
      name : 'Laravel'
    },
    {
      id : 5,
      name : 'Angular'
    },
    {
      id : 6,
      name : 'C#.net'
    },
    {
      id : 7,
      name : 'Maintenance et Reseaux'
    },
    {
      id : 8,
      name : 'Git'
    },
    {
      id : 9,
      name : 'Adobe Illustrator'
    },
    
  ]
  
  listSoftSkills : Skill[] = [
    {
      id : 1,
      name : 'Communication'
    },
    {
      id : 2,
      name : 'Teamwork'
    },
    {
      id : 3,
      name : 'Problem-Solving'
    },
    {
      id : 4,
      name : 'Adaptability'
    },
    {
      id : 5,
      name : 'Time Management'
    },
    {
      id : 6,
      name : 'Curiosity'
    },
    {
      id : 7,
      name : 'Patience'
    },
    {
      id : 8,
      name : 'Empathy'
    },
    {
      id : 9,
      name : 'Openness to Feedback'
    },
    
  ]
  constructor() { }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frameworks',
      icon: '⚡',
      skills: [
        { name: 'Angular (v12+)', level: 92 },
        { name: 'RxJS / NgRx', level: 88 },
        { name: 'Angular Material', level: 90 }
      ]
    },
    {
      name: 'Languages',
      icon: '💻',
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript ES6+', level: 88 },
        { name: 'HTML5/CSS3', level: 92 }
      ]
    },
    {
      name: 'Tools & Cloud',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Azure AZ-900', level: 85 },
        { name: 'Postman / DevOps', level: 87 }
      ]
    }
  ];
}
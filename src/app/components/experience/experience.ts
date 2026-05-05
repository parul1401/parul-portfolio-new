import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,  // MUST have this
  imports: [CommonModule],  // MUST have this
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Analyst (Angular Developer)',
      company: 'Capgemini',
      date: '2023 – Present',
      location: 'Bengaluru, India',
      projects: [
        {
          name: 'Skill Management System',
          description: 'Built a Skill Management System used by ~100,000 factory operators using Angular, Angular Material, and TypeScript, providing real-time tracking of tasks and skill levels with hierarchical role support (Operators, Managers, Admins, Super-Admins).',
          achievements: [
            'Reduced manual admin tasks by ~80% through operational visibility dashboards',
            'Developed scalable, responsive, and accessible SPA-like frontend interfaces',
            'Created generic, reusable components including tables, forms, modals, dropdowns'
          ],
          tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'HTML5/CSS3']
        },
        {
          name: 'Blood Bank Management System',
          description: 'Built a responsive, mobile-first Angular UI using component-driven architecture for inventory tracking, donor registration, and inter-bank blood transfer workflows.',
          achievements: [
            'Ensured seamless usability across devices with dynamic data binding',
            'Implemented intuitive UI/UX flows with Angular Material',
            'Optimized navigation for blood bank staff across varying screen sizes'
          ],
          tech: ['Angular', 'TypeScript', 'Angular Material', 'RxJS', 'Responsive Design']
        },
        {
          name: 'Car Rental Application',
          description: 'Led end-to-end frontend development of a web-based car rental platform with streamlined vehicle browsing and booking experience.',
          achievements: [
            'Engineered reusable components for vehicle listings and booking functionality',
            'Implemented responsive UI/UX designs using CSS3 flexbox/grid',
            'Followed component-based architecture best practices'
          ],
          tech: ['Angular', 'TypeScript', 'JavaScript', 'CSS3', 'HTML5']
        }
      ]
    }
  ];
}
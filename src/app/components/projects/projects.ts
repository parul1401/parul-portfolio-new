import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Skill Management System',
      type: 'Enterprise',
      description: 'Scalable system for tracking factory operator skills and tasks serving 100,000+ users with hierarchical role support.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Material'],
      highlights: ['80% reduction in manual tasks', 'Real-time dashboards', 'Reusable components']
    },
    {
      name: 'Blood Bank Management',
      type: 'Healthcare',
      description: 'Mobile-first platform for inventory tracking, donor registration, and inter-bank blood transfers.',
      tech: ['Angular', 'Angular Material', 'RxJS', 'PWA'],
      highlights: ['Seamless cross-device', 'Optimized data display', 'Intuitive UI/UX']
    },
    {
      name: 'Car Rental Platform',
      type: 'E-commerce',
      description: 'Full-featured vehicle browsing and booking platform with payment integration.',
      tech: ['Angular', 'JavaScript', 'CSS3', 'REST API'],
      highlights: ['Component architecture', 'Responsive design', 'Booking system']
    }
  ];

  getProjectIcon(name: string): string {
    const icons: { [key: string]: string } = {
      'Skill Management System': '🏭',
      'Blood Bank Management': '🏥',
      'Car Rental Platform': '🚗'
    };
    return icons[name] || '💻';
  }
}
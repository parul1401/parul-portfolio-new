import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,  // ADD THIS
  imports: [CommonModule],  // ADD THIS
  templateUrl: './about.html',  // Fixed path
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  aboutData = {
    name: 'Parul',
    role: 'Angular Frontend Developer',
    experience: '2.4+ years',
    location: 'Bengaluru, India',
    email: 'vermaparul1114@gmail.com',
    phone: '+91 7973105258',
    description: 'Results-driven Angular Frontend Developer with 2.4+ years of experience building scalable, responsive, and accessible web applications. Proven track record of delivering pixel-perfect, component-driven UIs across enterprise-scale healthcare and manufacturing projects—serving up to 100,000 users.'
  };
}
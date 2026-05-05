import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Import all components
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './shared/header/header';
import { ParticleBackgroundComponent } from './shared/particle-background/particle-background';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    Contact,
    FooterComponent,
    HeaderComponent,
    ParticleBackgroundComponent,
    ThemeToggleComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppComponent {
  title = 'parul-portfolio';
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,  // MUST have this
  imports: [CommonModule],  // MUST have this
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactInfo = {
    email: 'vermaparul1114@gmail.com',
    phone: '+91 7973105258',
    location: 'Bengaluru, India'
  };
}
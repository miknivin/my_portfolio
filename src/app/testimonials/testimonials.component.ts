import { Component } from '@angular/core';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  swiperOptions = {
    autoplay: {
      delay: 8000 // Delay of 3 seconds
    }
  };
}

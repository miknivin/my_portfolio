import { Component } from '@angular/core';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query('.service-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ServicesComponent {
  removeLineClamp = false;
  removeLineClamp2 = false;
  removeLineClamp3 = false;
  removeLineClamp4 = false;

  constructor(public dialog: MatDialog) {}

  openDialog(data:any): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: 'auto',
      data: data
    });
  }
}

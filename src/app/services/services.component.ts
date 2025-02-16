import { Component } from '@angular/core';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
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

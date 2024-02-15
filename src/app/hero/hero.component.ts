import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  isDarkMode!: boolean

  constructor(public dialog: MatDialog,private sharedService: SharedService) {}
  ngOnInit(): void {
    //Check if the system prefers dark mode

    this.sharedService.getIsDarkMode().subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: 'auto',
    });
  }

}

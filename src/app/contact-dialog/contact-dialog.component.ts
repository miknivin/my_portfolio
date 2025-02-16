import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css'],
  animations: [
    trigger('scaleAnimation', [
      state('void', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      state('*', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('void => *', animate('300ms ease-in')),
      transition('* => void', animate('300ms ease-out'))
    ])
  ]
})
export class ContactDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    private api:ApiService) {}

  selectedCountryCode: string = '+91';
  allCountries:any[] = [];
  formError:boolean = false;
  formSuccess:boolean = false;
  submitted:boolean = false;
  loading:boolean = false;

  services:any[] = [
    { name: 'Ecommerce', selected: false },
    { name: 'Landing Page', selected: false },
    { name: 'Website', selected: false },
    { name: 'Business Automation', selected: false }
  ];

  formData = {
    fullName:'',
    email: '',
    countryCode:'+91',
    phone: '',
    services:this.services.filter(service=>service.selected),
    message:''
  };

  ngOnInit(): void {
    this.getAllCOuntries()
    // console.log('Data received in ContactDialogComponent:', this.data);
    this.services.forEach((service)=>{
      if (this.data === service.name) {
        service.selected = true;
      }
    })
  }

  getAllCOuntries():void{
    this.api.getAllCOuntries().subscribe(data => {
      this.allCountries = data
    });
  }

  onCountryChange(event: any) {
    const selectedCountryCode = event?.target?.value;
    if (selectedCountryCode) {
      // console.log('Selected Country Code:', selectedCountryCode);
    }
  }


  onSubmit(){
    // Get the selected services
    const selectedServices = this.services.filter(service => service.selected).map(service => service.name);

    // Create a new object with the contact data
    const contactData = {
       ...this.formData,
       services: selectedServices,
       phone: this.selectedCountryCode + this.formData.phone,
    };

    // Make a POST request to the API with the contact data
    this.postContact(contactData);
   }

  postContact(contactData: any) {

    this.loading = true;
    console.log(contactData);

    this.api.postContact(contactData)
      .subscribe(
        (response) => {
          this.loading=false;
          // console.log('Contact created successfully:', response);
          this.submitted=true
        },
        (error) => {
          this.loading = false;
          console.error('Error creating contact:', error);
          // alert(`Error posting ${error}`)
          this.formError=true;
        }
      );
  }

  checkBox(event: Event, index: number): void {
    const value = (event.target as HTMLInputElement).value;
    this.services[index].selected = (event.target as HTMLInputElement).checked;
    console.log(this.services);
   }

   redirectToNewTab(link: string): void {
    window.open(link, '_blank');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

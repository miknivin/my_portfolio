import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],

})
export class ContactFormComponent implements OnInit {

  constructor(private api:ApiService){}

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
  }



  getAllCOuntries():void{
    this.api.getAllCOuntries().subscribe(data => {
      this.allCountries = data
    });
  }

  onCountryChange(event: any) {
    const selectedCountryCode = event?.target?.value;
    if (selectedCountryCode) {
      console.log('Selected Country Code:', selectedCountryCode);
      // You can do whatever you need with the selectedCountryCode here
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
          console.log('Contact created successfully:', response);
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

}

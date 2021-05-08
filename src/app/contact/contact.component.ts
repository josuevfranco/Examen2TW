import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name : string = "";
  mail : string = "";
  msg  : string = "";

  color1 : string = "white";
  color2 : string = "white";
  color3 : string = "white";

  comprobar(){


    if (this.name == ""){
      this.color1 = "#4ad395"
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill the blank spaces!',
      })
    } else if (this.mail == ""){
      this.color2 = "#4ad395"
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill the blank spaces!',
      })
    } else if (!this.mail.includes('@')){
      this.color2 = "#4ad395"
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid e-mail!',
      })
    }
    else{
      this.name = "";
      this.msg = "";
      this.mail = "";
      this.color1 = "white";
      this.color2 = "white";
      Swal.fire(
        'Good job!',
        'You have subscribed successfully!',
        'success'
      )
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}

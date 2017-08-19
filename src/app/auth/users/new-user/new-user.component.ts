import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component( {
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: [ './new-user.component.css' ]
} )
export class NewUserComponent implements OnInit {

  form = new FormGroup( {
    user: new FormGroup( {
      name: new FormControl( '' ),
      email: new FormControl( '' ),
      username: new FormControl( '' ),
      password: new FormControl( '' )
    } )
  } );

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log( 'Submit', this.form.value );
  }

}

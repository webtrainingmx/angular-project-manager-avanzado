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
      username: new FormControl('luis-rodriguez'),
      password: new FormControl('pass')
    } )
  } );

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }

}

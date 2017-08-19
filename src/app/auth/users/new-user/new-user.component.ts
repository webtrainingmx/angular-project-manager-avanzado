import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component( {
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: [ './new-user.component.css' ]
} )
export class NewUserComponent implements OnInit {

  form = this._formBuilder.group( {
    user: this._formBuilder.group( {
      name: [ '', Validators.required ],
      email: [ '', [ Validators.email, Validators.required ] ],
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    } )
  } );

  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log( 'Submit', this.form.value );
  }

  isRequired( fieldName: string ): boolean {
    return this.form.get( `user.${fieldName}` ).hasError( 'required' )
      && this.form.get( `user.${fieldName}` ).touched;
  }
}

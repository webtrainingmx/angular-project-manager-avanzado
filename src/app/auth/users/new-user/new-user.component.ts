import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewUserValidators } from './new-user.validators';

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
      password: [ '', [ Validators.required, NewUserValidators.checkPassword ] ]
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

  isInvalidPassword() {
    const field = 'user.password';
    return (
      this.form.get( field ).hasError( 'invalidPassword' ) &&
      // The user has actually interacted with the field
      this.form.get( field ).dirty &&
      // The user has actually typed
      ! this.isRequired( 'password' )
    );
  }

  isInvalidEmail() {
    const field = 'user.email';
    return (
      this.form.get( field ).hasError( 'email' )
    );
  }
}

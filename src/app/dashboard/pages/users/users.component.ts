import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  nameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(2),
  ]);
  surnameControl = new FormControl(null, [
    Validators.required,
  ]);
  emailControl = new FormControl();
  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/)
  ]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  });

  onSubmit(): void {
    alert(JSON.stringify(this.userForm.value));
  }
}

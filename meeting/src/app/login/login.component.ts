import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the form
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle form submission here
    if (this.userForm.valid) {
      const username = this.userForm.get('username').value;
      const password = this.userForm.get('password').value;

      // You can now use the username and password values as needed.
      console.log('Username:', username);
      console.log('Password:', password);

      if (username == "admin" && password == "1234") {
        this.router.navigate(['admin']);
      } else {
        alert("Please enter valid credentials")
      }
    }

  }


}

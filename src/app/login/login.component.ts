import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  error: string = "";


  loginForm: any = new FormGroup({
    role: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }



  submitForm(loginForm: any) {
    if (loginForm.valid) {
      let roleIn = loginForm.value.role.toUpperCase()
      this.authService.login(roleIn).subscribe(user => {
        console.log(user);
        this.router.navigate(['/home']);
      })
    }
  }
}


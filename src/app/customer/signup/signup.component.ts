import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models/user.model';
import { CustomerService } from 'src/app/customer/services/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  customerForm!: FormGroup;
  submitted = false;//
  errorMessage = '';//
  countries = [
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
    { code: 'BT', name: 'Bhutan', flag: '🇧🇹' },
    { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: 'MV', name: 'Maldives', flag: '🇲🇻' },
    { code: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
    { code: 'IR', name: 'Iran', flag: '🇮🇷' },
    { code: 'IQ', name: 'Iraq', flag: '🇮🇶' }
  ];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.fb.group({
      country: ['BD', Validators.required],
      role: ['buyer', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      companyName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneCode: ['880', Validators.required],
      phoneArea: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      agreedToTerms: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const userData: User = {
        country: this.customerForm.value.country,
        role: this.customerForm.value.role,
        email: this.customerForm.value.email,
        password: this.customerForm.value.password,
        companyName: this.customerForm.value.companyName,
        firstName: this.customerForm.value.firstName,
        lastName: this.customerForm.value.lastName,
        phoneCode: this.customerForm.value.phoneCode,
        phoneArea: this.customerForm.value.phoneArea,
        phoneNumber: this.customerForm.value.phoneNumber,
        agreedToTerms: this.customerForm.value.agreedToTerms
      };

      this.customerService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/registration-success']);
        },
        error: (error) => {
          console.error('Registration failed', error);
        }
      });
    }
  }
}
// src/app/components/registration/registration.component.ts
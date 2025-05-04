import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) return;
  
    this.loading = true;
    const { email, password } = this.loginForm.value;
  
    this.authService.login(email, password).subscribe({
      next: (user) => {
        this.loading = false;
        if (!user) {
          this.errorMessage = 'Invalid email or password';
          return;
        }
  
        // 'supplier' এর বদলে 'seller' ব্যবহার করুন
        if (user.role === 'seller') {
          this.router.navigate(['/suplier-dashboard']); // বা '/supplier-dashboard'
        } else if (user.role === 'buyer') {
          this.router.navigate(['/buyer-dashboard']);
        } else {
          this.errorMessage = 'Unknown user role';
        }
      },
      error: () => {
        this.errorMessage = 'Login failed. Please try again.';
        this.loading = false;
      }
    });
  }
}
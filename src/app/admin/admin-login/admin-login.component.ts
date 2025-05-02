import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin(): void {
    this.adminService.login(this.email, this.password).subscribe(admins => {
      if (admins.length > 0) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    });
  }

}

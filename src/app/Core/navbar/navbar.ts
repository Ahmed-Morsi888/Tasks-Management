import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../user/user';
import { Admin } from '../../admin/admin';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  _authService = inject(AuthService);
  islogged: boolean = this._authService.isloggedin();
}

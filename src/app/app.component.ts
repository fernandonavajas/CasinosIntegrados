import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/ {

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;
  constructor(private router: Router, private navBarService: NavbarService) {

  }
  ngOnInit() {
    this.links = this.navBarService.getLinks();
    this.navBarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }
  logout() {
    this.navBarService.updateLoginStatus(false);
    this.router.navigate(['/']);
  }
}

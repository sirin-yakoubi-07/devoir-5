import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, RouterLink , FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  protected readonly title = signal('Game');
  constructor (public authService: Auth , private router : Router) {} 
onLogout(){ 
this.authService.logout(); 
}
ngOnInit () { 
  let isloggedin: string; 
  let loggedUser:string; 
  isloggedin = localStorage.getItem('isloggedIn') !; 
  loggedUser = localStorage.getItem('loggedUser') !; 
  if (isloggedin!="true" || !loggedUser) 
      this.router.navigate(['/login']); 
  else 
   this.authService.setLoggedUserFromLocalStorage(loggedUser); 
} 
}

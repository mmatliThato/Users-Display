import { UserprofileComponent } from './../userprofile/userprofile.component';
import { Router } from '@angular/router';
import { User } from './../../interfaces/user.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// users :any

users:any = [];


  constructor(private userService:UserService,
  private router:Router


  ) { }

  ngOnInit(): void {
    // this.getUsers()
    this.GetUser()
  }




GetUser() {

this.userService.GetUser().subscribe((data) => {


console.log(  "hettt there users",data);
this.users = data
console.log(  "heyyyyy there users",this.users);
})

}




goToProductDetails(id:any) {

  this.router.navigate(['/UserprofileComponent', id]);
}



}

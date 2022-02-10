import { User } from './../../interfaces/user.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {



  id:any;
user:any={}

  title: any;




  constructor(

  private router: Router,
  private activatedRoute: ActivatedRoute,
  private userService :UserService

  ) { }

  ngOnInit(): void {




 const params = this.activatedRoute.snapshot.params;
  console.log("param",params);
    if (params.id) {
      this.userService.getdata(params.id)
        .subscribe(
          res => {

            this.user = res;

 console.log("user 1", res);

          },
          err => console.log(err)
        )
    }

  }

}

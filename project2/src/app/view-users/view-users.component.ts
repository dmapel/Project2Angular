import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  user: User;
  constructor(private adminService : AdminService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  usersTable!:User[]

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUsersList().subscribe( data =>{
      this.usersTable = data;
      console.log(data);
    })
  }
  

  deleteUserById(userID:number){
    this.userService.deleteUserById(userID).subscribe( () => {
      this.usersTable = this.usersTable.filter((user) => user.id !== userID);
    })
  }




}

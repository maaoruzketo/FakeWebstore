import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/shared/interfaces/user'
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private dService: DataService, private sendMe: Router) {
    dService.setUserList();
  }
  ngOnInit() {
  }

  signUp(userName: string, firstName: string, lastName: string, email: string, confirmEmail: string, passWord: string, confirmPassword: string) {
    //Check if email is confirmed
    //check if passWord is the same
    if (email === confirmEmail && passWord.length > 3) {
      //check if passWord matches
      if (passWord === confirmPassword) {
        //check to see if userName is taken
        if (this.dService.checkIfUserExists(userName)) {
          alert('Username already exists');
        } else {
          //send the entire object to be added to userList
          let addThisName: User = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            passWord: passWord
          };

          this.sendMe.navigate(['/wond']);
          this.dService.addUser(addThisName);
        }
        //this.dService.addUser(userName, passWord)
      } else {
        alert('Password does not match');
      }
    } else {
      alert('An unexpected error occured. Please refresh the page.');
    }
    //We are going to compare passWord stored in our service
  }

  logIn(userName: string, passWord: string) {
    if (this.dService.checkCred(userName, passWord)) {
      alert('You logged In');
    } else {
      alert('Incorrect login info. Please try again.')
    }
  }
}

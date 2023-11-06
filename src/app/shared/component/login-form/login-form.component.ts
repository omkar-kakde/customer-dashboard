import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router : Router,
    private _snackBar: MatSnackBar
    ) { }
  username! : string;
  passwords! : string;

 
  loginform = new FormGroup({
    username: new FormControl('',[Validators.required]),
    passwords: new FormControl('',[Validators.required]),

  })
  ngOnInit(): void {
  }

 get f(){
  return this.loginform.controls;
 }

  submit(){ 
    // console.log("Jj Testing!!!");
    // console.log((this.loginform.value).username);
    if((this.loginform.value).username == "omkar" && (this.loginform.value).passwords == "pass"){
      this.router.navigate(['dashboard'])
    }
    else{
      this._snackBar.open("plz enter correct credentials!!" , "Udno", {
        duration :3000,
        verticalPosition:'top',
    })
  
  }}

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiserviceService} from "../apiservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private fb:FormBuilder,public api:ApiserviceService,public router:Router) { }
  registerForm=this.fb.group({
    'username': ['', Validators.required],
    'email': ['', Validators.required],
    'password': ['', Validators.required],
    'cpassword': ['', Validators.required],
    'address': ['', Validators.required],
    'donor': ['', Validators.required],
    'requestor': ['', Validators.required]

  });
  ngOnInit() {
  }

  onSubmit(value: any) {
      this.api.saveRegDetails(value).subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err);
      });
  }
}

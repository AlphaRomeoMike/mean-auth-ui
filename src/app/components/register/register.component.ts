import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private validateService: ValidateService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    const user = {
					name: this.name,
					username: this.username,
					email: this.email,
					password: this.password 
				}

				if(!this.validateService.validateRegister(user)){
					console.log("Please enter all fields");
				}
  }
}

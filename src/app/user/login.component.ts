import { Component } from "@angular/core";

@Component({
  templateUrl: "./login.template.html"
})
export class LoginComponent {
  userName;
  password;

  login(formValues) {
    console.log(formValues);
  }
}

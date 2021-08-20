import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.nav-bar {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @meida (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `
  ]
})
export class NavBarComponent {}

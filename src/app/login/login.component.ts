import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl("")
  });
  constructor(private router: Router) {}

  ngOnInit() {}

  checkID() {
    if (this.form.value.id == "chef") {
      this.router.navigate(["chef-list"]);
    } else {
      alert("not this one!!");
    }
  }
}

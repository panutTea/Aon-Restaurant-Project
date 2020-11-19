import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    ingredients: new FormControl(""),
    price: new FormControl(""),
    ingredients1: new FormControl(""),
    price1: new FormControl(""),
    ingredients2: new FormControl(""),
    price2: new FormControl(""),
    ingredients3: new FormControl(""),
    price3: new FormControl(""),
    ingredients4: new FormControl(""),
    price4: new FormControl(""),
    ingredients5: new FormControl(""),
    price5: new FormControl(""),
    name: new FormControl(""),
    msg: new FormControl(""),
    name1: new FormControl(""),
    msg1: new FormControl(""),
    name2: new FormControl(""),
    msg2: new FormControl(""),
    name3: new FormControl(""),
    msg3: new FormControl(""),
    name4: new FormControl(""),
    msg4: new FormControl(""),
    name5: new FormControl(""),
    msg5: new FormControl("")
  });
  constructor() {}

  ngOnInit() {}
  // onDish() {
  //   this.form.value.ingredients;
  // }
}

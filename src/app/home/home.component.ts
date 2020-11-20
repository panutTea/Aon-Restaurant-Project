import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    table: new FormControl(""),
    name: new FormControl(""),
    price: new FormControl(""),
    number: new FormControl(""),
    maihate: new FormControl(""),
    price1: new FormControl(""),
    number1: new FormControl(""),
    maihate1: new FormControl(""),
    price2: new FormControl(""),
    number2: new FormControl(""),
    maihate2: new FormControl(""),
    price3: new FormControl(""),
    number3: new FormControl(""),
    maihate3: new FormControl(""),
    price4: new FormControl(""),
    number4: new FormControl(""),
    maihate4: new FormControl(""),
    price5: new FormControl(""),
    number5: new FormControl(""),
    maihate5: new FormControl("")
  });

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}
  onDish(name: string) {
    if (name == "ข้าวผัด") {
      if (this.form.value.price == "1") {
        this.firebaseService.addFood(
          name,
          40,
          this.form.value.number,
          this.form.value.maihate,
          this.form.value.table
        );
      } else if (this.form.value.price == "2") {
        this.firebaseService.addFood(
          name,
          50,
          this.form.value.number,
          this.form.value.maihate,
          this.form.value.table
        );
      }
    }
    if (name == "สเต็ก") {
      if (this.form.value.price1 == "1") {
        this.firebaseService.addFood(
          name,
          40,
          this.form.value.number1,
          this.form.value.maihate1,
          this.form.value.table
        );
      } else if (this.form.value.price1 == "2") {
        this.firebaseService.addFood(
          name,
          50,
          this.form.value.number1,
          this.form.value.maihate1,
          this.form.value.table
        );
      }
    }
    if (name == "ผัดคะน้า") {
      if (this.form.value.price2 == "1") {
        this.firebaseService.addFood(
          name,
          40,
          this.form.value.number2,
          this.form.value.maihate2,
          this.form.value.table
        );
      } else if (this.form.value.price2 == "2") {
        this.firebaseService.addFood(
          name,
          50,
          this.form.value.number2,
          this.form.value.maihate2,
          this.form.value.table
        );
      }
    }
    if (name == "ข้าวผัดผงกะหรี่") {
      if (this.form.value.price3 == "1") {
        this.firebaseService.addFood(
          name,
          40,
          this.form.value.number3,
          this.form.value.maihate3,
          this.form.value.table
        );
      } else if (this.form.value.price3 == "2") {
        this.firebaseService.addFood(
          name,
          50,
          this.form.value.number3,
          this.form.value.maihate3,
          this.form.value.table
        );
      }
    }
    if (name == "ข้าวผัดกะเพรา") {
      if (this.form.value.price4 == "1") {
        this.firebaseService.addFood(
          name,
          40,
          this.form.value.number4,
          this.form.value.maihate4,
          this.form.value.table
        );
      } else if (this.form.value.price4 == "2") {
        this.firebaseService.addFood(
          name,
          50,
          this.form.value.number4,
          this.form.value.maihate4,
          this.form.value.table
        );
      }
    }
    if (name == "สุกี้") {
      if (this.form.value.price5 == "1") {
        this.firebaseService.addFood(
          name,
          40,
          this.form.value.number5,
          this.form.value.maihate5,
          this.form.value.table
        );
      } else if (this.form.value.price5 == "2") {
        this.firebaseService.addFood(
          name,
          50,
          this.form.value.number5,
          this.form.value.maihate5,
          this.form.value.table
        );
      }
    }
  }
}

import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Food } from "./food";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getFoods() {
    let DocRef = this.firestore.collection<Food>("food", e =>
      e.where("stat", "==", "false")
    );
    return DocRef.valueChanges();
  }

  getFoodsCashier() {
    let DocRef = this.firestore.collection<Food>("food", e =>
      e.where("stat", "==", "true")
    );
    return DocRef.valueChanges();
  }

  deleteFood(id: string) {
    return this.firestore
      .collection("food")
      .doc(id)
      .delete();
  }

  addFood() {
    let food = {
      name: ["dsadsa" + "dsadsa"],
      price: [200],
      topping: ["none"]
    };
    const ref = this.firestore
      .collection("food")
      .doc("table1")
      .update(food)
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
  updateStat(id: string) {
    let finish = {
      stat: "true"
    };
    const ref = this.firestore
      .collection("food")
      .doc(id)
      .update(finish);
  }
  //   addTweet(n: string, message: string) {
  //     let food = {
  //       name: n,
  //       price: price,
  //     };
  //     const ref = this.firestore.collection("menu").add(food);

  //     ref.then(newRef => {
  //       const upDateID = {
  //         id: newRef.id
  //       };
  //       newRef.update(upDateID);
  //     });
  //     return ref;
  //   }
  //   deleteTweet(id: string) {
  //     return this.firestore
  //       .collection("tweet")
  //       .doc(id)
  //       .delete();
  //   }
  //
}

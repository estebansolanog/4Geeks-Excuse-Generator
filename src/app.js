/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! " + generateExcuse());
};

let generateExcuse = () => {
  let pronoun = ["The", "A", "My", "Their", "Our", "This"];
  let subject = [
    "jogger",
    "dog",
    "dad",
    "car",
    "detb collector",
    "personal trainer"
  ];
  let action = [
    "ate my",
    "broke my",
    "stole my",
    "sold my",
    "forgot my",
    "painted my"
  ];
  let item = ["food", "toys", "toothpaste", "money", "basket", "will"];
  let location = [
    "in my house",
    "in school",
    "at the park",
    "in McDonalds",
    "at yours",
    "in the street"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let itemIndex = Math.floor(Math.random() * item.length);
  let locIndex = Math.floor(Math.random() * location.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    item[itemIndex] +
    " " +
    location[locIndex]
  );
};

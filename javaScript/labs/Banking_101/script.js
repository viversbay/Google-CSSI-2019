// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var customerName;
var balance;
let logged_in = false;
var password;


const openAccount = (name, startingAmount) => {
  balance = 0;
  if(startingAmount > 0){
    balance = balance + startingAmount;
  }
  // Set the value for customer_name equal to name below
  customerName = name;
  return name+" has opened a new account with a balance of $"+balance;
};
const createAccount = (newPassword) =>{
  password = newPassword;
  // return password;
};
const logIn = (name, newPassword) =>{
  if (name === customerName && newPassword === password){
    logged_in = true;
    return customerName+" has logged in";
  }
  else {
    return "Incorrect log in.";
  }
};
const logOut = () => {
  logged_in = false;
  return customerName+" has logged out.";
};

const deposit = (value) => {
  if (logged_in === false){
    return "User must log in.";
  }
  else {
  balance = balance + value;
  return customerName+" has deposited $"+value+". "+customerName+"\'s total balance is $"+balance;
}
  // update the value of balance
  //return the correct statement
};

const withdraw = (withdrawAmount) => {
  if (logged_in === false){
    return "User must log in.";
  }
  else if(withdrawAmount <= balance){
    balance = balance - withdrawAmount;
    return customerName+" has withdrawn $"+withdrawAmount+". "+customerName+"has $"+balance+" remaining.";
  }
  else {
    var difference = withdrawAmount - balance;
    return "Sorry, "+customerName+", you do not have enough money in your account. You need "+difference+" more dollars."
  }
  //update the value of balance
  //return the correct statement
};




// Write your script below
console.log("script is running...");

console.log(openAccount("Vivian", 300));
createAccount("password");
console.log(logIn("Vivian", "password"));
console.log(logOut());
console.log(deposit(50));
console.log(withdraw(500));

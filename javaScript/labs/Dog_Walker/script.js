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
const action = (dogName, time) => {
  console.log("I will walk "+dogName+" at "+time);
  //return "I will walk "+dogName+" at "+time;
};
// Task 1
const dogName1 = "Steve";
const dogType1 = "beagle";
let time1 = "12:00 PM";
let time2 = "1:00 PM";
let time3 = "2:00 PM";

//console.log(action(dogName1, time1));
action(dogName1, time1);
// Complete Task 1 Below
// console.log("I will walk "+dogName1+" at 12:00PM");


const dogName2 = "Joe";
const dogType2 = "bulldog";

// Complete Task 2 Below
if(dogType2 === "corgi"){
  action(dogName2, time1);
  //console.log(action(dogName2, time1));
  // console.log("I will walk "+dogName2+" today at 12:00PM");
}
else {
  action(dogName2, time2);
  //console.log(action(dogName2, time2));
  // console.log("I will walk "+dogName2+" today at 1:00PM");
}



const dogName3 = "Lola";
const dogType3 = "poodle";

// Complete Task 3 Below


if (dogType3 === "corgi" || dogType3 === "beagle"){
  action(dogName3, time1);
  //console.log(action(dogName3, time1));
  // console.log("I will walk "+dogName3+" today at 12:00 PM");
}
else if(dogType3 === "bulldog"){
  action(dogName3, time2);
  //console.log(action(dogName3, time2));
  // console.log("I will walk "+dogName3+" today at 1:00 PM");
}
else{
  action(dogName3, time3);
  //console.log(action(dogName3, time3));
 // console.log("I will walk "+dogName3+" today at 2:00 PM");
}

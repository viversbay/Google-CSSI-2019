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

console.log("script is running...");

const My_Alarm = (time) => {
  console.log("Hey, Vivian, wake up! It's "+time+" ");
  //return Hey, Vivian, wake up! It's "+time+" ";
};
const Mom_Alarm = (time) => {
  console.log("Hey, Mom, wake up! It's "+time+" ");
  //return Hey, Mom, wake up! It's "+time+" ";
};
const Family_Alarm = (name, time) => {
  console.log("Hey, "+name+", wake up! It's "+time+" ");
  //return "Hey, "+name+", wake up! It's "+time+" ";
};
const Important_Alarm = (message) => {
  return message.toUpperCase();
};
const Snooze_Alarm = (time) => {
  let time2 = time + 1;
  return "The alarm for "+time+" has been changed to "+time2;
};
const repeatMessage = (numberOfPeople) =>{
  return "Wake up!".repeat(numberOfPeople);
}

My_Alarm("7:30 AM");
Mom_Alarm("7:30 AM");
Family_Alarm("Dad", "7:30 AM");
console.log(Important_Alarm("wake up, wake up, wake UP!!"));
console.log(Snooze_Alarm(8));
console.log(repeatMessage(2));

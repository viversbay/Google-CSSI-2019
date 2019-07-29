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

console.log("Running Click Events Script");

const red = document.querySelector("#box1");
const pink = document.querySelector("#box2");
const orange = document.querySelector("#box3");
//function that will work for all cases

  const change = (color)=> {
    red.style.backgroundColor = color;
    pink.style.backgroundColor = color;
    orange.style.backgroundColor = color;
};
red.addEventListener("click", () =>{
  change('red');
});
pink.addEventListener("click", () => {
  change('pink');
});
orange.addEventListener("click", () => {
  change('orange');
});
//individual DOM function that changes the color of the other 2 squares
// red.addEventListener("click", (e) => {
//   pink.style.backgroundColor = 'red';
//   orange.style.backgroundColor = 'red';
// });

//toggle functionality
const yellow = document.querySelector("#box4");
const blue = document.querySelector("#box5");


yellow.addEventListener("click", () => {
  yellow.classList.toggle("active");
  blue.classList.toggle("active");
});

// let counterYellow = 0;
// let counterBlue = 1;
//
//
// yellow.addEventListener("click", (e) => {
//   if (counterYellow%2 === 0){
//     yellow.style.backgroundColor = 'blue';
//   }
//   else {
//     yellow.style.backgroundColor = 'yellow';
//   }
//   counterYellow++;
// });
// blue.addEventListener("click", (e) => {
//   if (counterBlue%2 === 0){
//     blue.style.backgroundColor = 'blue';
//   }
//   else {
//     blue.style.backgroundColor = 'yellow';
//   }
//   counterBlue++;
//    });

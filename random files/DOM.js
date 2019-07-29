let button = document.querySelector("#like-button");
let like_header = document.querySelector("#my-likes");
let like_counter = 0;
button.addEventListener("click",()=> {
  like_counter++;
  like_header.innerHTML = "You have "+like_counter+" likes.";
});

const changeHeaderColor = () => {
  like_header.style.color = "tomato";

}

like_header.addEventListener("click", changeHeaderColor);

"use strict";
const apiKey = {"api_key":"cf9fa8e7-4ccd-4619-a7b6-ea78e4ddbc92"}; 

const comments = [
  {
    name: "Connor Walton",
    timeStamp: "02/17/2021",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timeStamp: "01/09/2021",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timeStamp: "12/20/2020",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth()}`.padStart(2, 0);
const year = now.getFullYear();
const currentTimeStamp = `${day}/${month}/${year}`;

const displayComment = function () {
  const defaultComments = document.querySelector(".user-comment");
  defaultComments.innerHTML = " ";
  comments.forEach(function (v, i) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("user-comment__box");

    const commentBoxWrapper = document.createElement("div");
    commentBoxWrapper.classList.add("user-comment__wrapper");

    const userImg = document.createElement("img");
    userImg.classList.add("user-comment__img");
    userImg.setAttribute("src", "../assets/Images/jim-robhash.png");

    const commentTextContainer = document.createElement("div");
    commentTextContainer.classList.add("user-comment__text-box");

    const userName = document.createElement("h3");
    userName.classList.add("user-comment__name");
    userName.innerText = comments[i].name;

    const userDate = document.createElement("h4");
    userDate.classList.add("user-comment__date");
    userDate.innerText = comments[i].timeStamp;

    const userComment = document.createElement("p");
    userComment.classList.add("user-comment__text");
    userComment.innerText = comments[i].commentText;
    defaultComments.appendChild(commentBox);
    commentBox.appendChild(userImg);
    commentBox.appendChild(commentBoxWrapper);
    commentBoxWrapper.appendChild(commentTextContainer);
    commentTextContainer.appendChild(userName);
    commentTextContainer.appendChild(userDate);
    commentBoxWrapper.appendChild(userComment);
  });
};
displayComment();
const formInput = document.querySelector(".form__input");
const formInputComment = document.querySelector(".form__input-comment");
const formBox = document.querySelector(".form");
formBox.addEventListener("submit", (e) => {
  e.preventDefault();

  comments.unshift({
    name: e.target.username.value,
    timeStamp: currentTimeStamp,
    commentText: e.target.usercomment.value,
  });

  displayComment();
  formInputComment.value = "";
  formInput.value = "";
});

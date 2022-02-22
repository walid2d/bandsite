"use strict";
const apiKey = 'bfd24036-23f8-495b-8f78-dedeae8232ea' ;
const dateConverter = function(tStamp){
  const newStamp = new Date(Number(tStamp));
  const day = `${newStamp.getDate()}`.padStart(2, 0);
  const month = `${newStamp.getMonth()+1}`.padStart(2, 0);
  const year = newStamp.getFullYear();
  const currentTimeStamp = `${day}/${month}/${year}`;
  return currentTimeStamp;
}
const displayComment = function () {
  const defaultComments = document.querySelector(".user-comment");
  axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
  .then(response => {
    defaultComments.innerHTML = "";
    const newResponse = response.data.sort((a,b)=> b.timestamp - a.timestamp);
    newResponse.forEach(function (k) {
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
      userName.innerText = k.name;
  
      const userDate = document.createElement("h4");
      userDate.classList.add("user-comment__date");
      userDate.innerText = dateConverter(k.timestamp);
  
      const userComment = document.createElement("p");
      userComment.classList.add("user-comment__text");
      userComment.innerText = k.comment;
      defaultComments.appendChild(commentBox);
      commentBox.appendChild(userImg);
      commentBox.appendChild(commentBoxWrapper);
      commentBoxWrapper.appendChild(commentTextContainer);
      commentTextContainer.appendChild(userName);
      commentTextContainer.appendChild(userDate);
      commentBoxWrapper.appendChild(userComment);
    });
  }).catch(error => console.log(error));;
};
displayComment();

const formBox = document.querySelector(".form");

formBox.addEventListener("submit", (e) => {
  e.preventDefault();
axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
{
  name: e.target.username.value,
  comment: e.target.usercomment.value
}).then(response => {
  console.log(response.status);
  displayComment();
})
.catch(error => console.log(error));
formBox.reset();
});

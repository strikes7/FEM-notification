"use strict";

window.onload = initialSetup;

function initialSetup() {
  const cleanMessages = document.getElementById("mark-as-read");
  const messages = Array.from(document.getElementsByClassName("comment"));

  cleanMessages.addEventListener("click", markMessagesAsRead);

  messages.forEach((message) => {
    message.addEventListener("click", markOneMessageAsRead);
  });
}

function markMessagesAsRead() {
  const comments = document.querySelectorAll(".comment[data-is-read='false']");

  comments.forEach((comment) => {
    comment.removeAttribute("data-is-read");
  });
}

function markOneMessageAsRead(e) {
  if (this.getAttribute("data-is-read")) {
    this.removeAttribute("data-is-read");
    console.log(e.target);
  }
}

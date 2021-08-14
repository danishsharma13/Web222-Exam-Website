let hire = document.querySelector("#hiring-input");
let ques = document.querySelector("#question-input");
let comm = document.querySelector("#comment-input");

let question_radio = document.querySelector("#question");
let comment_radio = document.querySelector("#comment");
let hiring_radio = document.querySelector("#hiring");

function hiring() {
   if (hire.style.display == "none") {
      hire.style.display = "flex";
      if(ques.style.display != "none") {
         ques.style.display = "none";
      }

      if(comm.style.display != "none") {
         comm.style.display = "none";
      }
   }
}

function question() {
   if (ques.style.display == "none") {
      ques.style.display = "flex";
      if(hire.style.display != "none") {
         hire.style.display = "none";
      }

      if(comm.style.display != "none") {
         comm.style.display = "none";
      }
   }
}

function comment() {
   if (comm.style.display == "none") {
      comm.style.display = "flex";
      if(ques.style.display != "none") {
         ques.style.display = "none";
      }

      if(hire.style.display != "none") {
         hire.style.display = "none";
      }
   }
}

function clickingRadio() {
   ques.style.display = "none";
   hire.style.display = "none";
   comm.style.display = "none";
   question_radio.onclick = question;
   comment_radio.onclick = comment;
   hiring_radio.onclick = hiring;
}

clickingRadio();
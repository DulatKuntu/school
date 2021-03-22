var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function openReg(){
    let log = document.querySelector(".log")
    log.style.display = "none"
    let reg = document.querySelector(".register")
    reg.style.display = "block"
}
function openLog(){
    let reg = document.querySelector(".register")
    reg.style.display = "none"
    let log = document.querySelector(".log")
    log.style.display = "block"
}
function closeReg(){
    let reg = document.querySelector(".register")
    reg.style.display = "none"
}
function closeLog(){
    let log = document.querySelector(".log")
    log.style.display = "none"
}
function openPost(){
    let news= document.querySelector(".new")
    news.style.display = "none"
    let student = document.querySelector(".student")
    student.style.display = "none"
    let table = document.querySelector(".table")
    table.style.display = "none"
    let postik = document.querySelector(".postik")
    postik.style.display = "block"
}
function openTable(){
    let news= document.querySelector(".new")
    news.style.display = "none"
    let student = document.querySelector(".student")
    student.style.display = "none"
    let table = document.querySelector(".table")
    table.style.display = "block"
    let postik = document.querySelector(".postik")
    postik.style.display = "none"
}
function openStudents(){
    let news= document.querySelector(".new")
    news.style.display = "none"
    let student = document.querySelector(".student")
    student.style.display = "block"
    let table = document.querySelector(".table")
    table.style.display = "none"
    let postik = document.querySelector(".postik")
    postik.style.display = "none"
}
function openNews(){
    let news= document.querySelector(".new")
    news.style.display = "block"
    let student = document.querySelector(".student")
    student.style.display = "none"
    let table = document.querySelector(".table")
    table.style.display = "none"
    let postik = document.querySelector(".postik")
    postik.style.display = "none"
}
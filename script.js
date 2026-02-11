// Smooth Scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Dark Mode
document.getElementById("modeToggle").onclick=function(){
  document.body.classList.toggle("dark");
  this.textContent=document.body.classList.contains("dark")?"☀":"🌙";
};

// Quiz
function checkAnswer(btn){
  document.getElementById("quizResult").innerText=
  "No matter who said it first, we both meant it forever 💞";
}

// Slider
let images=[
  "https://picsum.photos/400/600?random=1",
  "https://picsum.photos/400/600?random=2",
  "https://picsum.photos/400/600?random=3"
];
let index=0;
setInterval(()=>{
  index=(index+1)%images.length;
  document.getElementById("slideImage").src=images[index];
},3000);

// Relationship Timer (October 1, 2024)
function updateTimer(){
  let start=new Date("October 1, 2024 00:00:00");
  let now=new Date();
  let diff=now-start;
  let days=Math.floor(diff/(1000*60*60*24));
  let hours=Math.floor((diff/(1000*60*60))%24);
  document.getElementById("relationshipTimer").innerText=
  days+" Days "+hours+" Hours Together ❤️";
}
setInterval(updateTimer,1000);

// Floating Hearts
setInterval(()=>{
  let heart=document.createElement("span");
  heart.innerText="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=Math.random()*20+15+"px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),8000);
},500);
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});
function toggleMode(){
  document.body.classList.toggle("dark-mode");
}

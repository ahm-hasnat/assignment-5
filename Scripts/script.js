
document.getElementById("discover").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = './blog.html';
 });
 const clear = document.getElementById("empty-div");
document.getElementById("history").addEventListener("click",function(){
   clear.innerHTML = " ";

});

// random bg
const bodyColor = document.getElementById("randomColor");

document.getElementById("bg-btn").addEventListener("click",function(){
    let bgColor = '#';
    const color = Math.random().toString(16).slice(2,8);
    bgColor += color;
    console.log(bgColor);
    bodyColor.style.backgroundColor = bgColor;
});

// live time
const date = new Date();
const liveDay = document.getElementById("day");
const liveMonth = document.getElementById("month");
const liveDate = document.getElementById("date");
const liveYear = document.getElementById("year");
const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const getFinalDay = weekDay[date.getDay()].slice(0,3);

liveDay.innerText = getFinalDay;
liveMonth.innerText = month[date.getMonth()].slice(0,3);
liveDate.innerText = date.getDate();
liveYear.innerText = date.getFullYear;



    







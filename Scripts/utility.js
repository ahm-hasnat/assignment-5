
function getTextById (id){
     document.getElementById(id).addEventListener("click",function(){
    alert("Board Updated Successfully");
    document.getElementById(id).disabled = true;

    let completeTimes = parseInt(document.getElementById("five").innerText);
  
  document.getElementById("five").innerText = completeTimes - 1;
  let UpdatedTask = parseInt(document.getElementById("task").innerText);
  document.getElementById("task").innerText = UpdatedTask + 1;
 const splitId = id.split("-")[0];

  const h2Id = splitId + "-h2";
  const h2Text = document.getElementById(h2Id).innerText;
  const dateToday = document.getElementById("liveDate").innerText;
  const message = "You Have Completed the Task";
 
  let time = new Date();
  let currentTime = time.toLocaleTimeString('en-Bd', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
   const updatedMessage = message + " " + h2Text + " on " + dateToday + " at "  + currentTime;
   let parent = document.getElementById("empty-div");
   let div = document.createElement('div');
   let p = document.createElement('p');

   p.innerText = updatedMessage;
   div.appendChild(p);
  parent.appendChild(div);

  div.style.backgroundColor = '#F4F7FF';
  div.style.borderRadius = '16px';
  div.style.padding = '8px';
  p.style.color = '#1E1E1E';
  p.style.fontSize = '10px';
  p.style.fontWeight = 'normal';
  p.style.fontFamily = 'Poppins', 'sans-serif';
  
  const disabledBtn =[];
  const allBtn = ["first-btn","second-btn","third-btn","fourth-btn","fifth-btn","sixth-btn"];
  for (let button of allBtn){
    const btnId = document.getElementById(button);

    if(btnId.disabled){
      disabledBtn.push(button);
    };
  };
  if ( disabledBtn.length === allBtn.length){
    alert("Congrats!!! You have completed all the task Successfully")
  }

 });
 
};


getTextById("first-btn");
getTextById ("second-btn");
getTextById ("third-btn");
getTextById ("fourth-btn");
getTextById ("fifth-btn");
getTextById ("sixth-btn");


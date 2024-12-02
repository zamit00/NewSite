
function myFunction() {

  const icon = document.getElementById("icon");
  if (icon.innerHTML === "☰") { // The rendered character for &#9776;
    icon.innerHTML = "✕";      // The rendered character for &#10005;
  } else {
    icon.innerHTML = "☰";
  }

  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
     
function myfun(x) {

if (x.id.includes(1)){var i='1';}
if (x.id.includes(2)){var i='2';}
if (x.id.includes(3)){var i='3';}
menu=document.getElementById(`drp${i}`);

if(menu.className ==='dropdown-content'){
  menu.className='dropdown-content drp';}
 else{menu.className='dropdown-content'}
  }
  

function home(){
  var mynav= document.getElementById("myTopnav");
   const icon = document.getElementById("icon");
  icon.innerHTML = "☰";
  mynav.className = "topnav"; 
}



function odot() {
    e.preventDefault(); // מונע את ההתנהגות הרגילה של הקישור
    document.getElementById('odot').scrollIntoView({ 
        behavior: 'smooth' // גלילה חלקה
    });
home();
}

/*
function iconx(){

   for(let i=1;i<=4;i++){
  
  var butt= document.getElementById(`drd${i}`);
  butt.className='dropbtn';}
   var x = document.getElementById("myTopnav");
  x.className = "topnav";

   for(let i=1;i<=3;i++){
   menu=document.getElementById(`drp${i}`);
   menu.className ='dropdown-content';}
 document.getElementById('iconx').Style.display='none';
document.getElementById('icon').Style.display='block';

}
       
*/

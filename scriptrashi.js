de rfunction myFunction() {
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
    
  
  function humburger(){
    var mynav= document.getElementById("myTopnav");
        for(let i=1;i<=4;i++){
    var butt= document.getElementById(`btn${i}`);
    var icon = document.getElementById("icon");
 var iconx = document.getElementById("iconx");

          
        if (butt.className === "dropbtn") {
          butt.className='dropbtna';iconx.style.display='block';
            icon.style.display='none';
                  } 
        else {
          butt.className='dropbtn';
        

          for(let i=1;i<=3;i++){
            var taf= document.getElementById(`dropdown-content${i}`);
            taf.className='dropdown-content';
           }
            iconx.style.display='none';
            icon.style.display='block';

         }
            
    }
  }
 function iconx(){
 
     for(let i=1;i<=4;i++){
    var butt= document.getElementById(`btn${i}`);
    butt.className='dropbtn';}
     var x = document.getElementById("myTopnav");
    x.className = "topnav";

     for(let i=1;i<=3;i++){
     menu=document.getElementById(`drp${i}`);
     menu.className ='dropdown-content';}
 
 }
         

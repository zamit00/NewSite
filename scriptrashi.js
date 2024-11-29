function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }
/*
       
function myFun(x) {

const container =  x.parentElement; // מוצא את הקונטיינר של הכפתור
const menu = container.querySelector('dropdown-content');
  if(menu.style.display===none|| menu.style.display===){
    menu.style.display='block';}
   else{menu.style.display="none"}
    }
      
      if (taf.className === "dropdown-content") {
        taf.className='dropdown-contenta';
        
      } else {
        taf.className='dropdown-content';
      }
     
      
    }
    else{taf.className='dropdown-content';
      
    }
    
  }
  } 
  
  function humburger(){
    var mynav= document.getElementById("myTopnav");
    for(let i=1;i<=4;i++){
      var butt= document.getElementById(`btn${i}`);
          
        
        if (butt.className === "dropbtn") {
          butt.className='dropbtna';
        } 
        else {
          butt.className='dropbtn';

          for(let i=1;i<=3;i++){
            var taf= document.getElementById(`dropdown-content${i}`);
                taf.className='dropdown-content';
           }
         }
            
    }
  }
  */    
 

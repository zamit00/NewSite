function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }
    


/*

function myFunction(x) {
  for(let i=1;i<=3;i++){
    var taf= document.getElementById(`dropdown-content${i}`);
    
    if(x.id.includes(i)){
      
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
 

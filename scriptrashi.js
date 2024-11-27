function myFunction(x) {
  for(let i=1;i<=3;i++){
    var taf= document.getElementById(`dropdown-content${i}`);
    
    if(x.id.includes(i)){
      
      if (taf.className === "dropdown-content") {
        taf.className='dropdown-contenta';
        console.log(taf.id + ", ", taf.className);
      } else {
        taf.className='dropdown-content';
      }
     
      
    }
    else{taf.className='dropdown-content';
      console.log(taf.id + ", ", taf.className);
    }
    
  }
  } 
  
  function humburger(){
    var mynav= document.getElementById("myTopnav");
    for(let i=1;i<=3;i++){
      var butt= document.getElementById(`btn${i}`);
          
        
        if (butt.className === "dropbtn") {
          butt.className='dropbtna';
        } else {
          butt.className='dropbtn';
        }
      
    }
  }

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

        } else {
          butt.className='dropbtn';
        }
      
    }
  }
  /*
  const allMenus = x.querySelectorAll('div');
  allMenus.forEach(menu => {
    if (x.id==='btn1')
    menu.style.display = 'none';});

  if (x.id==='btn1'){

  
  var taf = document.getElementById("dropdown-content1");
  if (taf.style.display === "" || taf.style.display ==='none') {
    taf.style.display='block';
  } else {
    taf.style.display ='none';
  }
}
if (x.id==='btn2'){

  
  var taf = document.getElementById("dropdown-content2");
  if (taf.style.display === "" || taf.style.display ==='none') {
    taf.style.display='block';
  } else {
    taf.style.display ='none';
  }
}*/

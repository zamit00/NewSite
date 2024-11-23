
//פונקציה לפתיחה וסגירה של המבורגר//

  function homeclick() {
    let x = document.getElementById("mynav");
        if( x.className!=="mynav"){x.className="mynav"};
    }


    function hamburger(){
      var nav=document.getElementById('mynav');
    if (nav.className === "mynav") { nav.className  += " responsive";} else {nav.className = "mynav";}
  };
  // פונקציה שתופעל כשגודל המסך משתנה
function checkScreenSize() {
    if(window.innerWidth >390 && window.innerWidth <410 ){console.log(window.innerWidth);}
    if(window.innerWidth >570 && window.innerWidth <580 ){console.log(window.innerWidth);}
    if(window.innerWidth >763 && window.innerWidth <772 ){console.log(window.innerWidth);}
    if(window.innerWidth >1020 && window.innerWidth <1028 ){console.log(window.innerWidth);}
    handleLargeScreen(); 
  } 


// הפונקציות שיתבצעו לפי הגודל
function handleLargeScreen() {
    var x = document.getElementById("mynav");
   if(window.innerWidth>767){x.className!=="mynav";}else{x.className!=="mynav responsive"}
  }

// הוספת מאזין לשינוי בגודל המסך
window.addEventListener('resize', checkScreenSize);

// קריאה ראשונית לפונקציה כאשר הדף נטען
checkScreenSize();


  

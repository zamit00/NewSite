//פונקציה לפתיחה וסגירה של המבורגר//

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function homeclick() {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    }

    function hamburger(){
      var nav=document.getElementById('mynav');
    
 
    if (nav.className === "mynav") { // Use comparison operator (===)
      nav.className  += " responsive";
      
    } else {
      nav.className = "mynav"; // Remove 'responsive' class
      
    }
  };
  // פונקציה שתופעל כשגודל המסך משתנה
function checkScreenSize() {
  if (window.innerWidth >= 768) { // אם המסך גדול מ-768px (לדוגמה)
    handleLargeScreen(); // הפעל פונקציה למסך גדול
  } 
}

// הפונקציות שיתבצעו לפי הגודל
function handleLargeScreen() {
  var nav=document.getElementById('mynav');
  nav.className = "mynav";
}

// הוספת מאזין לשינוי בגודל המסך
window.addEventListener('resize', checkScreenSize);

// קריאה ראשונית לפונקציה כאשר הדף נטען
checkScreenSize();


  

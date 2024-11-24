
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
   if(window.innerWidth>767){x.className==="mynav";}else{x.className==="mynav responsive"}
  }

// הוספת מאזין לשינוי בגודל המסך
window.addEventListener('resize', checkScreenSize);

// קריאה ראשונית לפונקציה כאשר הדף נטען
checkScreenSize();
function ulop(element) {
    const allMenus = document.querySelectorAll('a.anav > ul');

    // לולאה שסוגרת את כל התפריטים האחרים
    allMenus.forEach(function(menu) {
        // הסתרת כל התפריטים
        if (menu !== element.querySelector('ul')) {
            menu.style.display = 'none';
        }
    });


    // גישה ל-<ul> מתוך האלמנט <a> שלחץ עליו
    const ul = element.querySelector('ul');

    // בדוק אם יש <ul> ופעול עליו
    if (ul) {
        // כאן אני מבצע פעולה על ה-ul, כמו הצגה/הסתרה של התפריט
        if (ul.style.display === 'none' || ul.style.display ==="") {
            if(window.innerWidth >767){ul.style.display = 'block';} 
            if(window.innerWidth <768){ul.style.display = 'flex';}
        } else {
            ul.style.display = 'none';  // הסתרת ה-ul
        }
    }
}
function showMenu(element) {
    const ul = element.querySelector('ul');
    if (ul && (ul.style.display === 'none' || ul.style.display === '')) {
        if (window.innerWidth > 767) {
            ul.style.display = 'block'; // הצגת התפריט במסכים גדולים
        } else if (window.innerWidth <= 768) {
            ul.style.display = 'flex'; // הצגת התפריט במסכים קטנים
        }
    }
}

// פונקציה שמסתירה את התפריט
function hideMenu(element) {
    const ul = element.querySelector('ul');
    if (ul) {
        ul.style.display = 'none'; // הסתרת התפריט
    }
}

function showMenuOnHover(element) {
    const ul = element.querySelector('ul');
    if (ul) {
      ul.style.display = 'block';
    }
  }
  
  function hideMenuOnLeave(element) {
    const ul = element.querySelector('ul');
    if (ul) {
      ul.style.display = 'none';
    }
  }
  
  // הוספת האזנה לאירועים
  document.querySelectorAll('.anav').forEach(link => {
    link.addEventListener('mouseenter', () => showMenuOnHover(link));
    link.addEventListener('mouseleave', () => hideMenuOnLeave(link));
  });
   


//פונקציה לפתיחה וסגירה של המבורגר//
window.onload=function(){handleLargeScreen();};

window.addEventListener('resize', checkScreenSize);
checkScreenSize();
function checkScreenSize() {
    handleLargeScreen(); 
  } 
 function handleLargeScreen() {
	const alla = document.querySelectorAll('a.anav');
	alla.forEach(function(menu) {
	if(window.innerWidth>768){
		if (menu.id!=="icon" && menu.id!=="home"){menu.style.display= "inline-block"}   
	   else{if (menu.id==="icon"){menu.style.display= "none"}  }
	   }
	   
	else{ if (menu.id ==="icon"){menu.style.display= "inline-block"}
			else{if (menu.id!=="home"){menu.style.display= "none"}  }
		}
 });}
  


  //  function hamburger(){
    
//		document.getElementById("nav").style.display="flex";
//		document.getElementById("nav").style.flexDirection="column";
		
//	   const alla = document.querySelectorAll('a.anav');
//	   alla.forEach(function(menu) {
        // הסתרת כל התפריטים
 //            menu.style.display = 'none';
//        });  
//	   x.className==="mynav responsive";
		
//  };
  // פונקציה שתופעל כשגודל המסך משתנה



// הפונקציות שיתבצעו לפי הגודל

// הוספת מאזין לשינוי בגודל המסך


// קריאה ראשונית לפונקציה כאשר הדף נטען

/*function ulop(element) {
	
    const allMenus = document.querySelectorAll('a.anav > ul');

    // לולאה שסוגרת את כל התפריטים האחרים
    allMenus.forEach(function(menu) {
        // הסתרת כל התפריטים
       if (menu !== element.querySelector('ul')) {
            menu.style.display = 'none';
        }
    });

	element.style.display="block";
	
    // גישה ל-<ul> מתוך האלמנט <a> שלחץ עליו
   const ul = element.querySelector('ul');

    // בדוק אם יש <ul> ופעול עליו
   if (ul) {
        // כאן אני מבצע פעולה על ה-ul, כמו הצגה/הסתרה של התפריט
       if (ul.style.display === 'none' || ul.style.display ==="") {
            if(window.innerWidth >767){
				ul.style.display = 'block';} 
            if(window.innerWidth <768){
				ul.style.display = 'flex';
				ul.flexDirection="column";
				}
        } else {
			
           ul.style.display = 'none';  // הסתרת ה-ul
        }
}}*/


/*function showMenu(element) {
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
   */

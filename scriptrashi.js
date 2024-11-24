// פונקציה לפתיחת/סגירת התפריט הנפתח

    function hamburger() {
      let nav = document.getElementById('dinamiknav');
      nav.classList.toggle('show');
    }

    function ulop(element) {
      element.querySelector('ul').classList.toggle('show');
    }
    
    // נוסיף כאן פונקציה לסגירת התפריט אם לוחצים מחוץ לו
    document.addEventListener('click', function(event) {
      const nav = document.getElementById('dinamiknav');
      if (!nav.contains(event.target) && !document.getElementById('icon').contains(event.target)) {
        nav.classList.remove('show');
      }
    });
  

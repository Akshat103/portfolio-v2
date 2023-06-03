document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    function highlightNavLink() {
      const scrollPosition = window.scrollY;
  
      navLinks.forEach((link) => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section) {
          const sectionTop = section.offsetTop;
          const navbarHeight = document.querySelector('nav').offsetHeight;
  
          if (
            scrollPosition >= sectionTop - navbarHeight &&
            scrollPosition < sectionTop + section.clientHeight - navbarHeight + 10
          ) {
            link.style.color = '#fdd835';
          } else {
            link.style.color = '';
          }
        }
      });
    }
  
    window.addEventListener('scroll', highlightNavLink);
  });
  
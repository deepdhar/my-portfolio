let mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function goToProjects() {
    const currentSection = document.activeElement.closest('section');
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        nextSection.scrollIntoView();
      }
}
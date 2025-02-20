
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

function goToContact() {
    let contactSection = document.getElementById('contact');
    contactSection.scrollIntoView();
}

function updateTime() {
    const timeElement = document.getElementById("time");
    if (!timeElement) return;

    // Get current time in IST
    function setTime() {
        const now = new Date();
        const options = { timeZone: "Asia/Kolkata", hour12: true, hour: "2-digit", minute: "2-digit" };
        timeElement.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
    }

    setTime(); // Set initially
    setInterval(setTime, 60000); // Update every 60 seconds
}

// Run when page loads
document.addEventListener("DOMContentLoaded", updateTime);

document.addEventListener("DOMContentLoaded", function () {
    const sunIcon = document.querySelector(".feather-sun");
    const moonIcon = document.querySelector(".feather-moon");
    const body = document.body;

    moonIcon.addEventListener("click", function () {
        body.classList.remove("bg-[#111]");
        body.classList.add("bg-[#fff]");
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    });

    sunIcon.addEventListener("click", function () {
        body.classList.remove("bg-[#fff]");
        body.classList.add("bg-[#111]");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    });
});
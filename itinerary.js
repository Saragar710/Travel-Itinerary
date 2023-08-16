var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling; //next sibling is the p-tag, which will hold the expense list
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function copyText() {
      
  // Copy text into clipboard 
  //copy invite link 
  navigator.clipboard.writeText
      ("https://github.com/Saragar710/Travel-Itinerary");
}
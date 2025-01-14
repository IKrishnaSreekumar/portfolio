
// to add eventlistener
let holder = document.getElementById('cardholder') ; 


holder.addEventListener("mouseover", movCard, false);
holder.addEventListener("mouseout", stopCard, false);


function movCard() {
  holder.style.animation() = "move 10s linear forwards";
  // cardholder should move 
    // holder.setAttribute("style", "background-color:blue;");
}

function stopCard() {
  holder.style.animationPlayState = "paused" ;
//     holder.setAttribute("style", "background-color:green;");
}





// Save the scroll position before the page is unloaded
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  });

  // Restore the scroll position after the DOM has fully loaded
  window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }, 50); // Small delay to ensure the DOM is ready
    }
  });
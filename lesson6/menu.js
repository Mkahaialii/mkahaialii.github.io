function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  
    
    function toggleMenu() {
      
      document.getElementById("hamNav").classList.toggle("hide");
    }
  }
  
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigation')
  
  hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
  
  // To solve the mid resizing issue with responsive class on
  window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
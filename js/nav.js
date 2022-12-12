function openNav() {
    document.querySelector('#mySidenav').style.width = "250px";
    // https://www.w3schools.com/jsref/prop_style_opacity.asp
    let opacityContainer = document.getElementById("opacity-change");
    opacityContainer.style.opacity = "0.5";
  }
  
  function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
    let opacityContainer = document.getElementById("opacity-change");
    opacityContainer.style.opacity = "1.0";
  
  }
  
  document.querySelector('.openbtn').addEventListener('click', openNav);
  document.querySelector('.closebtn').addEventListener('click', closeNav);
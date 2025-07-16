
// Toggle Manu bar //

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
    

// End Toggle Manu bar //

// contact pop up message //

function myfunction(){
    var txt;
    if (confirm("You Are Submit In Contact")){
        txt = "you pressed ok";
    }
    else{
        txt = "you pressed cancel";
    }
    document.getElementById("popup").innerHTML=txt;
}

// End contact pop up message //
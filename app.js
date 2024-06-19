
function iconClk() {
    var navIcon = document.querySelector("#navicon");
    if(navIcon.classList.contains("fa-bars"))
        {
            navIcon.classList.remove("fa-bars")
            navIcon.classList.add("fa-x")
        } 
        else{
            navIcon.classList.remove("fa-x")
            navIcon.classList.add("fa-bars")
        }
}

// function Top() {
//     document.querySelector(".icon").style.top = "0px"
// }
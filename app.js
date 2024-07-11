// inputfeild of signIn as a User or Admin
function sub() {
    var panel1 = document.getElementById("panel1");
    var panel2 = document.getElementById("panel2");
    
    if(panel1.value === "admin" && panel2.value === '123')
        {
            location.href = "admin.html";
        }
        else {
            location.href = "index.html";
        }
}


// Add  Card modal
let cardArr = JSON.parse(localStorage.getItem("data")) || [];
let adminCard = document.getElementById("adminCard");
let userCard = document.getElementById("add2");

const displayItem = () => {   
    cardArr.map((val, ind) => {
        if(adminCard){
            adminCard.innerHTML += `
            <div id= card-${ind} class="col-lg-2 prod col-6 col-sm-6 p-0">
                <div class="imgprod">
                    <img src= "${val.img}" alt="">
                </div>
                <div>
                    <p>${val.title}</p>
                    <p class="fw-bold price1">${val.price}</p>
                    <button class="btn4">Buy now</button>
                    <button onclick = "delBtn(${ind})" class="btn4">Delete</button>
                    <button onclick = "updFunc(${ind})" class="btn4">Update</button>
                    </div>
                </div>`
                }
            if(userCard){
                userCard.innerHTML += `
                <div ind= ${ind} class="col-lg-3 prod col-6 col-sm-6 p-0">
                    <div class="imgprod">
                        <img src= "${val.img}" alt="">
                    </div>
                    <div>
                        <p>${val.title}</p>
                        <p class="fw-bold price1">${val.price}</p>
                        <button class="btn4">Buy now</button>
                    </div>
                </div>`
                }
    })
}
if(cardArr){
    displayItem()
}

// delete func
function delBtn(ind) {
    let cardElement = document.getElementById(`card-${ind}`)
    if(cardElement){
        cardArr.splice(ind, 1);
        cardElement.remove()
        localStorage.setItem("data", JSON.stringify(cardArr))
    }
}
// 


// Upd Func
function updFunc(ind) {
    let updCard = cardArr[ind];
    const cardNewTitle = prompt("Enter title", updCard.title); 
    const cardNewPrice = prompt("Enter title", updCard.price); 
    const cardNewImg = prompt("Enter title", updCard.img); 
    if(cardNewImg && cardNewPrice && cardNewTitle){
        cardArr[ind] = {
            img: cardNewImg,
            title: cardNewTitle,
            price: cardNewPrice,
        }
        localStorage.setItem("data", JSON.stringify(cardArr));
        adminCard.innerHTML = '';
        displayItem()
    }
}




let sendCard = document.getElementById("sendCard");
let Card = () => {
    var cardSrc = document.getElementById("cardSrc");
    var cardTitle = document.getElementById("cardTitle");
    var productPrice = document.getElementById("productPrice")
    let cardObj = {
        img: cardSrc.value,
        title: cardTitle.value,
        price: productPrice.value,
    }
    cardArr.push(cardObj);
    localStorage.setItem("data", JSON.stringify(cardArr));
    cardSrc.value ='';
    cardTitle.value ='';
    productPrice.value ='';

    adminCard.innerHTML = ''
    displayItem()
}

if(sendCard)
{
    sendCard.addEventListener("click", Card);
}











// logOut btn
function logOutBtn() {
    location.href = "signin.html";
}


// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: true,
//     fade: 'true',
//       grabCursor: true,
//       navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
  
//     breakpoints:{
//       0: {
//           slidesPerView: 1,
//       },
//       520: {
//           slidesPerView: 2,
//       },
//       950: {
//           slidesPerView: 3,
//       },
//     },
//   });




// function iconClk() {
//     var navIcon = document.querySelector("#navicon");
//     if(navIcon.classList.contains("fa-bars"))
//         {
//             navIcon.classList.remove("fa-bars")
//             navIcon.classList.add("fa-x")
//         } 
//         else{
//             navIcon.classList.remove("fa-x")
//             navIcon.classList.add("fa-bars")
//         }
// }

// function Top() {
//     document.querySelector(".icon").style.top = "0px"
// }
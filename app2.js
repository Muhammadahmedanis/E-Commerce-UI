// function lk() {
//     location.href = "signin.html";
// }


// var add = document.getElementById("add");
// var add2 = document.getElementById("add2");
// var cardSrc = document.getElementById("cardSrc");
// var cardTitle = document.getElementById("cardTitle");
// var produnctPrice = document.getElementById("productPrice")
// var arr = []

// function clk() {
    
//     var obj = {
//         img: cardSrc.value,
//         title: cardTitle.value,
//         price: produnctPrice.value,
//     }
//     arr.push(obj);
//     localStorage.setItem("data", JSON.stringify(arr));

//     add.innerHTML += `
//     <div class="col-lg-3 prod col-6 col-sm-6 p-0">
//         <div class="imgprod">
//             <img src= ${obj.img} alt="">
//         </div>
//         <div>
//             <p>${obj.title}</p>
//             <p class="fw-bold price1">${obj.price}</p>
//             <button class="btn4">Buy now</button>
//         </div>
//     </div>`
//     cardTitle.value = '';
//     cardSrc.value = '';
//     produnctPrice.value = '';

// }
// function call() {
//     var get = JSON.parse(localStorage.getItem("data"));
//     get.map(function (data) {
//         var div1 = document.createElement("div");
//         div1.setAttribute("class", "col-lg-3 prod col-6 col-sm-6 col-md-4 p-0");
//         var divimg = document.createElement("div");
//         divimg.setAttribute("class", "imgprod")
//         var img1 = document.createElement("img");
//         img1.setAttribute("class", "car")
//         img1.src = data.img;
//         divimg.appendChild(img1)
//         div1.appendChild(divimg);
//         add2.appendChild(div1);       
//         add.appendChild(add2);

//         var div2  = document.createElement("div");
//         div1.appendChild(div2)

//         var head = document.createElement("h5");
//         var headText = document.createTextNode(data.title);
//         head.appendChild(headText);
//         div2.appendChild(head);

//         var para = document.createElement("p");
//         para.setAttribute("class", "fw-bold price1");
//         var paraText = document.createTextNode(data.price);
//         para.appendChild(paraText);
//         div2.appendChild(para);

//         var btn = document.createElement("button");
//         btn.setAttribute("class", "btn4");
//         var btnText = document.createTextNode("Buy now");
//         btn.appendChild(btnText);
//         div2.appendChild(btn);

//     })
// }
// if(localStorage.getItem("data"))
//     {
//         call()
//     }


// Navbar icon
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




// Card Crousel
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: 'true',
      grabCursor: true,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
    },
  });
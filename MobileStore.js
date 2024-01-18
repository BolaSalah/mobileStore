// add data in mobile-array variable [array]
let MobileArray = [
    {title: "iphone 13",image: "images/iphone 13.png",price: 26000,},
    {title: "iphone 13 Pro",image: "images/iphone 13 pro.png",price: 28000,},
    {title: "iphone 13 Pro Max",image: "images/iphone 13 pro max.png",price: 30000,},
    {title: "iphone 12",image: "images/iphone 12.png",price: 14000,},
    {title: "iphone 12 Pro",image: "images/iphone 12 pro.png",price: 16000, },
    {title: "iphone 12 Pro Max",image: "images/iPhone 12 pro Max.png",price: 18000,},
    {title: "iphone 11",image: "images/iphone 11.png",price: 11000,},
    {title: "iphone 11 Pro",image: "images/iphone 11 pro.png",price: 13000 ,},
    {title: "iphone 11 Pro Max",image: "images/iphone 11 pro max.png",price: 15000,},
]

// add card and add data
let MobileItems = document.getElementById("MobileStore");
    function viewMoblieArray(arr){
        for(i=0; i < arr.length; i++){
            MobileItems.innerHTML +=
                `<div class="containerCard col-sm-4  mb-5" id="iphone${[i]}">
                    <div class="card card-${[i]} d-md-flex align-items-center pb-4">
                        <img class="card-img" src="${MobileArray[i].image}" alt="Card image" style="width: 90%; height: 300px"></img>
                        <h4 class="card-title ">${MobileArray[i].title}</h4>
                        <h5 class="card-price"> <del> ${MobileArray[i].price} EGP </del> </h5>
                        <h5 class="card-price">${MobileArray[i].price-500} EGP</h5>
                        <a class="buttonCard mt-2"; border-radius:10px;">Details</a>
                    </div>
                </div>`
        }
    }
viewMoblieArray(MobileArray);

// search 
function Search(){
    MobileItems.innerHTML = "";
    for(i=0 ; i<MobileArray.length ; i++){
    let inputSearch = document.querySelector('.inp').value;
        if(MobileArray[i].title.toLowerCase().includes(inputSearch.toLowerCase())){
            MobileItems.innerHTML +=`
                <div class="containerCard col-sm-4 mb-5" id="iphone${[i]}">
                    <div class="card card-${[i]} d-md-flex align-items-center pb-4 ">
                        <img class="card-img" src="${MobileArray[i].image}" alt="Card image" style="width: 90%; height: 300px"></img>
                        <h4 class="card-title ">${MobileArray[i].title}</h4>
                        <h5 class="card-price"> <del> ${MobileArray[i].price} EGP </del> </h5>
                        <h5 class="card-price">${MobileArray[i].price - 500} EGP</h5>
                        <a class="buttonCard mt-3"; border-radius:10px;">Details</a>
                    </div>
                </div>`;
            }
        }
    let notFound = document.querySelector(".notFound");
    if(!MobileItems.innerHTML.length){
        notFound.style.display = 'block';
        MobileItems.style.width = "0";
        containerFoot.style.position = 'relative';
        containerFoot.style.top = '116px';
    }
    else {
        notFound.style.display = "none";
        MobileItems.style.width = '1500px';
        containerFoot.style.position = 'unset';
    }
}

// button 
let buttonUp = document.querySelector(".buttonUp") 
buttonUp.onclick= function(){
    window.scroll({
        top : 0,
        left: 0,
        behavior: "smooth",
    });
    }
    window.onscroll = function(){
        // show button
        if (window.scrollY > 670){
            buttonUp.style.display="block";
        }
        // hide button
        else {
            buttonUp.style.display = "none";
        }
    };

// dark mode 
let checkbox = document.getElementById('toggleTheme');
let containerNav = document.querySelector('.containerNav');
let inp = document.querySelector('.inp');
let notFound = document.querySelector('.notFound');
let card = document.querySelectorAll('.card');
let containerFoot = document.querySelector('.containerFoot');
let button = document.querySelector('.buttonUp');
let navLink = document.querySelectorAll('.nav-link');

if (localStorage.getItem("mode") === "dark") {
    darkmode();
}
else {
    lightmode(); 
}

checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        darkmode();
    }
    else {
        lightmode();
    }
});

// dark-mode-function 
function darkmode() {
    containerNav.classList.add("containerActive");
    inp.classList.add('inpActive');
    notFound.classList.add('notFoundActive');
    containerFoot.classList.add('containerFootActive');
    button.classList.add('buttonUpActive');
    for (i = 0; i < card.length; i++) {
        card[i].classList.add("cardActive");
    }
    for (i = 0; i < navLink.length; i++) {
        navLink[i].classList.add('navLinkActive');
    }
    checkbox.checked = true;
    localStorage.setItem('mode', 'dark');
}

// light-mode-function 
function lightmode() {
    containerNav.classList.remove('containerActive');
    inp.classList.remove('inpActive');
    notFound.classList.remove('notFoundActive');
    containerFoot.classList.remove('containerFootActive');
    button.classList.remove('buttonUpActive');
    for (i = 0; i < card.length; i++) {
        card[i].classList.remove('cardActive');
    }
    for (i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('navLinkActive');
    }
    checkbox.checked = false;
    localStorage.setItem('mode', 'light'); 
}
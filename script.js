// ==========================
// WISHLIST
// ==========================

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

const destinationContainer =
document.getElementById("destinationContainer");

const destinations = [
{
name:"Zurich",
image:"https://picsum.photos/400/250?random=51",
description:"Swiss city famous for lakes and mountains."
},
{
name:"Geneva",
image:"https://picsum.photos/400/250?random=52",
description:"Beautiful Swiss city with international culture."
},
{
name:"Lucerne",
image:"https://picsum.photos/400/250?random=53",
description:"Historic bridges and stunning scenery."
},
{
name:"Interlaken",
image:"https://picsum.photos/400/250?random=54",
description:"Adventure capital of Switzerland."
},
{
name:"Munich",
image:"https://picsum.photos/400/250?random=55",
description:"German city known for beer festivals."
},
{
name:"Frankfurt",
image:"https://picsum.photos/400/250?random=56",
description:"Financial center with modern skyline."
},
{
name:"Hamburg",
image:"https://picsum.photos/400/250?random=57",
description:"Port city with rich maritime history."
},
{
name:"Brussels",
image:"https://picsum.photos/400/250?random=58",
description:"Capital of Belgium and EU headquarters."
},
{
name:"Lisbon",
image:"https://picsum.photos/400/250?random=59",
description:"Colorful city with coastal charm."
},
{
name:"Porto",
image:"https://picsum.photos/400/250?random=60",
description:"Famous for wine and riverside views."
},
{
name:"Oslo",
image:"https://picsum.photos/400/250?random=61",
description:"Norway's capital surrounded by nature."
},
{
name:"Stockholm",
image:"https://picsum.photos/400/250?random=62",
description:"Beautiful islands and Scandinavian culture."
},
{
name:"Helsinki",
image:"https://picsum.photos/400/250?random=63",
description:"Modern architecture and waterfront views."
},
{
name:"Copenhagen",
image:"https://picsum.photos/400/250?random=64",
description:"Bicycles, canals and colorful buildings."
},
{
name:"Reykjavik",
image:"https://picsum.photos/400/250?random=65",
description:"Gateway to Iceland's natural wonders."
},
{
name:"Moscow",
image:"https://picsum.photos/400/250?random=66",
description:"Historic landmarks and vibrant culture."
},
{
name:"St Petersburg",
image:"https://picsum.photos/400/250?random=67",
description:"Palaces, museums and canals."
},
{
name:"Hanoi",
image:"https://picsum.photos/400/250?random=68",
description:"Vietnamese culture and street food."
},
{
name:"Ho Chi Minh City",
image:"https://picsum.photos/400/250?random=69",
description:"Bustling city with modern attractions."
},
{
name:"Kuala Lumpur",
image:"https://picsum.photos/400/250?random=70",
description:"Petronas Towers and cultural diversity."
},
{
name:"Jakarta",
image:"https://picsum.photos/400/250?random=71",
description:"Indonesia's dynamic capital city."
},
{
name:"Manila",
image:"https://picsum.photos/400/250?random=72",
description:"Historic landmarks and urban attractions."
},
{
name:"Kathmandu",
image:"https://picsum.photos/400/250?random=73",
description:"Gateway to the Himalayas."
},
{
name:"Colombo",
image:"https://picsum.photos/400/250?random=74",
description:"Sri Lankan culture and beaches."
},
{
name:"Doha",
image:"https://picsum.photos/400/250?random=75",
description:"Modern architecture and luxury experiences."
}
];


function loadDestinations(data){

if(!destinationContainer) return;

if(data.length===0){

destinationContainer.innerHTML=`
<div class="no-result">
❌ No Destination Found
</div>
`;

return;
}

let html="";

data.forEach(place=>{

const isWishlisted =
wishlist.includes(place.name);

html += `

<div class="card">

<img src="${place.image}" alt="${place.name}">

<div class="card-content">

<h3>${place.name}</h3>

<p>${place.description}</p>

<div class="actions">

<button
class="fav-btn"
onclick="toggleWishlist('${place.name}')">

${isWishlisted ? "💔 Remove" : "❤️ Wishlist"}

</button>

<button
class="read-btn"
onclick="showDetails('${place.name}','${place.description}')">

Details

</button>

</div>

</div>

</div>

`;

});

destinationContainer.innerHTML = html;
}

function toggleWishlist(place){

if(wishlist.includes(place)){

wishlist =
wishlist.filter(item => item !== place);

}else{

wishlist.push(place);

}

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

loadDestinations(destinations);
}

function showDetails(name,description){

alert(
`Destination: ${name}

${description}`
);

}

// ==========================
// SEARCH
// ==========================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input",()=>{

const value =
searchInput.value.toLowerCase();

const filtered =
destinations.filter(place=>

place.name
.toLowerCase()
.includes(value)

);

loadDestinations(filtered);

});

}

// ==========================
// BACKGROUND SLIDER
// ==========================

const hero =
document.querySelector(".hero");
const heroImages = [
"https://picsum.photos/1920/1080?random=101",
"https://picsum.photos/1920/1080?random=102",
"https://picsum.photos/1920/1080?random=103",
"https://picsum.photos/1920/1080?random=104",
"https://picsum.photos/1920/1080?random=105",
"https://picsum.photos/1920/1080?random=106",
"https://picsum.photos/1920/1080?random=107",
"https://picsum.photos/1920/1080?random=108",
"https://picsum.photos/1920/1080?random=109",
"https://picsum.photos/1920/1080?random=110",
"https://picsum.photos/1920/1080?random=111",
"https://picsum.photos/1920/1080?random=112",
"https://picsum.photos/1920/1080?random=113",
"https://picsum.photos/1920/1080?random=114",
"https://picsum.photos/1920/1080?random=115",
"https://picsum.photos/1920/1080?random=116",
"https://picsum.photos/1920/1080?random=117",
"https://picsum.photos/1920/1080?random=118",
"https://picsum.photos/1920/1080?random=119",
"https://picsum.photos/1920/1080?random=120"
];

let currentImage = 0;

if(hero){

setInterval(()=>{

currentImage++;

if(currentImage >= heroImages.length){

currentImage = 0;

}

hero.style.backgroundImage =

`linear-gradient(
rgba(0,0,0,0.5),
rgba(0,0,0,0.5)
),

url('${heroImages[currentImage]}')`;

},3000);

}

// ==========================
// PACKAGES
// ==========================

const packages = [

{
name:"Goa Beach Package",
image:"https://picsum.photos/400/250?random=60",
price:"₹15,000",
description:"5 Days Beach Holiday"
},

{
name:"Dubai Luxury Package",
image:"https://picsum.photos/400/250?random=61",
price:"₹55,000",
description:"7 Days Premium Tour"
},

{
name:"Paris Honeymoon",
image:"https://picsum.photos/400/250?random=62",
price:"₹75,000",
description:"6 Days Romantic Tour"
},

{
name:"Maldives Resort",
image:"https://picsum.photos/400/250?random=63",
price:"₹85,000",
description:"Luxury Water Villa Stay"
},

{
name:"Kerala Backwaters",
image:"https://picsum.photos/400/250?random=64",
price:"₹18,000",
description:"4 Days Houseboat Tour"
},

{
name:"Bali Adventure",
image:"https://picsum.photos/400/250?random=65",
price:"₹45,000",
description:"Adventure & Beach Tour"
},

{
name:"Singapore Family Trip",
image:"https://picsum.photos/400/250?random=66",
price:"₹50,000",
description:"5 Days Family Package"
},

{
name:"Thailand Package",
image:"https://picsum.photos/400/250?random=67",
price:"₹35,000",
description:"Bangkok & Phuket Tour"
},
{
name:"Switzerland Tour",
image:"https://picsum.photos/400/250?random=80",
price:"₹1,20,000",
description:"8 Days Alpine Adventure"
},
{
name:"Thailand Explorer",
image:"https://picsum.photos/400/250?random=81",
price:"₹40,000",
description:"6 Days Bangkok & Phuket"
},
{
name:"Singapore Escape",
image:"https://picsum.photos/400/250?random=82",
price:"₹55,000",
description:"5 Days Family Vacation"
},
{
name:"Bali Paradise",
image:"https://picsum.photos/400/250?random=83",
price:"₹48,000",
description:"5 Days Beach Resort Stay"
},
{
name:"London Discovery",
image:"https://picsum.photos/400/250?random=84",
price:"₹95,000",
description:"7 Days City Tour"
},
{
name:"New York Highlights",
image:"https://picsum.photos/400/250?random=85",
price:"₹1,10,000",
description:"6 Days USA Experience"
},
{
name:"Japan Explorer",
image:"https://picsum.photos/400/250?random=86",
price:"₹1,25,000",
description:"8 Days Tokyo & Kyoto"
},
{
name:"Australia Adventure",
image:"https://picsum.photos/400/250?random=87",
price:"₹1,30,000",
description:"10 Days Sydney & Melbourne"
},
{
name:"Turkey Delight",
image:"https://picsum.photos/400/250?random=88",
price:"₹75,000",
description:"7 Days Istanbul & Cappadocia"
},
{
name:"Egypt Wonders",
image:"https://picsum.photos/400/250?random=89",
price:"₹80,000",
description:"7 Days Pyramids Tour"
},
{
name:"South Africa Safari",
image:"https://picsum.photos/400/250?random=90",
price:"₹1,15,000",
description:"8 Days Wildlife Adventure"
},
{
name:"Greece Islands",
image:"https://picsum.photos/400/250?random=91",
price:"₹90,000",
description:"6 Days Santorini Escape"
}
];

// ==========================
// PACKAGE DISPLAY
// ==========================

const packageContainer =
document.getElementById("packageContainer");

function loadPackages(){

if(!packageContainer) return;

let html="";

packages.forEach(pkg=>{

html += `

<div class="package-card">

<img src="${pkg.image}" alt="${pkg.name}">

<h3>${pkg.name}</h3>

<p>${pkg.description}</p>

<p><b>${pkg.price}</b></p>

</div>

`;

});

packageContainer.innerHTML = html;

}

// ==========================
// INITIAL LOAD
// ==========================

loadDestinations(destinations);

loadPackages();

// LOGIN POPUP

function openLogin(){

document
.getElementById("loginModal")
.style.display = "flex";

}

function closeLogin(){

document
.getElementById("loginModal")
.style.display = "none";

}

function loginUser(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(email === "" || password === ""){

alert("Please fill all fields");

return;

}

localStorage.setItem(
"userEmail",
email
);

alert("Login Successful ✅");

closeLogin();

}

function showRegister(){

alert(
"Registration page coming soon!"
);

}

// LOGIN MODAL

function openLogin(){

document
.getElementById("loginModal")
.style.display = "flex";

}

function closeLogin(){

document
.getElementById("loginModal")
.style.display = "none";

}

// REGISTER MODAL

function openRegister(){

closeLogin();

document
.getElementById("registerModal")
.style.display = "flex";

}

function closeRegister(){

document
.getElementById("registerModal")
.style.display = "none";

}

// REGISTER USER

function registerUser(){

const name =
document.getElementById("regName").value;

const email =
document.getElementById("regEmail").value;

const password =
document.getElementById("regPassword").value;

const phone =
document.getElementById("regPhone").value;

if(
name === "" ||
email === "" ||
password === "" ||
phone === ""
){

alert("Fill all fields");

return;

}

const user = {

name,
email,
password,
phone

};

localStorage.setItem(
"travelUser",
JSON.stringify(user)
);

alert(
"Registration Successful ✅"
);

closeRegister();

openLogin();

}

// LOGIN USER

function loginUser(){

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const user = JSON.parse(
localStorage.getItem("travelUser")
);

if(!user){

alert(
"Please Create Account First"
);

return;

}

if(
user.email === email &&
user.password === password
){

alert(
"Welcome " + user.name
);

closeLogin();

}else{

alert(
"Invalid Email or Password"
);

}

}
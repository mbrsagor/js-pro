// Header
let header = document.getElementById("header");
header.style.background = "#f2f2f2";
header.style.margin = "0";

// Warp
let warp = document.getElementById("warp");
warp.style.overflow = "hidden";
warp.style.width = "800px";
warp.style.margin = "0 auto";

// Logo
let logo = document.getElementById("logo");
// console.log(logo);
logo.style.background = "#f00";
logo.style.width = "10%";
logo.style.float = "left";
logo.style.textAlign = "center";
logo.style.borderRadius = "4px";
logo.style.marginTop = "10px";

let logo_name = document.querySelector('a');
// console.log(logo_name);
logo_name.style.color = "#ffffff";
logo_name.style.textDecoration = "none";
logo_name.innerHTML = "I'm Sagor";

// Menu
let menu = document.getElementById('menu');
menu.style.width = "80%";
menu.style.float = "right";
menu.style.textAlign = "right";

let menu_item = document.querySelectorAll('li');
// console.log(menu_item);
// menu_item.style.listStyleType = "none";
menu_item.forEach((item) => {
    item.style.listStyleType = "none";
    item.style.display = "inline-block";
    item.style.padding = "10px";
});

let menu_link = document.querySelectorAll('ul li a');
// console.log(menu_link);
menu_link.forEach((link) => {
    link.style.textDecoration = "none";
    link.style.color = "#666666";
});

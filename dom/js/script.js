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

// Banner
let banner = document.getElementById('banner');
// console.log(banner);
banner.style.background = "#339966";
banner.style.padding = "20px";
banner.style.color = "#ffffff";

// Main content
let content = document.getElementById("content");
content.style.width = "800px";
content.style.margin = "0 auto";
content.style.overflow = "hidden";

let about_title = document.getElementById("about_title");
about_title.innerHTML = "About ME";

// Left side content
let what_do_title = document.getElementById("what_do_title");
what_do_title.innerHTML = "What we do ?";
what_do_title.style.marginTop = "20px";
let left_text = document.createElement('p');
left_text.id = "context";;
left_text.textContent = "hello developer...";
console.log(left_text);

// Footer
let footer = document.getElementById('footer');
footer.style.background = "#f00";
footer.style.padding = "10px";
footer.style.color = "#ffffff";
let copy_wride = document.getElementById("copy_wride");
copy_wride.innerText = `All right reserved develop by Bozlur Rosid Sagor`;
copy_wride.style.textAlign = "center";
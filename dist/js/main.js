// Select DOM Items

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); //puts all items in an array

const siteMenu = document.querySelector('.site-menu');
// Set Initial State of Menu

let showMenu = false; //let can be reassigned at any time

menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); //each item in nav gets show function

        //Set Menu State
        showMenu = true;
    }else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show')); //each item in nav gets show function

        //Set Menu State
        showMenu = false;
    }
}

// Creating a footer for all pages

function addFooter(){
    var newFooter = document.createElement("footer");
    var addFooterText = document.createTextNode("Copyright &copy; 2019 Wisekrakr");

    newFooter.appendChild(addFooterText);

    var getFooter = document.getElementById("footer");

    document.body.insertBefore(newFooter, getFooter);
}


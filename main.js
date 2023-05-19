let toggleNavStatus=false;
/*window.onclick = function(e)
    {
        let getMenu = document.querySelector(".nav-menu-bar");
    let getMenuUl = document.querySelector(".nav-menu-bar ul");
    let getMenuTitle = document.querySelector(".nav-menu-bar span");
    let getMenuLinks = document.querySelector(".nav-menu-bar a");
        if (!e.target.matches('.nav-menu-bar')) 
        {
            getMenu.style.width = "0px";
            getMenuTitle.style.opacity = "0";

        }
        getMenuUl.style.visibility = "hidden";
        toggleNavStatus = false;

    }*/
let closeNav = function () {
    let getMenu = document.querySelector(".nav-menu-bar");
    let getMenuUl = document.querySelector(".nav-menu-bar ul");
    let getMenuTitle = document.querySelector(".nav-menu-bar span");
    let getMenuLinks = document.querySelector(".nav-menu-bar a");

        getMenu.style.width = "0px";
        getMenuTitle.style.opacity = "0";
        
        let arrayLength = getMenuLinks.length;
        for ( var i = 0; i < arraylength; i++)
    {
               getMenuLinks[i].style.opacity = "0";
    }
    getMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
    
}
let toggleNav = function() {
    let getMenu = document.querySelector(".nav-menu-bar");
    let getMenuUl = document.querySelector(".nav-menu-bar ul");
    let getMenuTitle = document.querySelector(".nav-menu-bar span");
    let getMenuLinks = document.querySelector(".nav-menu-bar a");
    if(toggleNavStatus === false)
    {
        getMenuUl.style.visibility = "visible";
        getMenu.style.width = "277px";
        getMenuTitle.style.opacity = "0.8";
        
        let arrayLength = getMenuLinks.length;
        for ( var i = 0; i < arraylength; i++)
    {
               getMenuLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
    
}


}
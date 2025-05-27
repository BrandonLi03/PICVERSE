let navigation_items = document.getElementById("navigation_items");
navigation_items.style.maxHeight = "0px";

function toggleMenu(){
    if(navigation_items.style.maxHeight == "0px"){
        navigation_items.style.maxHeight = "fit-content";
    } else {
        navigation_items.style.maxHeight = "0px";
    }   
}
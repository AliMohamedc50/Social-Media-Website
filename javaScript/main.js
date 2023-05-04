let minuItems = document.querySelectorAll(".minu-items")

// MESSAGES
let messagesNotification = document.querySelector("#messaages-notifications");
let messages = document.querySelector(".messages")
let message = document.querySelectorAll(".message")
let messageSearch = document.querySelector("#message-search")

// THEME 
let theme = document.querySelector("#theme");
let themeModle  = document.querySelector(".customization-theme")
let fontsizes = document.querySelectorAll(".choose-size span")
var root = document.querySelector(":root");
let colors = document.querySelectorAll(".choose-color > span")
let backgroundcolor = document.querySelectorAll(".background .choose-bg > div") 

// ======================== SIDEBAR ================ //

// remove active class from items minu
function changeActiveItems() {
    minuItems.forEach(items => {
        items.classList.remove("active")
    })
}

minuItems.forEach( items =>
    items.addEventListener("click", () => {
        changeActiveItems() ;
        items.classList.add("active");
        if (items.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none"
        }else {
            document.querySelector(".notifications-popup").style.display = "block" ;
            document.querySelector("#notifications .notifications-count").style.display = "none";
        }

    } )
)


messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)"
    messagesNotification.querySelector(".notifications-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 2000);
})
// ======================== THEME ================

const openThemeModel = () =>{
    themeModle.style.display = "grid" 
}

theme.addEventListener("click", openThemeModel);

const closeThemeMode = (e) => {
    if(e.target.classList.contains("customization-theme")) {
        themeModle.style.display = "none"
    }
}
themeModle.addEventListener("click", closeThemeMode)

// ======================== FONT ================

const removeSizeSelector = () => {
    fontsizes.forEach(size =>{
        size.classList.remove("active")
    })
}
fontsizes.forEach(size => {
    size.addEventListener("click", ()=> {
        let fontsize ;
        removeSizeSelector()
        size.classList.toggle("active")
        
        if (size.classList.contains("font-size-1")) {
            fontsize = "10px"
            root.style.setProperty("--sticky-top-left", "5.4rem")
            root.style.setProperty("--sticky-top-right", "5.4rem")
        }else if (size.classList.contains("font-size-2")){
            fontsize = "13px"
            root.style.setProperty("--sticky-top-left", "5.4rem")
            root.style.setProperty("--sticky-top-right", "-7rem")
        }else if (size.classList.contains("font-size-3")){
            fontsize = "16px"
            root.style.setProperty("--sticky-top-left", "-2rem")
            root.style.setProperty("--sticky-top-right", "-17rem")
        }else if (size.classList.contains("font-size-4")){
            fontsize = "19px"
            root.style.setProperty("--sticky-top-left", "-5rem")
            root.style.setProperty("--sticky-top-right", "-25rem")
        }else if (size.classList.contains("font-size-5")){
            fontsize = "22px"
            root.style.setProperty("--sticky-top-left", "-10rem")
            root.style.setProperty("--sticky-top-right", "-33rem")
        }
    
        // change font size on the root html element
        document.querySelector("html").style.fontSize = fontsize ;
    })
})


// ======================== COLOR ================

// remove active class from color
const removeActiveColor = () => {
    colors.forEach(rem => {
        rem.classList.remove("active")
    })
}
colors.forEach( color => {
    color.addEventListener("click" , () =>{
        if (color.classList.contains("color-1")){
            root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)")
        }else if (color.classList.contains("color-2")){
            root.style.setProperty("--color-primary", "hsl(52, 75%, 60%)")
        }
        else if (color.classList.contains("color-3")){
            root.style.setProperty("--color-primary", "hsl(352, 75%, 60%)")
        }
        else if (color.classList.contains("color-4")){
            root.style.setProperty("--color-primary", "hsl(152, 75%, 60%)")
        }
        else if (color.classList.contains("color-5")){
            root.style.setProperty("--color-primary", "hsl(202, 75%, 60%)")
        }
        removeActiveColor()
        color.classList.toggle("active")
    })
})


backgroundcolor.forEach(bgColor => {
    bgColor.addEventListener("click", () =>{
        if(bgColor.classList.contains("bg-1")){
            root.style.setProperty("--color-light","hsl(252, 30%, 95%)")
            root.style.setProperty("--color-white","hsl(252, 30%, 100%)")
        } else if(bgColor.classList.contains("bg-2")){
            root.style.setProperty("--color-light","hsl(255, 33%, 14%)")
            root.style.setProperty("--color-white","rgb(51, 44, 69)")
        }else if(bgColor.classList.contains("bg-3")){
            root.style.setProperty("--color-light"," hsl(0, 0%, 7%)")
            root.style.setProperty("--color-white","rgb(51, 44, 69)")
        }
    })
})
"use strict";

const section = document.querySelector("section");

section.addEventListener("click", event => {

    const images = document.querySelectorAll(".kattcha");
    const cats = document.querySelectorAll(".katt");

    images.forEach((currentVal, currentIndx, obj) => {
        if (event.target == currentVal){
            event.target.classList.toggle("vald");
        }
    });

    const selected = document.querySelectorAll(".vald");
    const selectedCats = document.querySelectorAll(".vald.katt");
    
    // Är både antalet valda bilder och antalet valda katter lika många som antalet katter?
    if (selected.length == cats.length && selectedCats.length == cats.length) {
        document.querySelector("button").disabled = false;
    }
    else {
        document.querySelector("button").disabled = true;
    }
});
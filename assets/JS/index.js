$(document).ready(function () {
// Dom variables

    var tonedBtn = $("#tonedTribeClick")
    var tonedTribe = $("#tonedTribe")
    var aboutMe = $("#aboutMe")
    var homeBtn = $("#homeBtn")
// JS variables

// functions

// call functions

// event listeners
tonedBtn.on("click", function(event){
    event.preventDefault()
    aboutMe.addClass("hide")
    tonedTribe.removeClass("hide")
})

homeBtn.on("click", function(event){
    event.preventDefault()
    aboutMe.removeClass("hide")
    tonedTribe.addClass("hide")
})

});
$(document).ready(function () {
  // Dom variables

  var tonedBtn = $("#tonedTribeClick");
  var tonedTribe = $("#tonedTribe");
  var aboutMe = $("#aboutMe");
  var homeBtn = $("#homeBtn");
  var planner = $("#planner");
  var genPass = $("#genPass");
  var plannerBtn = $("#plannerClick");
  var genPassBtn = $("#genPassClick");
  var contacts = $("#contacts");
  var contactClick = $("#contactClick");
  var motivational = $("#motivational");
  var motivationalClick = $("#motivationalClick");

  // JS variables

  // functions

  // call functions

  // event listeners

  // home button
  homeBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.removeClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
  });
  //planner button
  tonedBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.removeClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
  });
  //planner button
  plannerBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    planner.removeClass("hide");
    tonedTribe.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
  });
  // GenPass button
  genPassBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.removeClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
  });
  // Contact Button
  contactClick.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.removeClass("hide");
    motivational.addClass("hide");
  });
  // Motivation button
  motivationalClick.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.removeClass("hide");
  });
});

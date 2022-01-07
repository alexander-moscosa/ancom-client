"use strict"

const enter_room_form = document.querySelector('#enter_room_form');
const create_room_form = document.querySelector('#create_room_form');
const enter_room_button = document.querySelector("#enter_room_button");
const create_room_button = document.querySelector("#create_room_button");

let is_enter_form_shown = false;
let is_create_form_shown = false;

enter_room_button.addEventListener( 'click', () => {
    if ( is_enter_form_shown == false ) {
        enter_room_form.style.display = "flex";
        is_enter_form_shown = true;
    } else {
        enter_room_form.style.display = "none";
        is_enter_form_shown = false;
    }
});

create_room_button.addEventListener( 'click', () => {
    if ( is_create_form_shown == false ) {
        create_room_form.style.display = "flex";
        is_create_form_shown = true;
    } else {
        create_room_form.style.display = "none";
        is_create_form_shown = false;
    }
});
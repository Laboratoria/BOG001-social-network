import {App, Form } from "../app/components/App.js";


const d = document,
w = window;

d.addEventListener("DOMContentLoaded", App);
d.addEventListener("hashchange", App);
d.addEventListener("hashchange", Form);


const Router = (route) =>{
    switch(route){
        case '#/':
           return App
        

         case '#/login':
           return Form,
           console.log("hola");
         
    }
    }

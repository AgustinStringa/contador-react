"use strict"
if("serviceWorker" in navigator){
    // alert("si rey, tenes el servis guorquer");
    // console.log(navigator.serviceWorker);
    navigator.serviceWorker.register("./sw.js");
}

//esta es otra forma de escribirle
// if(navigator.serviceWorker){
//     alert('segunda forma');
// }
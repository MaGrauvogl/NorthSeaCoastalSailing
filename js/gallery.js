/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* With this javascript the gallery (picture and text) is controlled*/

var slideindex = 1;

function start(){
    showslides(slideindex);
    var laenge = 0;
    var el = document.getElementsByClassName("smal");
    console.log(el);
    for (i=0; i<el.length; i++){
        laenge += el[i].width;
    }
    laenge = laenge*1.3;
    console.log(laenge);
    document.getElementById("smallpics").style.width = laenge+"px";
}

function push(n){
    showslides(slideindex = slideindex + n);
}

function showdirect(m){
    showslides(slideindex = m);
}

function showslides(n){
    var i;
    var inh = document.getElementsByClassName("slides");
    var smalpic = document.getElementsByClassName("smal");
    if (n > inh.length){slideindex=1;}
    if (n < 1){slideindex=inh.length;}
    for (i=0; i<inh.length; i++){
        inh[i].style.display = "none";
        smalpic[i].style.opacity = 0.5;
    }
    inh[slideindex-1].style.display = "block";
    smalpic[slideindex-1].style.opacity = 1;
}

/* When the site is loaded as samll site the length is calculated wrong.
   It must be recalculatet in the start function when the site width is larger 
   than 720px*/
var x = window.matchMedia("(min-width: 720px)");
x.addListener(start);

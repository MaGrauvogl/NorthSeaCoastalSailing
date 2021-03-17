/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var stretch = 1.6;
function start_img(t){
    var w = document.getElementById(t);
    var h= stretch*w.offsetWidth;
    w.style.height = h.toString()+"px";
}

var bild;
var bild_alt;
var cap;
var aus;
var sec;
var isvideo;
var status = false;
var bild_video;
var bild_style; //the style of the small picture is saved
//capt is the number of the caption in the array cap to be used 
//if no caption is there for a video a number < 0 is used
function show_img(fig, capt, bo){
    bild_video = capt;
    isvideo=capt;
    bild = document.getElementById(fig);
    bild_style = bild.style;
    aus = document.getElementById("close");
    sec = document.getElementById(bo);
    //styling of the large image
    bild.style.transform = "rotate(" + 0 + "deg)";
    bild.style.width = "80%";
    bild.style.zIndex = "4";
    //center the image
    var centr = Math.round((sec.offsetWidth-bild.offsetWidth)/2);
    bild.style.left = centr.toString()+ "px";
    bild.style.top = "-1%"; 
    //positioning of the figcaption
    var p = bild.offsetTop;
    var h = bild.height;
    if (bild_video > -1) {
        var caparray = document.getElementsByClassName("cap");
        cap = caparray[capt];
        cap.style.display = "block";
        //cap.style.position = "fixed";
        cap.style.top = (p+h).toString()+"px";
        cap.style.left = centr.toString()+ "px";
        cap.style.width = (bild.offsetWidth).toString()+"px";
        cap.style.zIndex = "4";
        //positioning of the close button
        aus.style.display = "block";
        var aus_breite = aus.offsetWidth*1.2;
        var aus_top = p;
        aus.style.top = aus_top.toString()+"px";
        var aus_left = bild.offsetLeft - aus_breite + bild.offsetWidth;
        aus.style.left = aus_left.toString()+"px";
        aus.style.zIndex = "5";
        aus.focus();
    }
    status = true;
    document.getElementById("clickon").style.display="none";
    if (capt < 0) bild.play();
}

//To keep everthing on place when the window is resized
// capt < 0: no figure caption is there
function resize_img(resimg){
    //to keep pictures on place
    var w = document.getElementById(resimg);
    var h= stretch*w.offsetWidth;
    w.style.height = h.toString()+"px";
    //to keep the large picture in place
    if (status === "true"){
        //center the image
        var centr = Math.round((sec.offsetWidth-bild.offsetWidth)/2);
        bild.style.left = centr.toString()+ "px";
        bild.style.top = "-1%";
        //positioning of the figcaption
        var p = bild.offsetTop;
        var h = bild.height;
        if (bild_video > -1){
            cap.style.display = "block";
            cap.style.top = (p+h).toString()+"px";
            cap.style.left = centr.toString()+ "px";
            cap.style.width = (bild.offsetWidth).toString()+"px";
        }
        //positioning of the close button
        aus.style.display = "block";
        var aus_breite = aus.offsetWidth*1.2;
        var aus_top = p;
        aus.style.top = aus_top.toString()+"px";
        var aus_left = bild.offsetLeft - aus_breite + bild.offsetWidth;
        aus.style.left = aus_left.toString()+"px";
        aus.style.zIndex = "5";
    }
}

function close_im(){
    aus.style.display = "none";
    if (isvideo > -1) cap.style.display = "none";
    bild.style = bild_style;
    document.getElementById("clickon").style.display="block";
    status = false;
}


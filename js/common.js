/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* The slide in and slide out of the menue on small screens is controlled*/
var vis = false;
function show_menue(){
    var menu = document.getElementById("menue"); 
    var men = document.getElementById("menue_list");
        men.style.display = "inline-block";
        const trans = 40;
        if (!vis){
        var pos = -trans;
        const inc = Math.abs(pos);
        var r = 0;
        var id = setInterval(frame, 5);
        var endpos = 0;
        function frame(){
            if (pos === endpos){
             clearInterval(id);
        }
        else{
            pos++;
            men.style.left = pos + "%";
            r = r + (180/trans);
            menu.style.transform = "rotate(" + r + "deg)";
            }
        }
    vis = true;
    }
        else{
        var pos = 0;
        r =  0;
        var i= 0;
        var endpos = -trans;
        var id = setInterval(frame, 5);
        function frame(){
            if (pos === endpos){
              clearInterval(id);
        }
        else{
            pos--;
            men.style.left = pos + "%";
            i++;
            r = 180 - i*(180/trans);
            menu.style.transform = "rotate(" + r + "deg)";
            if (r<5){
                men.style.display = "none";
            }
       }
       
    }
    vis = false;
    }
}

/* To set back the styles when the window gets larger*/
function windowchange(x){
    var men = document.getElementById("menue_list");
    //var menu = document.getElementById("menue");
    if (x.matches && !(men === null)){      
        men.style = "#menue__list";
        vis = true;
    }
}
var x = window.matchMedia("(min-width: 720px)");
windowchange(x);
x.addListener(windowchange);

/* To set the styles when window gets smal
 If the menue was visible before it will be made display:none and the variable do control the
 direction and the dirction itself of the svg-image ist set*/
function windowsmal(y){
    var men = document.getElementById("menue_list");
    var menu = document.getElementById("menue");
    if (y.matches && !(men === null)){ 
        men.style = "#menue__list";
        men.style.display = "none";
        vis = false;
        menu.style.transform ="rotate(0deg)";
    }
}
var y = window.matchMedia("(max-width: 720px)");
windowchange(y);
y.addListener(windowsmal); 


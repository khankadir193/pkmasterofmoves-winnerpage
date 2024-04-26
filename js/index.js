
function infofunc1(e, info) {
   var i, contentls, linksls;
   contentls = document.getElementsByClassName("demo4");
   for (i = 0; i < contentls.length; i++) {
      contentls[i].style.display = "none";
   }
   linksls = document.getElementsByClassName("demo3");
   for (i = 0; i < linksls.length; i++) {
      linksls[i].className = linksls[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}



function infofunc3(e, info) {
   var i, contentlr, linkslr;
   contentlr = document.getElementsByClassName("demo8");
   for (i = 0; i < contentlr.length; i++) {
      contentlr[i].style.display = "none";
   }
   linkslr = document.getElementsByClassName("demo7");
   for (i = 0; i < linkslr.length; i++) {
      linkslr[i].className = linkslr[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}

    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton4").click();
    });


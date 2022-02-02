// colorPreview.js
// In Progress
// TODO: search page for that regex, replace with a span around it with that background color
window.onload = function(){
    //var txt = document.body.innerText;
    //document.write(txt.replace("id","TestNAme"));
    var a=document.getElementsByTagName('body')[0].innerHTML;a=a.replace(/Program(\w\w+)*/gmi,'curse').replace(/language/gmi,'word');document.getElementsByTagName('body')[0].innerHTML=a;void(0);
    //.replace(/if/i,'ssdfadfa');
    //console.log(document.body.innerText);
    //document.body.innerHTML = document.body.innerHTML.replace(new RegExp("user1", "g"), "nobody");
};
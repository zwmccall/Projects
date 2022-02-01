// colorPreview.js
// In Progress
// TODO: search page for that regex, replace with a span around it with that background color
window.onload = function(){  
    $("body").html($("body").html().replace(/#([a-f0-9]{3}){1,2}\b/i,'t'));
    //document.body.innerHTML = document.body.innerHTML.replace(new RegExp("user1", "g"), "nobody");
};
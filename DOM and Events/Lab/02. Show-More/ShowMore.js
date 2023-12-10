function showText() {
    const anchor  = document.getElementById('more');
    const span  = document.getElementById('text');


    //<span id="text" style= "display:none">Welcome to JavaScript and DOM.</span>
    //span should be changed to display inline

    span.style.display = 'inline';

    //<a href="#" id="more" onclick= "showText()">Read more ...</a>
    //anchor should be hide
    anchor.style.display = 'none';	
}
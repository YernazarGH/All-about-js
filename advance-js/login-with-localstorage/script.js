window.addEventListener('DOMContentLoaded', function(){

    let rememberMe = document.getElementById('rememberMe'),
        login = document.querySelector('#email'),
        password = document.querySelector('#password'),
        darkMenu = document.getElementById('dark'),
        defaultMenu = document.getElementById('default');
    
    rememberMe.addEventListener('click', function(){
        if(rememberMe.checked == true) {  
            localStorage.setItem("email", login.value);
            localStorage.setItem("password", password.value);
        };
        if (rememberMe.checked == false){
            localStorage.removeItem('email');
            localStorage.removeItem('password'); 
        };
    });
    let request = localStorage.getItem('email');
    
    console.log(request);
    if(localStorage.getItem('email') == null && localStorage.getItem('password') == null){
        rememberMe.checked = false;
    } else {
        rememberMe.checked = true;
    };
    
    document.body.style.background = 'rgb(255, 255, 255)';
    document.body.style.color = 'rgb(0, 0, 0)';

    
    darkMenu.addEventListener('click', function() {
        let id = setInterval(animationMenu, 20);
        let red = 255,
            green = 255,
            blue = 255;
        function animationMenu() {
            if(document.body.style.background == 'rgb(55, 55, 55)'){
                clearInterval(id);
            }else{
                red -= 10;
                green -= 10;
                blue -= 10;
                document.body.style.background = 'rgb(' + (red - 10) + ', ' + (green - 10) + ', ' + (blue - 10) + ')';
                document.body.style.color = 'rgb(' + (255) + ', ' + (255) + ', ' + (255) + ')';
            } 
        };
        localStorage.setItem("menu-dark", "true");
        localStorage.removeItem("menu-white", "true");
        
    });
    
    defaultMenu.addEventListener('click', function() {
        let id = setInterval(animationMenu, 20);
        let red = 55,
            green = 55,
            blue = 55;
        function animationMenu() {
            if(document.body.style.background == 'rgb(255, 255, 255)'){
                clearInterval(id);
            }else{
                red += 10;
                green += 10;
                blue += 10;
                document.body.style.background = 'rgb(' + (red + 10) + ', ' + (green + 10) + ', ' + (blue + 10) + ')';
                document.body.style.color = 'rgb(' + (0) + ', ' + (0) + ', ' + (0) + ')';   
            } 
        };
        localStorage.setItem("menu-white", "true");
        localStorage.removeItem("menu-dark", "true");
    });
    
    if(localStorage.getItem("menu-dark")){
        document.body.style.background = 'rgb(55, 55, 55)';
        document.body.style.color = 'rgb(255, 255, 255)';
    }else{
        document.body.style.background = 'rgb(255, 255, 255)';
        document.body.style.color = 'rgb(0, 0, 0)';
    };
    
});
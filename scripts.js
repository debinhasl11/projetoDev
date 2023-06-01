function toggleMode(){
    const  html = document.documentElement;
    html.classList.toggle("lighty")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("lighty")){
        img.setAttribute('src','./assests/light-avatar.png')
    }else{
        img.setAttribute('src','./assests/avatar.png')
    }
    // Existe um cara que faz tudo isso para nos
    // html.classList.togle('lighty') ele faz tudo isso sem precisar fazer o if
}
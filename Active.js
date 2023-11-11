const ActHover = document.querySelectorAll('.nav-list');
const WindowPathName = window.location.pathname;

ActHover.forEach(ActHover =>{
    if(ActHover.href.includes(WindowPathName)){
            ActHover.classList.add('active')
    }
})




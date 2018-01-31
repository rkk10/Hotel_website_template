const bar = document.getElementById('bar')
const menu = document.getElementById("menu")

bar.addEventListener('click', () => {
    console.log('clicked')
    if(menu.classList.contains('drop_menu')){
        menu.classList.remove('drop_menu')
    }else{
        menu.classList.add('drop_menu')
    }

    
})
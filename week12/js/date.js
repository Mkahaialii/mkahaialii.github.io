window.addEventListener('load', (event)=>{
    const update = document.querySelector('.lastModified');
    update.textContent = document.lastModified;

    const year = document.querySelector('#year');
    year.textContent = new Date().getFullYear();
})
'use strict';
{

// FadeIn
const targets = document.querySelectorAll('.section__title');

function callback(entries,obs){
    console.log(entries);

entries.forEach(entry =>{
    if(!entry.isIntersecting){
        return;
    }

    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
});

}

const options = {
    threshold:0.2,

};

const observer = new IntersectionObserver(callback,options);

    targets.forEach(target =>{
        observer.observe(target);

    });
// FadeIn end


}
{
const open=  document.getElementById('open');
const sp__menu =document.querySelector('.sp__menu');

open.addEventListener('click',() =>{
open.classList.toggle('show');
sp__menu.classList.toggle('panelactive');
});

sp__menu.addEventListener('click',() =>{
    open.classList.remove('show');
    sp__menu.classList.toggle('panelactive');
});
}
// end 

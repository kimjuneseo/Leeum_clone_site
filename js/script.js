const $ = (el, one= true) => one ? document?.querySelector(el) :document?.querySelectorAll(el);


[...$('.boro a', false)].map(a => {
    
    a.addEventListener("click", e => {
        [...$('.boro a', false)].map(el => el.classList.remove('cici'))
        a.classList.add('cici');

    });
}) 




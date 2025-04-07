const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.slider');

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass(){
    const elm = document.querySelector(`.${ACTIVECLASS}`);
    if (elm) {
        elm.classList.remove(ACTIVECLASS);
    }
}

function addClass($event){
    $event.stopPropagation();
    removeActiveClass();
    const target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
});

// menu bar
$(document).ready(function() {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    })
})

$(document).ready(function(){
    $('.slider').click(function(){
        var caption = $(this).data('caption');
        $('#caption-text').text(caption);
    });
});

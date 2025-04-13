const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.slider');

if (IMAGES.length > 0) {
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

    $(document).ready(function(){
        $('.slider').click(function(){
            var caption = $(this).data('caption');
            $('#caption-text').text(caption);
        });
    });
}




// menu bar
// $(document).ready(function () {
//     console.log("Script is loaded");

//     $(document).ready(function() {
//         $(`#menu-toggle`).click(function () {
//             $('.navbar ul').toggleClass('show');
//         });
//     });
// });

$(document).ready(function () {
    const menuButton = $('#menu-toggle');
    const navMenu = $('.navbar ul');
    const icon = $('#menu-icon');

    menuButton.click(function (e) {
        e.stopPropagation();
        navMenu.toggleClass('show');

        if (icon.hasClass('fa-bars')) {
        icon.removeClass('fa-bars').addClass('fa-xmark');
        } else {
        icon.removeClass('fa-xmark').addClass('fa-bars');
        }
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.navbar, #menu-toggle').length) {
        if (navMenu.hasClass('show')) {
            navMenu.removeClass('show');
            icon.removeClass('fa-xmark').addClass('fa-bars');
        }
        }
    });
});

$(document).ready(function () {
    $('#travel-toggle').click(function (e) {
      e.stopPropagation();
      $('#travel-dropdown').toggleClass('show');
    });
  
    $(document).click(function (event) {
      if (!$(event.target).closest('#travel-toggle').length) {
        $('#travel-dropdown').removeClass('show');
      }
    });
});

$(function() {
    $('.menu_icon').click(function() {
        $(this).toggleClass('active');
    })
});
$(document).ready(function() {
    $(function() {
        $('.menubutton').on('click', function() {
            $(this).toggleClass('active');
            $(".phone").toggle(500);
        })
    })
})
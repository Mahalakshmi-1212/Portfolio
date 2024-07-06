
$(document).ready(function() {
    $('.filter-item').click(function() {
        var filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.post').show();
        } else {
            $('.post').not('.' + filter).hide();
            $('.post').filter('.' + filter).show();
        }

        // Changing active class on buttons
        $('.filter-item').removeClass('active');
        $(this).addClass('active');
    });
});

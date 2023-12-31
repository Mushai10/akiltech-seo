$(function () {

    $('.next').click(function () {
        var numStep = $(this).attr("num-step");
        var clStep = '#collapse' + (parseInt(numStep) + 1);
        $(clStep).collapse('show');
        $('#accordion .in').collapse('hide');
        console.log(clStep);
        /*cambiar estilo e imagen a botón*/
        $('.s' + numStep).addClass('step-ok').removeClass('step');
        $('.s' + numStep).empty().append('<i class=\"fa fa-check\" aria-hidden=\"true\"><\/i>');

    });

    $('.prev').click(function () {
        var numStep = $(this).attr("num-step");
        var clStep = '#collapse' + (parseInt(numStep) - 1);
        $(clStep).collapse('show');
        $('#accordion .in').collapse('hide');
    });

    $('.btn-primary').click(function () {

        var delay = 4000;
        setTimeout(function () { window.location = 'p3'; }, delay);

    });

    $('.btn-secondary').click(function () {
        $('.step-ok').addClass('step').removeClass('step-ok');
        $('.s0').empty().append('1');
        $('.s1').empty().append('2');
        $('#collapse0').collapse('show');
        $('#accordion .in').collapse('hide');

    });


});

$(function () {
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function (e) {
        $(this).parents('.entry:first').remove();

        e.preventDefault();
        return false;
    });
});

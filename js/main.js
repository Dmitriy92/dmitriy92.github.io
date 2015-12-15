$(window).load(function() {
    $("#flexiselDemo1").flexisel();


    //при нажатии на элемент списка - список не пропадает
    $('.take-right, .take-left, .input-group-btn').on('click', '.dropdown-menu > li > button > .logo-web, .dropdown-menu > li > button > .logo-mastercard', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    //при наведении или нажатии срабатывает выпадающая таблица
    $(function () {
        $('[data-toggle="popover"]').popover({
            html:'true',
            content: function() {  return $($(this).data('contentwrapper')).html(); }
        });
    });

    $('.form-logos1 li').click(function(){
        var formtemp = $(this).find('a img').attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });

    $('.form-logos2 li').click(function(){
        var formtemp = $(this).find('a img').attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });



    // кнопка поменять местами меняет картинки и значения
    $('.button-swap').click(function(){
        // get values
        var form_left = $('.form-left').attr('src');
        var form_right = $('.form-right').attr('src');
        var input_top = $('#input-top').val();
        var input_bottom = $('#input-down').val();
        var valuta_top = $('.valuta-top').html();
        var valuta_bottom = $('.valuta-bottom').html();
        // define new variables
        $('.form-right').attr('src', form_left);
        $('.form-img2').attr('src', form_left);

        $('.form-left').attr('src', form_right);
        $('.form-img1').attr('src', form_right);

        $('#input-top').val(input_bottom);
        $('#input-down').val(input_top);

        $('.valuta-top').html(valuta_bottom);
        $('.valuta-bottom').html(valuta_top);
    });





    $('.form-logos1 li button .logo-qiwi').click(function(){
        $('.valuta-top').html('RUR');
        var formtemp = $(this).attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });
    $('.form-logos2 li button .logo-qiwi').click(function(){
        $('.valuta-bottom').html('RUR');
        var formtemp = $(this).attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });

    $('.form-logos1 li button .logo-sber').click(function(){
        $('.valuta-top').html('RUB');
        var formtemp = $(this).attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });
    $('.form-logos2 li button .logo-sber').click(function(){
        $('.valuta-bottom').html('RUB');
        var formtemp = $(this).attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });

    $('.form-logos1 li button .logo-privat').click(function(){
        $('.valuta-top').html('UAH');
        var formtemp = $(this).attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });
    $('.form-logos2 li button .logo-privat').click(function(){
        $('.valuta-bottom').html('UAH');
        var formtemp = $(this).attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });

    $('.form-logos1 li button .logo-mastercard').click(function(){
        $('.valuta-top').html('UAH');
        var formtemp = $(this).attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });
    $('.form-logos2 li button .logo-mastercard').click(function(){
        $('.valuta-bottom').html('UAH');
        var formtemp = $(this).attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });

    $('.form-logos1 li button .logo-web').click(function(){
        $('.valuta-top').html('WMZ');
        var formtemp = $(this).attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });
    $('.form-logos2 li button .logo-web').click(function(){
        $('.valuta-bottom').html('WMZ');
        var formtemp = $(this).attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });

    //$('#web-min-max > div > table > tbody > tr > td > button').click(function(){
    //    //alert($(this).text());
    //    alert('44');
    //});

    $('.form-logos1 li button .logo-yandex').click(function(){
        $('.valuta-top').html('RUR');
        var formtemp = $(this).attr('src');
        $('.form-img1').attr('src', formtemp);
        $('.form-left').attr('src', formtemp);
    });
    $('.form-logos2 li button .logo-yandex').click(function(){
        $('.valuta-bottom').html('RUR');
        var formtemp = $(this).attr('src');
        $('.form-img2').attr('src', formtemp);
        $('.form-right').attr('src', formtemp);
    });

});
$(window).load(function() {
    $("#flexiselDemo1").flexisel();


    //static dropdown on click
    $('.take-right, .take-left, .input-group-btn').on('click', '.dropdown-menu > li > button > .logo-web, .dropdown-menu > li > button > .logo-mastercard', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

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



    // changes for images and values
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

    //$('.form-logos1 li button .logo-mastercard').click(function(){
    //    $('.valuta-top').html('UAH');
    //    var formtemp = $(this).attr('src');
    //    $('.form-img1').attr('src', formtemp);
    //    $('.form-left').attr('src', formtemp);
    //});
    //$('.form-logos2 li button .logo-mastercard').click(function(){
    //    $('.valuta-bottom').html('UAH');
    //    var formtemp = $(this).attr('src');
    //    $('.form-img2').attr('src', formtemp);
    //    $('.form-right').attr('src', formtemp);
    //});
    //
    //$('.form-logos1 li button .logo-web').click(function(){
    //    $('.valuta-top').html('WMZ');
    //    var formtemp = $(this).attr('src');
    //    $('.form-img1').attr('src', formtemp);
    //    $('.form-left').attr('src', formtemp);
    //});
    //$('.form-logos2 li button .logo-web').click(function(){
    //    $('.valuta-bottom').html('WMZ');
    //    var formtemp = $(this).attr('src');
    //    $('.form-img2').attr('src', formtemp);
    //    $('.form-right').attr('src', formtemp);
    //});


    $('.change-page').on('click', '.min-max-left', function(){
        var valuta_left = $(this).find('.valuta').text();
        $('.valuta-top').text(valuta_left);
        if(valuta_left == 'WMZ' ||  valuta_left == 'WMR' ||  valuta_left == 'WMU' ||  valuta_left == 'WME' ||  valuta_left == 'WMB'){
            $('.form-img1').attr('src', 'img/logo-web.png');
            $('.form-left').attr('src', 'img/logo-web.png');
        }
        else if(valuta_left == 'UAH' ||  valuta_left == 'RUR'){
            $('.form-img1').attr('src', 'img/logo-mastercard.png');
            $('.form-left').attr('src', 'img/logo-mastercard.png');
        }
    }).on('click', '.min-max-right', function(){
        var valuta_right = $(this).find('.valuta').text();
        $('.valuta-bottom').text(valuta_right);
        if(valuta_right == 'WMZ' ||  valuta_right == 'WMR' ||  valuta_right == 'WMU' ||  valuta_right == 'WME' ||  valuta_right == 'WMB'){
            $('.form-img2').attr('src', 'img/logo-web.png');
            $('.form-right').attr('src', 'img/logo-web.png');
        }
        else if(valuta_right == 'UAH' ||  valuta_right == 'RUR'){
            $('.form-img2').attr('src', 'img/logo-mastercard.png');
            $('.form-right').attr('src', 'img/logo-mastercard.png');
        }
        //var master_r = document.getElementById("mastercard-min-max-right")
        //var test = this.parentNode.parentNode.id;
        //if(master_r == test){
        //    alert('da');
        //}
        //else{
        //    alert('net');
        //}
        //console.log(test);
        //console.log(master_r);
    });

    //$('#web-min-max > div > table > tbody > tr > td > button').click(function(){
    //    //alert($(this).text());
    //    alert('44');
    //});


    $('.logo-qiwi').hover(function () {
        $('#qiwi-test').css('display','block');
    }, function () {
        $('#qiwi-test').fadeOut(5000);
    });
    $('#qiwi-test').hover(function(){
        $(this).css('display','block');
    });

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

    $('#web-min-max-right').popover('show');

    // hover on arrows
    $('.nbs-flexisel-nav-left').hover(function(){
        $('.nav-clients-left').css('color','#000000');
    }).mouseout(function(){
        $('.nav-clients-left').css('color','#808080');
    });
    $('.nbs-flexisel-nav-right').hover(function(){
        $('.nav-clients-right').css('color','#000000');
    }).mouseout(function(){
        $('.nav-clients-right').css('color','#808080');
    });



    //$('.form-logos2 li button').hover(function(){
    //    $(this).attr('data-delay','500').change(function(){});
    //    //    .popover({
    //    //    delay:{
    //    //        show:500,
    //    //        hide: 4000
    //    //    }
    //    //});
    //        //.attr('data-delay','5000').change();
    //    console.log('33');
    //});

    //$('.form-logos2 li button').attr('data-delay','5000');

    //$('.form-logos1 li button').hover(function(){
    //    $('.dropdown-menu li button img').click();
    //});

    //$('.form-logos2 li').hover(function(){
    //    var id = $(this).children('button').attr('data-contentwrapper');
    //    console.log(id);
    //    $(this).prepend('<div class="min-max"><p class="valuta">RUR</p><p class="max-limit">Макс. лимит</p><p class="max-limit">9000.00 RUR</p></div>');
    //});



});
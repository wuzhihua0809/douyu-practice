$(document).ready(function() {
    const search = $('.search');
    const fenlei = $('.fenlei');
    const headnav = $('.headnav');
    const searchbar = $('.searchbar');
    const fenleicontent = $('.fenleicontent');
    const history = $('.history');
    const historycontent = $('.historycontent');
    const historyimg = $('.historyimg');
    const historytxt = $('.historytxt');
    const focus = $('.focus');
    const focuscontent = $('.focuscontent');
    const focusimg = $('.focusimg');
    const focustxt = $('.focustxt');
    const download = $('.download');
    const downloadcontent = $('.downloadcontent');
    const downloadimg = $('.downloadimg');
    const downloadtxt = $('.downloadtxt');
    const account = $('.account');
    const accountcontent = $('.accountcontent');
    const accountimg = $('.accountimg');
    const accounttxt = $('.accounttxt');
    search.on('focus',function() {
    	headnav.addClass('active');
        searchbar.addClass('active');
    });
    search.on('blur',function() {
    	headnav.removeClass('active');
        searchbar.removeClass('active');
    });
    fenlei.on('mouseenter',function() {
        setTimeout(function(){
            fenleicontent.addClass('active');
            $('.triangle1').addClass('active'); }, 50);
    });
    fenlei.on('mouseleave', function() {
        var timer = setTimeout(function() {
            fenleicontent.removeClass('active');
            $('.triangle1').removeClass('active'); }, 50);
        $('.fenleicontent').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    fenleicontent.on('mouseleave', function() {
        fenleicontent.removeClass('active');
        $('.triangle1').removeClass('active');
    });
    history.on('mouseenter',function() {
        setTimeout(function() {
            $('.triangle5').addClass('active');
            historycontent.addClass('active');
            historyimg.addClass('active');
            historytxt.addClass('active'); }, 50);
    });
    history.on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle5').removeClass('active');
            historycontent.removeClass('active');
            historyimg.removeClass('active');
            historytxt.removeClass('active'); }, 50);
        historycontent.on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    historycontent.on('mouseleave', function() {
        $('.triangle5').removeClass('active');
        historycontent.removeClass('active');
        historyimg.removeClass('active');
        historytxt.removeClass('active');
    });
    focus.mouseenter(function() {
        setTimeout(function() {
            $('.triangle6').addClass('active');
            focuscontent.addClass('active');
            focusimg.addClass('active');
            focustxt.addClass('active'); }, 50);
    });
    focus.on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle6').removeClass('active');
            focuscontent.removeClass('active');
            focusimg.removeClass('active');
            focustxt.removeClass('active'); }, 50);
            focuscontent.on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    focuscontent.on('mouseleave', function() {
        $('.triangle6').removeClass('active');
        focuscontent.removeClass('active');
        focusimg.removeClass('active');
        focustxt.removeClass('active');
    });
    download.on('mouseenter',function() {
        setTimeout(function() {
            $('.triangle7').addClass('active');
            downloadcontent.addClass('active');
            downloadimg.addClass('active');
            downloadtxt.addClass('active');
            $('.triangle2').addClass('active'); }, 50);
    });
    download.on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle7').removeClass('active');
            downloadcontent.removeClass('active');
            downloadimg.removeClass('active');
            downloadtxt.removeClass('active');
            $('.triangle2').removeClass('active'); }, 50);
        downloadcontent.on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    downloadcontent.on('mouseleave', function() {
        $('.triangle7').removeClass('active');
        downloadcontent.removeClass('active');
        downloadimg.removeClass('active');
        downloadtxt.removeClass('active');
        $('.triangle2').removeClass('active');
    });
    account.on('mouseenter',function() {
        setTimeout(function() {
            $('.triangle8').addClass('active');
            accountcontent.addClass('active');
            $('.triangle3').addClass('active');
            accounttxt.addClass('active'); }, 50);
    });
    account.on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle8').removeClass('active');
            accountcontent.removeClass('active');
            $('.triangle3').removeClass('active');
            accounttxt.removeClass('active'); }, 50);
        accountcontent.on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    accountcontent.on('mouseleave', function() {
        $('.triangle8').removeClass('active');
        accountcontent.removeClass('active');
        accounttxt.removeClass('active');
        $('.triangle3').removeClass('active');
    });
    $('.leftbtnout').on('click',function() {
        $('.left').removeClass('active');
        $('.leftmenu').removeClass('active');
        $('.leftbtnout').removeClass('active');
        $('.leftbtnin').removeClass('active');
        $('.main').removeClass('active');
    });
    $('.leftbtnin').on('click',function() {
        $('.left').addClass('active');
        $('.leftmenu').addClass('active');
        $('.leftbtnout').addClass('active');
        $('.leftbtnin').addClass('active');
        $('.main').addClass('active');
    });
    $('.lefttitle1').on('click',function() {
        $('.lefttitle1').removeClass('active');
        $('.lefttitle2').removeClass('active');
        $('.recommend').removeClass('active');
        $('.typelist').removeClass('active');
    });
    $('.lefttitle2').on('click',function() {
        $('.lefttitle1').addClass('active');
        $('.lefttitle2').addClass('active');
        $('.recommend').addClass('active');
        $('.typelist').addClass('active');
    });
    $('#typelist2').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent2').addClass('active');
            $('#typecontent1').css('height','210px'); }, 50);
    });
    $('#typelist2').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent2').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent2').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent2').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent2').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist3').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent3').addClass('active');
            $('#typecontent1').css('height','154px'); }, 50);
    });
    $('#typelist3').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent3').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent3').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent3').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent3').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist4').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent4').addClass('active');
            $('#typecontent1').css('height','182px'); }, 50);
    });
    $('#typelist4').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent4').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent4').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent4').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent4').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist5').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent5').addClass('active');
            $('#typecontent1').css('height','168px'); }, 50);
    });
    $('#typelist5').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent5').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent5').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent5').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent5').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist6').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent6').addClass('active');
            $('#typecontent1').css('height','210px'); }, 50);
    });
    $('#typelist6').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent6').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent6').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent6').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent6').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist7').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent7').addClass('active');
            $('#typecontent1').css('height','210px'); }, 50);
    });
    $('#typelist7').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent7').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent7').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent7').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent7').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist8').on('mouseenter',function() {
        setTimeout(function() {
            $('#typecontent8').addClass('active');
            $('#typecontent1').css('height','196px'); }, 50);
    });
    $('#typelist8').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('#typecontent8').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
        $('#typecontent8').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('#typecontent8').on('mouseleave',function() {
        setTimeout(function() {
            $('#typecontent8').removeClass('active');
            $('#typecontent1').css('height','228px'); }, 50);
    });
    var cleantype = function() {
        $('.onlinetype1, .onlinetype2, .onlinetype3, .onlinetype4, .onlinetype5, .onlinetype6, .onlinetype7, .onlinetype8, .onlinetype9').removeClass('active');
    };
    $('.onlinetype1').addClass('active');
    $('.onlinetype1').on('click',function() {
        cleantype();
        $('.onlinetype1').addClass('active');
    });
    $('.onlinetype2').on('click',function() {
        cleantype();
        $('.onlinetype2').addClass('active');
    });
    $('.onlinetype3').on('click',function() {
        cleantype();
        $('.onlinetype3').addClass('active');
    });
    $('.onlinetype4').on('click',function() {
        cleantype();
        $('.onlinetype4').addClass('active');
    });
    $('.onlinetype5').on('click',function() {
        cleantype();
        $('.onlinetype5').addClass('active');
    });
    $('.onlinetype6').on('click',function() {
        cleantype();
        $('.onlinetype6').addClass('active');
    });
    $('.onlinetype7').on('click',function() {
        cleantype();
        $('.onlinetype7').addClass('active');
    });
    $('.onlinetype8').on('click',function() {
        cleantype();
        $('.onlinetype8').addClass('active');
    });
    $('.onlinetype9').on('click',function() {
        cleantype();
        $('.onlinetype9').addClass('active');
    });
    $('.gettouch').on('mouseenter',function() {
        $(this).find('.playicon').animate({
        top:'40%',
        opacity:'1'});
    });
    $('.gettouch').on('mouseleave',function() {
        $(this).find('.playicon').animate({
            top:'80%',
            opacity:'0'});
    });
    var cleanpage = function() {
        $('#page1, #page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9').removeClass('active');
        $('#page2').text(2);
        $('#page3').text(3);
        $('#page4').text(4);
        $('#page5').text(5);
        $('#page6').text(6);
        $('#page7').text(7);
        $('#page8').text(8);
    };
    $('#page1').addClass('active');
    $('#dot2').addClass('active');
    $('#page1').on('click',function() {
        cleanpage();
        $('#page1').addClass('active');
        $('#dot1').removeClass('active');
        $('#dot2').addClass('active');
    });
    $('#page2').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).addClass('active');
            $('#dot1').removeClass('active');
            $('#dot2').addClass('active');
        };
    });
    $('#page3').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).addClass('active');
            $('#dot1').css('display','none');
            $('#dot2').css('display','inline-block');
        };
    });
    $('#page4').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).addClass('active');
            $('#dot1').removeClass('active');
            $('#dot2').addClass('active');
        };
    });
    $('#page5').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).addClass('active');
            $('#dot1').removeClass('active');
            $('#dot2').addClass('active');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').removeClass('active');
        };
    });
    $('#page6').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page6').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').removeClass('active');
        };
    });
    $('#page7').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page7').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').removeClass('active');
        };
    });
    $('#page8').on('click',function() {
        var num = parseInt($(this).text()); 
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page8').addClass('active');
            $('#dot1').removeClass('active');
            $('#dot2').addClass('active');
        };
    });
    $('#page9').on('click',function() {
        cleanpage();
        $('#page2').text(28);
        $('#page3').text(29);
        $('#page4').text(30);
        $('#page5').text(31);
        $('#page6').text(32);
        $('#page7').text(33);
        $('#page8').text(34);
        $('#page9').addClass('active');
        $('#dot1').addClass('active');
        $('#dot2').removeClass('active');
    });
    $('.lastpage').on('click',function() {
        var num;
        $('.page').each(function(){
            if ($(this).css('color') == 'rgb(255, 255, 255)') {
                num = parseInt($(this).text()); 
            };
        });
        if (num > 1) {
            num--;
            if (num >5 && num < 31) {
                cleanpage();
                $('#page2').text(num -3);
                $('#page3').text(num -2);
                $('#page4').text(num -1);
                $('#page5').text(num);
                $('#page6').text(num +1);
                $('#page7').text(num +2);
                $('#page8').text(num +3);
                $('#page5').addClass('active');
                $('#dot1').addClass('active');
                $('#dot2').addClass('active');
            } else if(num <= 5) {
                cleanpage();
                var page = '#page' +num;
                $(page).addClass('active');
                $('#dot1').removeClass('active');
                $('#dot2').addClass('active');
            } else if(num >=31) {
                cleanpage();
                $('#page2').text(28);
                $('#page3').text(29);
                $('#page4').text(30);
                $('#page5').text(31);
                $('#page6').text(32);
                $('#page7').text(33);
                $('#page8').text(34);
                num = 9 - 35 + num;
                var page = '#page' +num;
                $(page).addClass('active');
                $('#dot1').addClass('active');
                $('#dot2').removeClass('active');
            };
        };
    });
    $('.nextpage').on('click',function() {
        var num;
        $('.page').each(function(){
            if ($(this).css('color') == 'rgb(255, 255, 255)') {
                num = parseInt($(this).text()); 
            };
        });
        if (num <35) {
            num++;
            if (num >5 && num < 31) {
                cleanpage();
                $('#page2').text(num -3);
                $('#page3').text(num -2);
                $('#page4').text(num -1);
                $('#page5').text(num);
                $('#page6').text(num +1);
                $('#page7').text(num +2);
                $('#page8').text(num +3);
                $('#page5').addClass('active');
                $('#dot1').addClass('active');
                $('#dot2').addClass('active');
            } else if(num <= 5) {
                cleanpage();
                var page = '#page' +num;
                $(page).addClass('active');
                $('#dot1').removeClass('active');
                $('#dot2').addClass('active');
            } else if(num >=31) {
                cleanpage();
                $('#page2').text(28);
                $('#page3').text(29);
                $('#page4').text(30);
                $('#page5').text(31);
                $('#page6').text(32);
                $('#page7').text(33);
                $('#page8').text(34);
                num = 9 - 35 + num;
                var page = '#page' +num;
                $(page).addClass('active');
                $('#dot1').addClass('active');
                $('#dot2').removeClass('active');
            };
        };
    });
    $('.jumpto').on('click',function() {
        var value = $('.jumppage').val();
        if (isNaN(value)) {
            $('.warning').addClass('active');
            setTimeout(function(){
                $(".warning").removeClass('active'); }, 3000);
        } 
        var num = parseInt(value);
        if (num >5 && num < 31) {
            cleanpage();
            $('#page2').text(num -3);
            $('#page3').text(num -2);
            $('#page4').text(num -1);
            $('#page5').text(num);
            $('#page6').text(num +1);
            $('#page7').text(num +2);
            $('#page8').text(num +3);
            $('#page5').addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').addClass('active');
        } else if(num <= 5 && num >= 1) {
            cleanpage();
            var page = '#page' +num;
            $(page).addClass('active');
            $('#dot1').removeClass('active');
            $('#dot2').addClass('active');
        } else if(num >=31 && num <= 35) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            num = 9 - 35 + num;
            var page = '#page' +num;
            $(page).addClass('active');
            $('#dot1').addClass('active');
            $('#dot2').removeClass('active');
        } else {
            $('.warning').addClass('active');
            setTimeout(function(){
                $(".warning").removeClass('active'); }, 3000);
        };
        $('.jumppage').val(""); 
    });
    $('.jumppage').bind('keypress',function(event){
        if(event.keyCode == "13") {
            var value = $('.jumppage').val();
            if (isNaN(value)) {
                $('.warning').addClass('active');
                setTimeout(function(){
                    $(".warning").removeClass('active'); }, 3000);
            } 
            var num = parseInt(value);
            if (num >5 && num < 31) {
                cleanpage();
                $('#page2').text(num -3);
                $('#page3').text(num -2);
                $('#page4').text(num -1);
                $('#page5').text(num);
                $('#page6').text(num +1);
                $('#page7').text(num +2);
                $('#page8').text(num +3);
                $('#page5').addClass('active');
                $('#dot1').addClass('active');
                $('#dot2').addClass('active');
            } else if(num <= 5 && num >= 1) {
                cleanpage();
                var page = '#page' +num;
                $(page).addClass('active');
                $('#dot1').removeClass('active');
                $('#dot2').addClass('active');
            } else if(num >=31 && num <= 35) {
                cleanpage();
                $('#page2').text(28);
                $('#page3').text(29);
                $('#page4').text(30);
                $('#page5').text(31);
                $('#page6').text(32);
                $('#page7').text(33);
                $('#page8').text(34);
                num = 9 - 35 + num;
                var page = '#page' +num;
                $(page).addClass('active');
                $('#dot1').addClass('active');
                $('#dot2').removeClass('active');
            } else {
                $('.warning').addClass('active');
                setTimeout(function(){
                    $(".warning").removeClass('active'); }, 3000);
            };
            $('.jumppage').val("");
        };
    });
});
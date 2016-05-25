$(document).ready(function() {
    $('.search').on('focus',function() {
    	$('.searchbar').css('width','168px');
    	$('.headnav').css('margin-left','160px');
    });
    $('.search').on('blur',function() {
    	$('.searchbar').css('width','148px');
    	$('.headnav').css('margin-left','180px');
    });
    $('.fenlei').on('mouseenter',function() {
        setTimeout(function(){
            $('.fenleicontent').show();
            $('.triangle1').css('transform','rotate(180deg)'); }, 50);
    });
    $('.fenlei').on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.fenleicontent').hide();
            $('.triangle1').css('transform','rotate(0deg)'); }, 50);
        $('.fenleicontent').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.fenleicontent').on('mouseleave', function() {
        $('.fenleicontent').hide();
        $('.triangle1').css('transform','rotate(0deg)');
    });
    $('.history').on('mouseenter',function() {
        setTimeout(function() {
            $('.triangle5').show();
            $('.historycontent').show();
            $('.historyimg').css('background-position','-23px 1px');
            $('.historytxt').css('color','#f70'); }, 50);
    });
    $('.history').on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle5').hide();
            $('.historycontent').hide();
            $('.historyimg').css('background-position','0 1px');
            $('.historytxt').css('color','#868686'); }, 50);
        $('.historycontent').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.historycontent').on('mouseleave', function() {
        $('.triangle5').hide();
        $('.historycontent').hide();
        $('.historyimg').css('background-position','0 1px');
        $('.historytxt').css('color','#868686');
    });
    $('.focus').mouseenter(function() {
        setTimeout(function() {
            $('.triangle6').show();
            $('.focuscontent').show();
            $('.focusimg').css('background-position','-23px -24px');
            $('.focustxt').css('color','#f70'); }, 50);
    });
    $('.focus').on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle6').hide();
            $('.focuscontent').hide();
            $('.focusimg').css('background-position','0 -24px');
            $('.focustxt').css('color','#868686'); }, 50);
        $('.focuscontent').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.focuscontent').on('mouseleave', function() {
        $('.triangle6').hide();
        $('.focuscontent').hide();
        $('.focusimg').css('background-position','0 -24px');
        $('.focustxt').css('color','#868686');
    });
    $('.download').on('mouseenter',function() {
        setTimeout(function() {
            $('.triangle7').show();
            $('.downloadcontent').show();
            $('.downloadimg').css('background-position','-23px -51px');
            $('.triangle2').css('transform','rotate(180deg)');
            $('.downloadtxt').css('color','#f70'); }, 50);
    });
    $('.download').on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle7').hide();
            $('.downloadcontent').hide();
            $('.downloadimg').css('background-position','0 -51px');
            $('.downloadtxt').css('color','#868686'); }, 50);
            $('.triangle2').css('transform','rotate(0deg)');
        $('.downloadcontent').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.downloadcontent').on('mouseleave', function() {
        $('.triangle7').hide();
        $('.downloadcontent').hide();
        $('.downloadimg').css('background-position','0 -51px');
        $('.downloadtxt').css('color','#868686');
        $('.triangle2').css('transform','rotate(0deg)');
    });
    $('.account').on('mouseenter',function() {
        setTimeout(function() {
            $('.triangle8').show();
            $('.accountcontent').show();
            $('.triangle3').css('transform','rotate(180deg)');
            $('.accounttxt').css('color','#f70'); }, 50);
    });
    $('.account').on('mouseleave', function() {
        var timer = setTimeout(function() {
            $('.triangle8').hide();
            $('.accountcontent').hide();
            $('.triangle3').css('transform','rotate(0deg)');
            $('.accounttxt').css('color','#868686'); }, 50);
        $('.accountcontent').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.accountcontent').on('mouseleave', function() {
        $('.triangle8').hide();
        $('.accountcontent').hide();
        $('.accounttxt').css('color','#868686');
        $('.triangle3').css('transform','rotate(0deg)');
    });
    $('.leftbtnout').on('click',function() {
        $('.left').css('display','none');
        $('.leftmenu').css('display','block');
        $('.leftbtnout').css('display','none');
        $('.leftbtnin').css('display','block');
        $('.main').css('padding-left','270px');
    });
    $('.leftbtnin').on('click',function() {
        $('.left').css('display','block');
        $('.leftmenu').css('display','none');
        $('.leftbtnout').css('display','block');
        $('.leftbtnin').css('display','none');
        $('.main').css('padding-left','70px');
    });
    $('.lefttitle1').on('click',function() {
        $('.lefttitle1').css('background','#f60');
        $('.lefttitle2').css('background','#2c2c2c');
        $('.recommend').css('display','none');
        $('.typelist').css('display','block');
    });
    $('.lefttitle2').on('click',function() {
        $('.lefttitle1').css('background','#2c2c2c');
        $('.lefttitle2').css('background','#f60');
        $('.recommend').css('display','block');
        $('.typelist').css('display','none');
    });
    $('.accountcontent').on('mouseleave', function() {
        $('.triangle8').hide();
        $('.accountcontent').hide();
        $('.accounttxt').css('color','#868686');
        $('.triangle3').css('transform','rotate(0deg)');
    });
    $('#typelist2').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent2').css('display','block');
            $('.typecontent1').css('height','210px'); }, 50);
    });
    $('#typelist2').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent2').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent2').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent2').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent2').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist3').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent3').css('display','block');
            $('.typecontent1').css('height','154px'); }, 50);
    });
    $('#typelist3').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent3').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent3').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent3').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent3').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist4').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent4').css('display','block');
            $('.typecontent1').css('height','182px'); }, 50);
    });
    $('#typelist4').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent4').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent4').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent4').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent4').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist5').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent5').css('display','block');
            $('.typecontent1').css('height','168px'); }, 50);
    });
    $('#typelist5').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent5').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent5').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent5').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent5').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist6').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent6').css('display','block');
            $('.typecontent1').css('height','210px'); }, 50);
    });
    $('#typelist6').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent6').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent6').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent6').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent6').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist7').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent7').css('display','block');
            $('.typecontent1').css('height','210px'); }, 50);
    });
    $('#typelist7').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent7').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent7').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent7').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent7').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    $('#typelist8').on('mouseenter',function() {
        setTimeout(function() {
            $('.typecontent8').css('display','block');
            $('.typecontent1').css('height','196px'); }, 50);
    });
    $('#typelist8').on('mouseleave',function() {
        var timer = setTimeout(function() {
            $('.typecontent8').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
        $('.typecontent8').on('mouseenter', function() {
            clearTimeout(timer);
         });
    });
    $('.typecontent8').on('mouseleave',function() {
        setTimeout(function() {
            $('.typecontent8').css('display','none');
            $('.typecontent1').css('height','228px'); }, 50);
    });
    var cleantype = function() {
        $('.onlinetype1, .onlinetype2, .onlinetype3, .onlinetype4, .onlinetype5, .onlinetype6, .onlinetype7, .onlinetype8, .onlinetype9').css('background','#fff');
        $('.onlinetype1, .onlinetype2, .onlinetype3, .onlinetype4, .onlinetype5, .onlinetype6, .onlinetype7, .onlinetype8, .onlinetype9').css('color','#000');
        $('.onlinetype1, .onlinetype2, .onlinetype3, .onlinetype4, .onlinetype5, .onlinetype6, .onlinetype7, .onlinetype8, .onlinetype9').css('border','1px solid #d7d7d7');
    };
    $('.onlinetype1').on('click',function() {
        cleantype();
        $('.onlinetype1').css('background','#f60');
        $('.onlinetype1').css('color','#fff');
        $('.onlinetype1').css('border','1px solid #f60');
    });
    $('.onlinetype2').on('click',function() {
        cleantype();
        $('.onlinetype2').css('background','#f60');
        $('.onlinetype2').css('color','#fff');
        $('.onlinetype2').css('border','1px solid #f60');
    });
    $('.onlinetype3').on('click',function() {
        cleantype();
        $('.onlinetype3').css('background','#f60');
        $('.onlinetype3').css('color','#fff');
        $('.onlinetype3').css('border','1px solid #f60');
    });
    $('.onlinetype4').on('click',function() {
        cleantype();
        $('.onlinetype4').css('background','#f60');
        $('.onlinetype4').css('color','#fff');
        $('.onlinetype4').css('border','1px solid #f60');
    });
    $('.onlinetype5').on('click',function() {
        cleantype();
        $('.onlinetype5').css('background','#f60');
        $('.onlinetype5').css('color','#fff');
        $('.onlinetype5').css('border','1px solid #f60');
    });
    $('.onlinetype6').on('click',function() {
        cleantype();
        $('.onlinetype6').css('background','#f60');
        $('.onlinetype6').css('color','#fff');
        $('.onlinetype6').css('border','1px solid #f60');
    });
    $('.onlinetype7').on('click',function() {
        cleantype();
        $('.onlinetype7').css('background','#f60');
        $('.onlinetype7').css('color','#fff');
        $('.onlinetype7').css('border','1px solid #f60');
    });
    $('.onlinetype8').on('click',function() {
        cleantype();
        $('.onlinetype8').css('background','#f60');
        $('.onlinetype8').css('color','#fff');
        $('.onlinetype8').css('border','1px solid #f60');
    });
    $('.onlinetype9').on('click',function() {
        cleantype();
        $('.onlinetype9').css('background','#f60');
        $('.onlinetype9').css('color','#fff');
        $('.onlinetype9').css('border','1px solid #f60');
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
        $('.playicon').css('top','80%')
    });
    var cleanpage = function() {
        $('#page1, #page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9').css('color','#7f7f7f');
        $('#page1, #page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9').css('background','#f2f2f2');
        $('#page1, #page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9').css('border','1px solid #d5d5d5');
        $('#page2').text(2);
        $('#page3').text(3);
        $('#page4').text(4);
        $('#page5').text(5);
        $('#page6').text(6);
        $('#page7').text(7);
        $('#page8').text(8);
    };
    $('#page1').on('click',function() {
        cleanpage();
        $('#page1').css('color','#fff');
        $('#page1').css('background','#f70');
        $('#page1').css('border','1px solid #f70');
        $('#dot1').css('display','none');
        $('#dot2').css('display','inline-block');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).css('color','#fff');
            $(page).css('background','#f70');
            $(page).css('border','1px solid #f70');
            $('#dot1').css('display','none');
            $('#dot2').css('display','inline-block');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).css('color','#fff');
            $(page).css('background','#f70');
            $(page).css('border','1px solid #f70');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).css('color','#fff');
            $(page).css('background','#f70');
            $(page).css('border','1px solid #f70');
            $('#dot1').css('display','none');
            $('#dot2').css('display','inline-block');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num <= 5) {
            cleanpage();
            var page = '#page' +num;
            $(page).css('color','#fff');
            $(page).css('background','#f70');
            $(page).css('border','1px solid #f70');
            $('#dot1').css('display','none');
            $('#dot2').css('display','inline-block');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','none');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page6').css('color','#fff');
            $('#page6').css('background','#f70');
            $('#page6').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','none');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page7').css('color','#fff');
            $('#page7').css('background','#f70');
            $('#page7').css('border','1px solid #f70');
            $('#dot1').css('display','none');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','none');
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num >=31) {
            cleanpage();
            $('#page2').text(28);
            $('#page3').text(29);
            $('#page4').text(30);
            $('#page5').text(31);
            $('#page6').text(32);
            $('#page7').text(33);
            $('#page8').text(34);
            $('#page8').css('color','#fff');
            $('#page8').css('background','#f70');
            $('#page8').css('border','1px solid #f70');
            $('#dot1').css('display','none');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','none');
        };
    });
    $('#page9').on('click',function() {
        cleanpage();
        $('#page9').css('color','#fff');
        $('#page9').css('background','#f70');
        $('#page9').css('border','1px solid #f70');
        $('#page2').text(28);
        $('#page3').text(29);
        $('#page4').text(30);
        $('#page5').text(31);
        $('#page6').text(32);
        $('#page7').text(33);
        $('#page8').text(34);
        $('#dot1').css('display','inline-block');
        $('#dot2').css('display','none');
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
                $('#page5').css('color','#fff');
                $('#page5').css('background','#f70');
                $('#page5').css('border','1px solid #f70');
                $('#dot1').css('display','inline-block');
                $('#dot2').css('display','inline-block');
            } else if(num <= 5) {
                cleanpage();
                var page = '#page' +num;
                $(page).css('color','#fff');
                $(page).css('background','#f70');
                $(page).css('border','1px solid #f70');
                $('#dot1').css('display','none');
                $('#dot2').css('display','inline-block');
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
                $(page).css('color','#fff');
                $(page).css('background','#f70');
                $(page).css('border','1px solid #f70');
                $('#dot1').css('display','inline-block');
                $('#dot2').css('display','none');
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
                $('#page5').css('color','#fff');
                $('#page5').css('background','#f70');
                $('#page5').css('border','1px solid #f70');
                $('#dot1').css('display','inline-block');
                $('#dot2').css('display','inline-block');
            } else if(num <= 5) {
                cleanpage();
                var page = '#page' +num;
                $(page).css('color','#fff');
                $(page).css('background','#f70');
                $(page).css('border','1px solid #f70');
                $('#dot1').css('display','none');
                $('#dot2').css('display','inline-block');
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
                $(page).css('color','#fff');
                $(page).css('background','#f70');
                $(page).css('border','1px solid #f70');
                $('#dot1').css('display','inline-block');
                $('#dot2').css('display','none');
            };
        };
    });
    $('.jumpto').on('click',function() {
        var value = $('.jumppage').val();
        if (isNaN(value)) {
            $('.warning').css('display','block');
            setTimeout(function(){
                    $(".warning").css('display','none') }, 3000);
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
            $('#page5').css('color','#fff');
            $('#page5').css('background','#f70');
            $('#page5').css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','inline-block');
        } else if(num <= 5 && num >= 1) {
            cleanpage();
            var page = '#page' +num;
            $(page).css('color','#fff');
            $(page).css('background','#f70');
            $(page).css('border','1px solid #f70');
            $('#dot1').css('display','none');
            $('#dot2').css('display','inline-block');
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
            $(page).css('color','#fff');
            $(page).css('background','#f70');
            $(page).css('border','1px solid #f70');
            $('#dot1').css('display','inline-block');
            $('#dot2').css('display','none');
        } else {
            $('.warning').css('display','block');
            setTimeout(function(){
                    $(".warning").css('display','none') }, 3000);
        };
        $('.jumppage').val(""); 
    });
    $('.jumppage').bind('keypress',function(event){
        if(event.keyCode == "13") {
            var value = $('.jumppage').val();
            if (isNaN(value)) {
                $('.warning').css('display','block');
                setTimeout(function(){
                    $(".warning").css('display','none') }, 3000);
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
                $('#page5').css('color','#fff');
                $('#page5').css('background','#f70');
                $('#page5').css('border','1px solid #f70');
                $('#dot1').css('display','inline-block');
                $('#dot2').css('display','inline-block');
            } else if(num <= 5 && num >= 1) {
                cleanpage();
                var page = '#page' +num;
                $(page).css('color','#fff');
                $(page).css('background','#f70');
                $(page).css('border','1px solid #f70');
                $('#dot1').css('display','none');
                $('#dot2').css('display','inline-block');
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
                $(page).css('color','#fff');
                $(page).css('background','#f70');
                $(page).css('border','1px solid #f70');
                $('#dot1').css('display','inline-block');
                $('#dot2').css('display','none');
            } else {
                $('.warning').css('display','block');
                setTimeout(function(){
                    $(".warning").css('display','none') }, 3000);
            };
            $('.jumppage').val("");
        };
    });
});
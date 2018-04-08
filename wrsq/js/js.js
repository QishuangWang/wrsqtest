$(function () {
    $('#ios1').css("cursor", "pointer");
    $('#android1').css("cursor", "pointer");
    /*$('#ios1').mouseover(function () {
        $('#ios1').attr('src', './images/pro_banner_download_ios_selected.png');
        $('#android1').attr('src', './images/pro_banner_download_android_selected.png');
    });
    $('#android1').mouseover(function () {
        $('#android1').attr('src', './images/pro_banner_download_android.png');
        $('#ios1').attr('src', './images/pro_banner_download_ios.png');
    });
    */
})
$(function () {
    $('td span').addClass('color_ff5d');
    $('td span').mouseover(function () {
        $('td span').addClass('color_ff5d');
        $(this).removeClass('color_ff5d').addClass('bgcolor_ff5d31');
        $(this).click(function () {
            $('.recruit_main_table').hide();
            $('.recruit_main_table_details').show();
            $('.recruit_main_table_details ul li').click(function () {
                if ($(this).index() == 0) {

                } else {
                    $('.recruit_main_table').show();
                    $('.recruit_main_table_details').hide();
                }
            });
            $('.closeBtn').click(function () {
                $('.recruit_main_table').show();
                $('.recruit_main_table_details').hide();
            });
        })
        $(this).mouseleave(function () {
            $(this).removeClass('bgcolor_ff5d31').addClass('color_ff5d');
        })
    });
})
$(function () {
    var liCover = 1;
    $('.pro_pager_firstLi').mouseover(function () {
        var imgLeft1 = "./images/recruit_main_page_left.png";
        var imgLeft2 = "./images/recruit_main_page_left_selected.png"
        $('.pro_pager_firstLi img').attr('src', imgLeft2);
        $(this).mouseleave(function () {
            $('.pro_pager_firstLi img').attr('src', imgLeft1);
        });
    });
    $('.pro_pager_lastLi').mouseover(function () {
        var imgLeft1 = "./images/recruit_main_page_right.png";
        var imgLeft2 = "./images/recruit_main_page_right_selected.png"
        $('.pro_pager_lastLi img').attr('src', imgLeft2);
        $(this).mouseleave(function () {
            $('.pro_pager_lastLi img').attr('src', imgLeft1);
        });
    });
    $('.pro_pager_li').mouseover(function () {
        $(this).addClass('pro_pager_liOver');
        $('.pro_pager_li').click(function () {
            $('.pro_pager_li').removeClass('pro_pager_liClick');
            $(this).addClass('pro_pager_liClick');
            var index = $(this).index();
            $('.pro_pager p').text(function (i, origText) {
                var num = $('.pro_pager ul li').length - 2;
                return "第" + index + "页，共" + num + "页"
            });
            liCover = index;
        });
        $(this).mouseleave(function () {
            $(this).removeClass('pro_pager_liOver');
        });
    });
    $('.pro_pager p').text(function (i, origText) {
        var num = $('.pro_pager ul li').length - 2;
        return "第" + 1 + "页，共" + num + "页"
    });
    $('.prveBtn').click(function () {
        liCover--;
        $('.pro_pager_li').removeClass('pro_pager_liClick');
        $('.pro_pager p').text(function (i, origText) {
            var num = $('.pro_pager ul li').length - 2;
            if (liCover <= 1) {
                liCover = 1;               
            }
            return "第" + liCover + "页，共" + num + "页";
        });
        $('.pro_pager_li').eq(liCover - 1).addClass('pro_pager_liClick');
    })
    $('.nextBtn').click(function () {
        liCover++;
        $('.pro_pager_li').removeClass('pro_pager_liClick');
        $('.pro_pager p').text(function (i, origText) {
            var num = $('.pro_pager ul li').length - 2;
            if (liCover >= 3) {
                liCover = 3;                
            }
            return "第" + liCover + "页，共" + num + "页";
        });
        $('.pro_pager_li').eq(liCover-1).addClass('pro_pager_liClick');
    })
})

$(function() {
    $('.ul_head li').mousemove(function() {
        $(this).addClass('current').siblings().removeClass('current')
        var index = $(this).index()
        $('.act_two').eq(index).show().siblings().hide()
    })
})
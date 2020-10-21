window.addEventListener("load", function () {
    var open = document.querySelector('#open')
    var mask = document.querySelector('.mask')
    var bbox = document.querySelector('.b-box')
    var guan = document.querySelector('.xx')
    open.addEventListener('click', function () {
        bbox.style.display = 'block'
        mask.style.display = 'block'
    })
    guan.addEventListener('click', function () {
        bbox.style.display = 'none'
        mask.style.display = 'none'
    })
    // 影藏与显示
    // 左
    $('.activity').mouseover(function () {
        $('.hide').css('display', 'block')
    })

    $('.hide').mouseover(function () {
        $('.hide').css('display', 'block')
    })
    $('.hide').mouseout(function () {
        $('.hide').css('display', 'none')
    })
    $('.activity').mouseout(function () {
        $('.hide').css('display', 'none')
    })
    // 右
    $('#txx').mouseover(function () {
        $('.head_none').css('display', 'block')
    })
    $('.head_none').mouseover(function () {
        $('.head_none').css('display', 'block')
    })
    $('.head_none').mouseout(function () {
        $('.head_none').css('display', 'none')
    })

})



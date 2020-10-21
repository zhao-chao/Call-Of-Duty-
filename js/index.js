// 视频播放效果
$('#button').click(function () {
	$('video').get(0).play()
	$('.button1').css('opacity', '0')
	setTimeout(function () {
		$('audio').get(0).play()
	}, 2700)
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
// 导航

$('#header_nav').mouseover(function () {
	$('.nav_none').css('display', 'block')
})
$('.nav_none').mouseover(function () {
	$('.nav_none').css('display', 'block')
})
$('.nav_none').mouseout(function () {
	$('.nav_none').css('display', 'none')
})
$('#header_nav').mouseout(function () {
	$('.nav_none').css('display', 'none')
})
// 轮播图
jQuery('.hotspot').slide({
	titCell: '.bl a',
	mainCell: '.scroll',
	effect: 'left',
	autoPlay: true,
	easing: 'easeInOutCirc',
	delayTime: 300,
})
// tab切换
$('article .right .nav li').mouseover(function () {
	$(this).addClass('bianse').siblings().removeClass('bianse')
	var index = $(this).index()

	$('.bottom1').eq(index).show().siblings().hide()
})
// 显示于影藏
$('.ul_hide').hover(function () {
	$(this).find('.yingcang').toggle()
})

// 轮播图2
window.addEventListener('load', function () {
	var carousels = document.querySelectorAll('.carousel')

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i])
	}
})

function carousel(root) {
	var figure = root.querySelector('figure'),
		nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		theta = (2 * Math.PI) / n,
		currImage = 0

	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
	window.addEventListener('resize', function () {
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
	})

	setupNavigation()

	function setupCarousel(n, s) {
		var apothem = s / (2 * Math.tan(Math.PI / n))

		figure.style.transformOrigin = '50% 50% ' + -apothem + 'px'

		for (var i = 0; i < n; i++) {
			images[i].style.padding = gap + 'px'
		}
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px'
			images[i].style.transform = 'rotateY(' + i * theta + 'rad)'
		}
		if (bfc)
			for (i = 0; i < n; i++) {
				images[i].style.backfaceVisibility = 'hidden'
			}
		rotateCarousel(currImage)
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true)

		function onClick(e) {
			e.stopPropagation()

			var t = e.target
			if (t.tagName.toUpperCase() != 'BUTTON') return

			if (t.classList.contains('next')) {
				currImage++
			} else {
				currImage--
			}

			rotateCarousel(currImage)
		}
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)'
	}
}
// 返回顶部
$(function () {
	$(document).scrollTop(100)
	// 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
	// 页面滚动事件
	var boxTop = $('.xiazai').offset().top
	$(window).scroll(function () {
		// console.log(11);
		console.log($(document).scrollTop())
		if ($(document).scrollTop() >= boxTop) {
			$('.fanhui').fadeIn()
		} else {
			$('.fanhui').fadeOut()
		}
	})
	// 返回顶部
	$('.fanhui').click(function () {
		// $(document).scrollTop(0);
		$('body, html').stop().animate({
			scrollTop: 0,
		})
		// $(document).stop().animate({
		//     scrollTop: 0
		// }); 不能是文档而是 html和body元素做动画
	})
})

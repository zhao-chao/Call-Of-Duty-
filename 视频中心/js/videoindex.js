window.onload = function() {
    // 定义侧边栏
    var fixedbox = document.querySelector('.fixed')
        // 定义快速上手盒子
    var ksssbox = document.querySelector('.ksss')
        // 快速上手盒子到页面顶部得距离
    ksssboxtop = ksssbox.offsetTop
        // 侧边栏显示与隐藏
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= ksssboxtop) {
            fixedbox.style.display = 'block'
        } else(
            fixedbox.style.display = 'none'
        )
    })
    var ksssjs = document.querySelector('#ksss_js')
    var dstjjs = document.querySelector('#dstj_js')
    var jxspjs = document.querySelector('#jxsp_js')
    var qwjjjs = document.querySelector('#qwjj_js')
    var jcssjs = document.querySelector('#jcss_js')
    var smxzjs = document.querySelector('#smxz_js')

    ksssjs.addEventListener('click', function() {
        animate(window, ksssboxtop)
    })
    dstjjs.addEventListener('click', function() {
        animate(window, 1300)
    })
    jxspjs.addEventListener('click', function() {
        animate(window, 1800)
    })
    qwjjjs.addEventListener('click', function() {
        animate(window, 2400)
    })
    jcssjs.addEventListener('click', function() {
        animate(window, 2900)
    })
    smxzjs.addEventListener('click', function() {
        animate(window, 0)
    })

    function animate(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    //   登录框显示
    var dl = document.querySelector('.dl')
    var btn = document.querySelector('#dlbtn')
    var dlgb = document.querySelector('#dlgb')
    var zzc = document.querySelector('.zzc')
    console.log(zzc)
    btn.addEventListener('click', function() {
        dl.style.display = 'block'
        zzc.style.display = "block"

    })
    dlgb.addEventListener('click', function() {
        dl.style.display = 'none'
        zzc.style.display = "none"
    })
}
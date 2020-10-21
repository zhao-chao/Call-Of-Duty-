window.addEventListener("load", function() {
    var lis = document.querySelector('.two');
    var tp = document.querySelector('.latent');
    lis.addEventListener('mouseover', function() {
        lis.style.display = 'none';
        tp.style.display = 'block';

    })
    tp.addEventListener('mouseout', function() {
        tp.style.display = 'none';
        lis.style.display = 'block';
    });
    var TX = document.querySelector('#txyx')
    var hnone = document.querySelector('.head_none')
    TX.addEventListener('mouseover', function() {
        TX.style.visibility = 'hidden';
        hnone.style.display = 'block';
        hnone.onmouseover = function() {
            this.style.display = 'block'
            TX.style.visibility = 'hidden';
        }

    })
    hnone.addEventListener('mouseout', function() {
        hnone.style.display = 'none';
        TX.style.visibility = 'visible';
    })
    var nones = document.querySelector('.nav_none')
    var navs = document.querySelector('.nav')
    navs.addEventListener('mouseover', function() {
        nones.style.display = 'block';
    })
    nones.addEventListener('mouseout', function() {
        nones.style.display = 'none';
    });
    // 登录模块
    var dengl = document.querySelector('#dld')
    var login = document.querySelector('.login');
    var mask = document.querySelector('.login-bg');
    var closeBtn = document.querySelector('#closeBtn');
    var title = document.querySelector('#title');
    dengl.addEventListener('click', function() {
        login.style.display = 'block'
        mask.style.display = 'block'
    })
    closeBtn.addEventListener('click', function() {
        mask.style.display = 'none'
        login.style.display = 'none'
    })
    title.addEventListener('mousedown', function(e) {
            var x = e.pageX - login.offsetLeft
            var y = e.pageY - login.offsetTop
            document.addEventListener('mousemove', move)

            function move(e) {
                login.style.left = e.pageX - x + 'px'
                login.style.top = e.pageY - y + 'px'
            }
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', move);
            })
        })
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
})
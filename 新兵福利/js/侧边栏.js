var toap = document.querySelector('#kuiruo');
var one = document.querySelector('.huodong').offsetTop;
var two = document.querySelector('.lingqv').offsetTop;
var shere = document.querySelector('.boss').offsetTop;
var toapNew = document.querySelector('#renwu-box');

document.addEventListener('scroll', function () {
    // toapNew.style.display = 'block';
    if (window.pageYOffset <= one) {
        toap.value = '登录新手页面';
    } else if (window.pageYOffset <= two) {
        toap.value = '欢迎来到领取页面';
    } else if (window.pageYOffset <= shere) {
        toap.value = '充值活动页面 ';
    } else {
        toap.value = '扫码关注';
  }
})
var one = document.querySelector('.top-he').offsetTop;
var oneNew = document.querySelector('.top-he');
var nottxet = toap.getAttribute('value');
console.log(nottxet);
// console.log(one);

toapNew.addEventListener('click', function () {
    toap.onclick = function () {
        this.value = '';
        if (this.value = '') {
            window.pageYOffset === one;
        }
    }
    
  })






  

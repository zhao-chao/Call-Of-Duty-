// 枪械背包显示代码
var buttome = document.querySelector('.swiper-wrapper');
var beibasos = document.querySelector('.boss-beibao');
var beibao = document.querySelector('.boss-beibao img');
var imgk = document.querySelectorAll('.swiper-slide');
// console.log(img);

// // 显示与隐藏
for (var k = 0; k <= imgk.length; k++){ 
    // 点击获取事件来查询图片位置
        imgk[k].onclick = function () {
        var imgs = this.getAttribute('data-img')
            beibao.src = imgs;
            beibasos.style.display = "block";
        }

    buttome.addEventListener("mouseout", function () {
        beibasos.style.display = "none";
    });
}
// 获取盒子距离视野区的距离
// 获取改变内容盒子


// 判断是不是第一次访问
const firstVisit = localStorage.getItem("firstVisit");

if (!firstVisit) {
    localStorage.setItem("firstVisit", "true");
} else {
    document.body.classList.add("canSkip");
}

// 第二次进入可以点击跳过动画
document.addEventListener("click", () => {
    if (document.body.classList.contains("canSkip")) {
        document.body.classList.add("skip");
    }
});

// 页面切换翻页效果
document.querySelectorAll(".page-link").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.body.classList.add("page-flip");

        setTimeout(()=>{

            location.href=this.href;

        },850);

    });

});
let canSkip = false;

// 判断是不是第一次访问
const firstVisit = !localStorage.getItem("firstVisit");

if (firstVisit) {
    localStorage.setItem("firstVisit", "true");
} else {
    document.body.classList.add("canSkip");
}

// 第一次必须播放完整动画
if (firstVisit) {
    setTimeout(() => {
        canSkip = true;
    }, 4000); // 改成你的首页动画时长
} else {
    // 第二次进入立即允许跳过
    canSkip = true;
}

// 点击空白跳过动画
document.addEventListener("click", (e) => {
    if (e.target.closest(".page-link")) return;

    if (
        document.body.classList.contains("canSkip") &&
        canSkip
    ) {
        document.body.classList.add("skip");
    }
});

// 页面跳转
document.querySelectorAll(".page-link").forEach(link => {
    link.addEventListener("click", function() {
        location.href = this.href;
    });
});
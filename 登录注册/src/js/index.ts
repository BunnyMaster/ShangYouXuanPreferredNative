import goodData from "./data.js";

window.addEventListener("load", () => {
    var Home = new HomeFun();
    Home.AppenNodes();
    Home.MangifyingGlass();
})

class HomeFun {
    constructor() {

    }
    // 添加子元素
    AppenNodes() {
        var navPath: HTMLDivElement = document.querySelector("#navPath");
        var path = goodData.path;
        for (let i = 0; i < path.length; i++) {
            if (i == path.length - 1) {
                // 创建a标签
                var aNode: HTMLAnchorElement = document.createElement("a");
                aNode.innerHTML = path[i].title
                navPath.append(aNode)
            } else {
                // 创建a标签
                var aNode: HTMLAnchorElement = document.createElement("a");
                aNode.href = path[i].url
                aNode.innerHTML = path[i].title
                navPath.append(aNode)
                // 创建i标签
                let iNode: HTMLElement = document.createElement("i")
                iNode.innerText = "/"
                // 追加navPath元素
                navPath.append(iNode)
            }
        }
    }
    // 放大镜
    MangifyingGlass() {
        var mask: HTMLDivElement = document.querySelector("#mask");
        var even: HTMLDivElement = document.querySelector("#even");
        var bigPic: HTMLDivElement = document.querySelector("#bigPic img")
        var smallPic: HTMLDivElement = document.querySelector("#smallPic")

    }
}
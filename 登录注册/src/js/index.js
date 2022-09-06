class HomeFun {
    PrevAndNextprev;
    PrevAndNextnext;
    PrevAndNextLi;
    picListUl;
    goodDataDetail;
    rightTop;
    chooseWarp;
    listWarpMiddle;
    constructor() {
        this.PrevAndNextprev = document.querySelector(".prev")
        this.PrevAndNextnext = document.querySelector(".next")
        this.picListUl = document.querySelector("#picList ul")
        this.goodDataDetail = goodData.goodsDetail
        this.rightTop = document.querySelector(".rightTop")
        this.chooseWarp = document.querySelector(".chooseWarp")
        this.listWarpMiddle = document.querySelector(".middle")
    }
    // 添加子元素
    AppenNodes() {
        var navPath = document.querySelector("#navPath");
        var path = goodData.path;
        for (let i = 0; i < path.length; i++) {
            if (i == path.length - 1) {
                // 创建a标签
                var aNode = document.createElement("a");
                aNode.innerHTML = path[i].title
                navPath.append(aNode)
            } else {
                // 创建a标签
                var aNode = document.createElement("a");
                aNode.href = path[i].url
                aNode.innerHTML = path[i].title
                navPath.append(aNode)
                // 创建i标签
                let iNode = document.createElement("i")
                iNode.innerText = "/"
                // 追加navPath元素
                navPath.append(iNode)
            }
        }
    }
    // 放大镜
    MangifyingGlass() {
        var mask = document.querySelector("#mask");
        var even = document.querySelector("#event");
        var bigPic = document.querySelector("#bigPic img")
        var big = document.querySelector("#bigPic")
        var smallPic = document.querySelector("#smallPic")
        even.addEventListener("mouseenter", () => {
            mask.style.display = "block"
            big.style.display = "block"
        });
        even.addEventListener("mousemove", (e) => {
            let x = e.offsetX - mask.offsetWidth / 2;
            let y = e.offsetY - mask.offsetHeight / 2;
            if (x <= 0) x = 0;
            if (x >= smallPic.offsetWidth - mask.offsetWidth) x = smallPic.offsetWidth - mask.offsetWidth
            if (y <= 0) y = 0;
            if (y >= smallPic.offsetHeight - mask.offsetHeight) y = smallPic.offsetHeight - mask.offsetHeight
            mask.style.left = x + "px"
            mask.style.top = y + "px"
            // 大图
            bigPic.style.left = -2 * x + "px"
            bigPic.style.top = -2 * y + "px"
        })
        even.addEventListener("mouseleave", () => {
            mask.style.display = "none"
            big.style.display = "none"
        });

    }
    // 动态渲染缩略 图
    ThumbnaiData() {
        var imagesSrc = goodData.imagessrc
        imagesSrc.forEach(item => this.picListUl.innerHTML += `<li><img src=${item.s}></li>`);
    }
    // 点击缩略图切换
    ClickThumbnaiChange() {
        var smallPic = document.querySelector("#smallPic img")
        var bigPic = document.querySelector("#bigPic img")
        var picListUl = document.querySelectorAll("#picList ul li img")
        picListUl.forEach(item => {
            item.addEventListener("click", () => {
                smallPic.src = item.src
                bigPic.src = item.src
            })
        })
    }
    // 获取箭头函数
    PrevAndNext() {
        this.PrevAndNextLi = document.querySelectorAll("#picList ul li")
        var AllWidth = document.querySelector("#picList ul");
        var LiWidth = document.querySelectorAll("#picList ul li")
        var setp = (LiWidth[0].offsetWidth + 40) * 2;
        var start = 0;
        var endPostion = (LiWidth.length - 4) * (LiWidth[0].offsetWidth + 40)
        this.PrevAndNextprev.addEventListener("click", () => {
            start += setp
            this.picListUl.style.left = start + "px"
            setTimeout(() => {
                if (start >= (LiWidth[0].offsetWidth + 40) * 2) {
                    start = 0;
                    setp = (LiWidth[0].offsetWidth + 40) * 2;
                    this.picListUl.style.left = 0
                }
            }, 500)
        });
        this.PrevAndNextnext.addEventListener("click", () => {
            start -= setp
            this.picListUl.style.left = start + "px"
            setTimeout(() => {
                if (start <= -endPostion) {
                    start = -endPostion
                    this.picListUl.style.left = -endPostion + "px"
                }
            }, 500)
        });
    }
    // 右侧顶部数据
    RightTopData() {
        // 动态添加 详情列表参数
        var detail = this.goodDataDetail
        var s = `
        <h3>${detail.title}</h3>
        <p>${detail.recommend}</p>
        <div class="priceWrap">
            <div class="priceTop">
                <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <div class="price">
                    <span>￥</span>
                    <p>${detail.price}</p>
                    <i>降价通知</i>
                </div>
                <p>
                    <span>累计评价</span>
                    <span>670000</span>
                </p>
            </div>
            <div class="priceBottom">
                <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <p>
                    <span>${detail.promoteSales.type}</span>
                    <span>${detail.promoteSales.content}</span>
                </p>
            </div>
        </div>
        <div class="support">
            <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
            <p>${detail.support}</p>
        </div>
        <div class="address">
            <span>配&nbsp;送&nbsp;至</span>
            <p>${detail.address}</p>
        </div>
        `;
        this.rightTop.innerHTML = s;
        var crumbData = this.goodDataDetail.crumbData;
        var crumbDatastr = ""
        var Data = ""
        crumbData.forEach((item) => {
            Data = ""
            item.data.forEach((data, index) => {
                index === 0 ? Data += `<dd data="${data.changePrice}" class="active">${data.type}</dd>` : Data += `<dd data="${data.changePrice}" >${data.type}</dd>`
            })
            crumbDatastr += ` <dl><dt >${item.title}</dt>${Data} </dl>`
        })
        this.chooseWarp.innerHTML = crumbDatastr
    }
    // 右侧数据点击
    clickBind() {
        var dlNodes = document.querySelectorAll(".chooseWarp dl");
        var price = document.querySelector(".price p");
        var ShowItem = document.querySelector(".ShowItem ul")
        var baseprice = price.innerHTML
        var ShowItemList = new Array(dlNodes.length);
        var priceList = new Array(dlNodes.length);
        /**
         * 循环遍历dl中的元素
         * 当前获取的是dl中的，还要获取子元素dd的节点，再去遍历
         * */
        dlNodes.forEach((item, index) => {
            var dd = item.querySelectorAll("dd");
            dd.forEach((ddItem, ddIndex) => {
                var ddPrice = ddItem.getAttribute("data")
                // 绑定点击事件---以下都是
                ddItem.addEventListener("click", () => {
                    // #region 排它思想 
                    dd.forEach(item => {
                        item.className = "none"
                        price.innerHTML = baseprice
                    })
                    ddItem.className = "active"
                    // #endregion 排他思想结束 

                    // #region 将主页面上的值加上点击的值
                    price.innerHTML = parseInt(price.innerHTML) + parseInt(ddPrice)
                    ShowItemList[index] = ddItem.innerHTML
                    // #endregion

                    // #region 之后将每次渲染的值，添加到上方的区域，每次添加后会有一个数组，这个数组需要清空，并且在ul标签中
                    // 如果不清空之后遍历时会有遗留
                    ShowItem.innerHTML = ""
                    for (let i = 0; i < ShowItemList.length; i++) {
                        if (ShowItemList[i] === 0 || ShowItemList[i] === undefined) continue;
                        ShowItem.innerHTML += `<li price="${price.innerHTML}">${ShowItemList[i]}<i index="${i}">×</i></li>`
                    }
                    // #endregion

                    priceList[ddIndex] = parseInt(ddPrice); // 将点击的这次值放在定义价钱的数组中和获取dl标签一样

                    //  #region 之后获取上方每个ul中商品的值，为每个标签添加点击事件
                    // 在此中清除数组，但是并不会刷新，因为只是数组改变了，但是页面并没有改变，所以要手动将页面中的值改变
                    // 首先要移出类名，手动移除，之后将价格再改变
                    var ShowItemI = document.querySelectorAll(".ShowItem ul i");
                    ShowItemI.forEach((i) => { // 遍历这些属性值绑定点击事件
                        i.addEventListener("click", () => {
                            var idx1 = i.getAttribute("index")
                            ShowItemList[idx1] = 0
                            var dist = dlNodes[idx1].querySelectorAll("dd")

                            dist.forEach(ddlist => {
                                ddlist.className = ""
                            })
                            dist[0].className = "active";
                            // 移出这个元素的父类元素
                            ShowItem.removeChild(i.parentNode);
                            // 改变价格
                            price.innerHTML = parseInt(price.innerHTML) - parseInt(priceList[ddIndex]);
                        })
                    })
                })
            })
        });

    }
    // 选择搭配中间区域复选框中套餐效果
    ChoosePrice() {
        var listWarpMiddle = this.listWarpMiddle.querySelectorAll("li input")
        var RightIPrice = document.querySelector(".listWarp .right i");
        var listWarp = document.querySelectorAll("#content > div > div.goodDetailWarp > div > div > div > ul > li > div > span");
        var Sapnlist = new Array(listWarp.length);
        var sum = 0;
        var startsum = parseInt(RightIPrice.innerText.split("￥")[1]);

        listWarp.forEach(span => Sapnlist.fill(span.innerHTML));
        listWarpMiddle.forEach((LiCheck, LiIndex) => {
            LiCheck.addEventListener("click", () => {
                if (LiCheck.checked) {
                    sum += parseInt(Sapnlist[LiIndex])
                }
                if (!LiCheck.checked) {
                    sum -= parseInt(Sapnlist[LiIndex])
                }
                RightIPrice.innerHTML = startsum + sum
            })
        });
    }
    // 公共选项卡函数
    Tab(tabBtns, TabCounts) {
        tabBtns.forEach((btns, btnsIndex) => {
            btns.index = btnsIndex;
            btns.addEventListener("click", () => {
                tabBtns.forEach((item, index) => {
                    tabBtns[index].className = "";
                    TabCounts[index].className = "";
                })
                btns.className = "active";
                TabCounts[btnsIndex].className = "active";
            })
        })
    }
    // 点击左侧
    LeftTab() {
        var asideTop = document.querySelectorAll(".asideTop h4");
        this.Tab(asideTop, asideTop)
    }
    RightTab() {
        var BottomDtrtail = document.querySelectorAll(".BottomDtrtail .tabBtns li");
        var tabContents = document.querySelectorAll(".BottomDtrtail .tabContents div");
        this.Tab(BottomDtrtail, tabContents)
    }
    // 右侧点击效果
    rightAsideBind() {
        var btnsClose = document.querySelector(".btnsClose"); //按钮元素
        var asideClose = document.querySelector(".asideClose");
        var flag = false;
        // asideClose
        // asideOpen
        console.log(btnsClose);
        btnsClose.addEventListener("click", () => {
            console.log(btnsClose, flag);
            flag = !flag;
            if (flag) {
                btnsClose.className = "btns btnsOpen"
                asideClose.className = "rightAside asideOpen"
            }
            if (!flag) {
                btnsClose.className = "btns btnsClose"
                asideClose.className = "rightAside asideClose"
            }
        })
    }
}


var goodData = goodData;
var Home = new HomeFun();

window.addEventListener("load", () => {
    Home.AppenNodes();
    Home.MangifyingGlass();
    Home.ThumbnaiData();
    Home.ClickThumbnaiChange();
    Home.PrevAndNext();
    Home.RightTopData();
    Home.clickBind();
    Home.ChoosePrice();
    Home.LeftTab();
    Home.RightTab();
    Home.rightAsideBind();
})
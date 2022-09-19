<template>
  <!-- 内容区域开始 -->
  <div id="content">
    <!-- 版心元素 -->
    <div class="contMain">
      <!-- 路径导航 -->
      <div id="navPath"></div>
      <!-- 路径导航结束 -->
      <!-- 放大镜效果开始 -->
      <div id="center">
        <!-- 左侧放大镜开始 -->
        <div id="left">
          <!-- 上面 -->
          <LeftTop />
          <!-- 下面 -->
          <LeftBottom />
        </div>
        <!-- 左侧放大镜结束 -->
        <!--右侧商品详情区域开始-->
        <div class="right">
          <!--商品详情数据结构开始-->
          <RightTop />
          <!--商品详情数据结构结束-->
          <!--商品参数数据结构开始-->
          <div class="rightBottom">
            <!-- 商品参数的选择区域开始 -->
            <ShowItem />
            <!-- 商品参数的选择区域结束 -->
            <!-- 选择结果之后的数据开始 -->
            <ChooseWarp />
            <!-- 选择结果之后的数据结束 -->
            <!-- 加入购物车以及数据区域开始 -->
            <div class="addCart">
              <div class="count">
                <input type="text" />
                <a href="JavaScript:;">+</a>
                <a href="JavaScript:;">-</a>
              </div>
              <button>加入购物车</button>
            </div>
            <!-- 加入购物车以及数据区域结束 -->
          </div>
        </div>
        <!--右侧商品详情区域结束-->
        <!-- 放大镜效果结束 -->
      </div>
      <!-- 左侧侧边栏开始 -->
      <div class="goodDetailWarp">
        <aside class="leftAside">
          <!-- 上边 -->
          <div class="asideTop">
            <h4 class="active">相关分类</h4>
            <h4>推荐品牌</h4>
          </div>
          <!-- 下边 -->
          <div class="asideContent">
            <div class="active">
              <ul class="goodslist1">
                <li>手机</li>
                <li>手机壳</li>
                <li>内存卡</li>
                <li>iphone配件</li>
                <li>贴膜</li>
                <li>手机耳机</li>
                <li>移动电源</li>
                <li>平板电脑</li>
              </ul>
              <ul class="goodslist2">
                <li>
                  <img src="@/assets/images/part01.png" alt="" />
                  <span>Apple苹果iPhone 6s (A1699)</span>
                  <p>¥6088.00</p>
                  <div class="button">
                    <a href="javascript:;">加入购物车</a>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/part01.png" alt="" />
                  <span>Apple苹果iPhone 6s (A1699)</span>
                  <p>¥6088.00</p>
                  <div class="button">
                    <a href="javascript:;">加入购物车</a>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/part01.png" alt="" />
                  <span>Apple苹果iPhone 6s (A1699)</span>
                  <p>¥6088.00</p>
                  <div class="button">
                    <a href="javascript:;">加入购物车</a>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/part01.png" alt="" />
                  <span>Apple苹果iPhone 6s (A1699)</span>
                  <p>¥6088.00</p>
                  <div class="button">
                    <a href="javascript:;">加入购物车</a>
                  </div>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </aside>
        <div class="rightDetail">
          <!-- 选择搭配开始 -->
          <div class="chooseBox">
            <h4>选择搭配</h4>
            <div class="listWarp">
              <div class="left">
                <img src="@/assets/images/l-m01.png" alt="" />
                <p>￥5299</p>
                <i>+</i>
              </div>
              <!-- 中间 -->
              <ul class="middle">
                <li>
                  <img src="@/assets/images/dp01.png" alt="" />
                  <span>Feless费雷思VR</span>
                  <div>
                    <input type="checkbox" />
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/dp01.png" alt="" />
                  <span>Feless费雷思VR</span>
                  <div>
                    <input type="checkbox" />
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/dp01.png" alt="" />
                  <span>Feless费雷思VR</span>
                  <div>
                    <input type="checkbox" />
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/dp01.png" alt="" />
                  <span>Feless费雷思VR</span>
                  <div>
                    <input type="checkbox" />
                    <span>50</span>
                  </div>
                </li>
              </ul>
              <div class="right">
                <div>已购0件商品</div>
                <p>套餐价</p>
                <i>￥5299</i>
                <div>
                  <button>加入购物车</button>
                </div>
              </div>
            </div>
          </div>
          <!-- 选择搭配结束 -->
          <!-- 选项卡开始 -->
          <div class="BottomDtrtail">
            <!-- 菜单 -->
            <ul class="tabBtns">
              <li class="active"><a href="javascript:;">商品介绍</a></li>
              <li><a href="javascript:;">规格包装</a></li>
              <li><a href="javascript:;">售后与保障</a></li>
              <li><a href="javascript:;">商品评价</a></li>
              <li><a href="javascript:;">手机社区</a></li>
            </ul>
            <div class="tabContents">
              <div class="active">
                <ul>
                  <li>分辨率：1920*1080(FHD)</li>
                  <li>后置摄像头：1200万像素</li>
                  <li>前置摄像头：500万像素</li>
                  <li>核 数：其他</li>
                  <li>频 率：以官网信息为准</li>
                  <li>品牌： Apple</li>
                  <li>商品名称：APPLEiPhone 6s Plus</li>
                  <li>商品编号：1861098</li>
                  <li>商品产地：中国大陆</li>
                  <li>商品毛重：0.51kg</li>
                  <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                  <li>系统：苹果（IOS）</li>
                  <li>像素：1000-1600万品毛重：0.51kg</li>
                  <li>机身内存：64GB</li>
                </ul>
                <img src="@/assets/images/intro01.png" alt="" />
                <img src="@/assets/images/intro02.png" alt="" />
                <img src="@/assets/images/intro03.png" alt="" />
              </div>
              <div>规格包装</div>
              <div>售后与保障</div>
              <div>商品评价</div>
              <div>手机社区</div>
            </div>
          </div>
          <!-- 选项卡结束 -->
        </div>
      </div>
    </div>
    <!-- 内容区域结束 -->
  </div>
  <!-- 右侧侧边栏结束 -->
</template>

<script setup lang="ts">
import PicList from "@/views/Detail/Zoom/children/picList.vue";
import LeftTop from "@/views/Detail/Zoom/children/LeftTop.vue";
import LeftBottom from "@/views/Detail/Zoom/children/leftBottom.vue";
import RightTop from "@/views/Detail/Zoom/children/RightTop.vue";
import ShowItem from "@/views/Detail/Zoom/children/ShowItem.vue";
import ChooseWarp from "@/views/Detail/Zoom/children/ChooseWarp.vue";
</script>

<style lang="less">
// 内容区域开始
#content {
  .contMain {
    width: 1200px;
    margin: 15px auto 0 auto;
    // font-size: 0;

    // 路径导航
    #navPath {
      padding: 9px 15px 9px 0;

      a {
        font-size: 12px;
      }

      i {
        font-size: 12px;
        padding: 0 5px;
      }
    }

    // 中间区域
    #center {
      margin: 5px 0 15px;
      .clearfix();

      // 左侧放大镜开始
      #left {
        width: 400px;
        float: left;

        // 左侧上面
        #leftTop {
          position: relative;

          // 小图
          #smallPic {
            width: 400px;
            height: 400px;
            border: 1px solid #fdfdfd;

            img {
              width: 100%;
              height: 100%;
            }
          }

          #event {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            // background-color: #e1251b;
            z-index: 998;
          }

          #mask {
            width: 200px;
            height: 200px;
            background-color: rgba(0, 255, 0, 0.3);
            position: absolute;
            left: 0;
            top: 0;
            display: none;
          }

          // 大图
          #bigPic {
            width: 400px;
            height: 400px;
            border: 1px solid #ddd;
            left: 420px;
            top: 0;
            position: absolute;
            overflow: hidden;
            display: none;

            img {
              position: absolute;
              width: 800px;
              height: 800px;
            }
          }
        }

        // 左侧下面
        #leftBottom {
          width: 400px;
          margin-top: 5px;
          overflow: hidden;

          a {
            float: left;
            width: 10px;
            height: 54px;
            border: 1px solid #ccc;
            background: #ebebeb;
            color: #333;
            font-size: 10px;
            text-align: center;
            line-height: 54px;
            z-index: 999;
          }

          #picList {
            position: relative;
            width: 372px;
            height: 56px;
            float: left;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: space-around;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;

            ul {
              position: absolute;
              left: 0;
              top: 0;
              flex: 1;
              display: flex;
              flex-wrap: nowrap;
              font-size: 0;
              transition: all 0.5s linear;
              overflow: hidden;

              li {
                display: inline-block;
                width: 50px;
                height: 50px;
                border: 1px solid #ccc;
                margin: 0 20px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }

      //右侧商品详情区域开始
      .right {
        width: 700px;
        float: right;

        //商品详情数据结构开始
        .rightTop {
          h3 {
            font-size: 14px;
            line-height: 21px;
            margin-top: 15px;
          }

          > p {
            color: #e12228;
            margin-top: 15px;
          }

          .priceWrap {
            margin-top: 10px;
            line-height: 28px;
            background: #fee9ec;
            padding: 7px;

            .priceTop {
              .clearfix();

              //价格
              > span {
                margin-right: 15px;
                float: left;
              }

              //中间
              .price {
                float: left;
                color: #cc1122;

                > span {
                  font-size: 16px;
                  float: left;
                }

                p {
                  font-size: 24px;
                  float: left;
                  font-weight: bold;
                }

                i {
                  font-size: 12px;
                  color: #cc1122;
                  float: left;
                }
              }

              //累积评价
              > p {
                float: right;

                > span {
                }
              }
            }

            .priceBottom {
              .clearfix();

              //促销
              > span {
                float: left;
                margin-right: 15px;
              }

              //加价购
              p {
                width: 520px;
                line-height: 28px;
                float: left;

                > span {
                  color: #999;

                  //加价购
                  &:first-child {
                    background: #c81623;
                    padding: 3px;
                    color: #fff;
                  }
                }
              }
            }
          }

          .support {
            margin-top: 10px;
            line-height: 28px;
            .clearfix();

            > span {
              margin-right: 15px;
              float: left;
            }

            > p {
              float: left;
              color: #999;
            }
          }

          .address {
            border-bottom: 1px solid #ededed;
            padding-bottom: 5px;
            line-height: 28px;
            margin-top: 10px;
            .clearfix();

            > span {
              margin-right: 15px;
              float: left;
            }

            > p {
              float: left;
              color: #999;
            }
          }
        }

        //商品详情数据结构结束

        // 商品参数数据结构开始
        .rightBottom {
          margin-top: 10px;
          line-height: 28px;

          .ShowItem {
            .clearfix();

            li {
              float: left;
              position: relative;
              padding: 5px;
              height: 30px;
              text-align: center;
              line-height: 30px;
              border: 1px solid #cc1122;
              margin-right: 20px;

              i {
                position: absolute;
                width: 15px;
                height: 15px;
                right: -7px;
                top: -8px;
                cursor: pointer;
                text-align: center;
                line-height: 15px;
                border-radius: 15px;
                background-color: #e1251b6f;
                color: #666;
                font-size: 18px;

                &:hover {
                  color: #c81623;
                }
              }
            }
          }

          .chooseWarp {
            .active {
              color: #c81623;
            }

            dl {
              margin: 13px 0;
              .clearfix();

              dt {
                float: left;
                margin-right: 15px;
              }

              dd {
                float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border: 1px solid #ccc;
                border-top: 1px solid #bbb;
                border-bottom: 1px solid #bbb;
                cursor: pointer;

                // &:first-of-type  {
                //     color: #cc1122;
                // }

                &:hover {
                  color: #cc1122;
                }
              }
            }
          }

          // 添加购物车开始
          .addCart {
            .count {
              position: relative;
              float: left;
              width: 55px;
              margin-right: 15px;

              input {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
                text-align: center;
                text-indent: 5px;
              }

              a {
                position: absolute;
                right: 1px;
                width: 15px;
                height: 19px;
                box-sizing: border-box;
                color: #555;
                background-color: #f1f1f1;
                text-align: center;
                line-height: 18px;
                border: 1px solid #ddd;

                &:first-child {
                  top: 0;
                }

                &:last-child {
                  top: 20px;
                }
              }
            }

            button {
              float: left;
              height: 36px;
              font-size: 16px;
              background-color: #e1251b;
              padding-left: 25px;
              padding-right: 25px;
              color: #fff;
              border: none;
              cursor: pointer;

              &:hover {
                background-color: #ea4a36;
              }
            }
          }

          // 添加购物车结束
        }

        // 商品参数数据结构结束
      }
    }

    // 左侧侧边栏开始
    .goodDetailWarp {
      width: 1200px;
      margin: 10px auto 0;
      .clearfix();

      // 左边
      .leftAside {
        width: 210px;
        border: 1px solid #ccc;
        .clearfix();
        float: left;

        // 上边
        .asideTop {
          box-sizing: border-box;
          .clearfix();

          h4 {
            float: left;
            box-sizing: border-box;
            width: 105px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background-color: #fff;
            border-top: 3px solid #fff;
            border-bottom: 1px solid #ccc;

            &:first-child {
              border-right: 1px solid #ccc;
            }
          }

          .active {
            border-top: 3px solid #e1251b;
            width: 105px;
            text-align: center;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
          }
        }

        // 下边
        .asideContent {
          padding: 10px;

          div {
            .goodslist1 {
              li {
                float: left;
                width: 50%;
                border-bottom: 1px dashed #ededed;
                line-height: 28px;
              }
            }

            .goodslist2 {
              margin: 5px 0 15px;

              li {
                border-bottom: 1px solid #ededed;

                img {
                  width: 152px;
                }

                span {
                }

                p {
                  font-size: 16px;
                  color: #c81623;
                }

                .button {
                  width: 152px;
                  margin-top: 5px;
                  margin-bottom: 5px;
                  text-align: center;
                }

                a {
                  color: #fff;
                  padding: 2px 14px;
                  line-height: 18px;
                  border: 1px solid #8c8c8c;
                  background-color: #cc1122;

                  &:hover {
                    background-color: #e1251b;
                    color: #fff !important;
                    text-decoration: none !important;
                  }
                }
              }
            }

            .active {
            }
          }
        }
      }

      // 右边
      .rightDetail {
        width: 980px;
        float: left;
        margin-left: 8px;

        // 选择搭配开始
        .chooseBox {
          border: 1px solid #ddd;
          margin-bottom: 15px;

          // 标题
          h4 {
            border-bottom: 1px solid #ddd;
            background-color: #f1f1f1;
            color: #333;
            padding: 5px 0 5px 15px;
          }

          .listWarp {
            height: 170px;
            padding-top: 10px;

            .left {
              position: relative;
              width: 127px;
              height: 165px;
              float: left;
              text-align: center;

              img {
                width: 87px;
                margin: 0 auto;
              }

              p {
                color: #c81623;
                font-size: 16px;
              }

              i {
                position: absolute;
                top: 48px;
                right: -25px;
                font-size: 16px;
              }
            }

            .middle {
              width: 668px;
              height: 165px;
              float: left;
              text-align: center;

              li {
                float: left;
                width: 127px;
                margin-left: 20px;
                margin-right: 20px;

                img {
                  width: 120px;
                  height: 130px;
                }

                > span {
                }

                div {
                  input {
                  }

                  span {
                  }
                }
              }
            }

            .right {
              border-left: 1px solid #ddd;
              float: left;
              width: 153px;
              height: 165px;
              margin-left: 20px;
              text-align: center;

              div {
                margin-top: 10px;
                margin-bottom: 10px;
              }

              p {
                font-weight: bold;
                margin-bottom: 10px;
              }

              i {
                color: #b1191a;
                font-size: 16px;
                margin-bottom: 10px;
              }

              button {
                padding: 10px 25px;
                font-size: 16px;
                color: #fff;
                background-color: #e1251b;
                border: none;

                &:hover {
                  background-color: #b1191a;
                  cursor: pointer;
                }
              }
            }
          }
        }

        // 选项卡开始
        .BottomDtrtail {
          .tabBtns {
            background-color: #ededed;
            .clearfix();

            li {
              float: left;
              box-sizing: border-box;
              border: 1px solid #ddd;
              border-left: none;
              background-color: #fff;
              height: 40px;
              padding-left: 11px;
              padding-right: 11px;
              text-align: center;
              line-height: 40px;

              &.active {
                background-color: #cc1122;

                a {
                  color: #fff;
                }

                cursor: pointer;
              }

              &:hover {
                background: #e12228;
                cursor: pointer;

                a {
                  color: #fff;
                }
              }

              &:first-child {
                border-left: 1px solid #ddd;
              }
            }
          }

          .tabContents {
            div {
              padding-left: 20px;
              line-height: 25px;
              display: none;

              &.active {
                margin: 10px 0;
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>

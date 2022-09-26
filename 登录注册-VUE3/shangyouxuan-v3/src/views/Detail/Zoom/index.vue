<template>
  <!-- 内容区域开始 -->
  <div id="content">
    <!-- 版心元素 -->
    <div class="contMain">
      <!-- 路径导航 -->
      <div id="navPath"><NavPath /></div>
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
                <input
                  type="text"
                  v-model="ZoomData.addCartNum"
                  @input="ZoomFun.InputNum(ZoomData.addCartNum)"
                />
                <a href="JavaScript:;" @click="ZoomData.addCartNum++">+</a>
                <a
                  href="JavaScript:;"
                  @click="
                    ZoomData.addCartNum <= 1
                      ? (ZoomData.addCartNum = 1)
                      : ZoomData.addCartNum--
                  "
                  >-</a
                >
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
          <AsideContent />
        </aside>
        <div class="rightDetail">
          <!-- 选择搭配开始 -->
          <ChooseBox />

          <!-- 选择搭配结束 -->
          <!-- 选项卡开始 -->
          <div class="BottomDtrtail">
            <!-- 菜单 -->
            <BottomDtrtail />
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
import LeftTop from "@/views/Detail/Zoom/children/LeftTop.vue";
import LeftBottom from "@/views/Detail/Zoom/children/leftBottom.vue";
import RightTop from "@/views/Detail/Zoom/children/RightTop.vue";
import ShowItem from "@/views/Detail/Zoom/children/ShowItem.vue";
import ChooseWarp from "@/views/Detail/Zoom/children/ChooseWarp.vue";
import AsideContent from "@/views/Detail/Zoom/children/AsideContent.vue";
import ChooseBox from "@/views/Detail/Zoom/children/ChooseBox.vue";
import BottomDtrtail from "@/views/Detail/Zoom/children/BottomDtrtail.vue";
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import NavPath from "@/views/Detail/Zoom/children/NavPath.vue";
const ZoomData = reactive({
  addCartNum: 1,
  addCartNumSave: 1,
  addCartNumTimer: 3,
});
const ZoomFun = reactive({
  //加入购物车输入检测
  InputNum(addCartValue: any) {
    const inputNum = /^\d{1,6}$/;
    if (inputNum.test(addCartValue)) {
      ZoomData.addCartNum = addCartValue;
      ZoomData.addCartNumSave = addCartValue;
    } else {
      ElMessage.closeAll();
      ZoomData.addCartNum = ZoomData.addCartNumSave;
      ElMessage({
        showClose: true,
        message: "输入不合法",
        type: "warning",
        center: true,
      });
    }
  },
});
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

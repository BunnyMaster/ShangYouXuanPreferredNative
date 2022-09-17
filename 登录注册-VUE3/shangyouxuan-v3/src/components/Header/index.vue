<template>
  <!-- 头部 -->
  <header id="header">
    <!-- 上面部分 -->
    <div class="headerTop">
      <!-- 版心元素 -->
      <div class="headTopMain">
        <!-- 左侧 -->
        <div class="left">
          <h5>欢迎来到商优选！请</h5>
          <p>
            <a href="JavaScript:;">登录</a>
            <a href="JavaScript:;">注册</a>
          </p>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <nav>
            <a href="javascript:;">我的订单</a>
            <a href="javascript:;">我的购物车</a>
            <a href="javascript:;">我的尚优选</a>
            <a href="javascript:;">尚优选会员</a>
            <a href="javascript:;">企业采购</a>
            <a href="javascript:;">关注尚优选</a>
            <a href="javascript:;">合作招商</a>
            <a href="javascript:;">商家后台</a>
          </nav>
        </div>
      </div>
    </div>
    <!-- 下面的部分 -->
    <div class="headBottomMain">
      <!-- logo -->
      <h1 class="logo">
        <a href="JavaScript:;">
          <img src="@/assets/images/logo.png" alt="商优logo" />
        </a>
      </h1>
      <!-- 搜索框 -->
      <div class="search">
        <input type="text" placeholder="请输入搜索内容" />
        <input type="button" value="搜索" />
      </div>
    </div>
  </header>
  <!-- 头部结束 -->
</template>

<script setup lang="ts"></script>

<style lang="less">
// 头部开始
#header {
  // 上面部分
  .headerTop {
    background: #eaeaea;
    height: 30px;

    .headTopMain {
      width: 1200px;
      margin: 0 auto;
      line-height: 30px;
      .clearfix();

      // 左侧
      .left {
        h5 {
          float: left;
          margin-right: 5px;
        }

        p {
          float: left;

          a {
            &:first-child {
              border-right: 1px solid #b3aeae;
              padding-right: 5px;
              margin-right: 3px;
            }
          }
        }
      }

      // 右侧
      .right {
        float: right;

        nav {
          font-size: 0;

          a {
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #b3aeae;
            font-size: 12px;

            &:last-child {
              margin-right: 0;
              padding-right: 0;
              border-right: 0;
            }
          }
        }
      }
    }
  }

  // 下面部分
  .headBottomMain {
    width: 1200px;
    margin: 0 auto;
    .clearfix();

    // logo
    .logo {
      float: left;

      a {
        img {
          width: 175px;
          height: 56px;
          margin: 25px 45px;
        }
      }
    }

    // 搜索框
    .search {
      float: right;
      margin-top: 35px;

      input {
        &:first-child {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0 4px;
          border: 2px solid #ea4a36;
          float: left;
        }

        // 提交按钮
        &:last-child {
          width: 68px;
          height: 32px;
          color: #fff;
          background-color: #ea4a36;
          border: none;
        }

        // 修饰placeholder
        &::-webkit-input-placeholder {
          color: yellowgreen;
        }
      }
    }
  }
}
// 头部结束
</style>

<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div class="logo">VUE后台开发系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      collapse: false,
      message: 2,
      username: 'yhh'
    }
  }
}
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 50px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 50px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 50px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
</style>

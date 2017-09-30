<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <router-link to="/reg">
            <el-button type="info">注册</el-button>
          </router-link>
          <router-link to="/login">
            <el-button type="info">登录</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  }
}
</script>

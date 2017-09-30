<style>
.reg .el-col {
    float: none;
    margin: 0 auto;
}
</style>

<template>
    <div class="reg">
        <el-row class="mt20">
            <el-col :span="20">
                <el-input v-model="username" placeholder="请输入账号"></el-input>
            </el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="20">
                <el-input v-model="password" placeholder="请输入密码"></el-input>
            </el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="20">
                <el-button type="infor" v-on:click="reg">注册</el-button>
            </el-col>
        </el-row>
    </div>
</template>  
  
<script>  
export default {
    name: 'home',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    created: function() {
        
    },
    methods: {
        reg: function() {
            if(this.username==""){
                alert("用户名不能为空")
                return false;
            }
            if(this.password==""){
                alert("密码不能为空")
                return false;
            }
            this.$http.post('/api/user/user', { username:this.username, password:this.password}).then(function(result) {
                console.log(result)
            });
        }
    }
} 
</script>  
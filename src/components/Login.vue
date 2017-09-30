<template>
    <div>
        想要吃的水果
        <ul>
            <li v-for="x in list">
                {{x.title}} ---- {{x.author}}
            </li>
            <input type="text" value="输入ID" name="id">
            <input type="text" value="输入标题" name="title">
            <input type="text" value="输入作者" name="author">
            <button name="postList" v-on:click="postList">提交</button>
        </ul>
        <img src="../assets/images/logo.png" alt="">
    </div>
</template>  
  
<script>  
export default {
    name: 'home',
    data() {
        return {
            list: [],
            name: "caoni",
            sex: "女"
        }
    },
    created: function() {
        this.init();
    },
    methods: {
        init: function() {
            var _this = this;
            this.$http.get('http://localhost:3030/getList').then(function(result) {
                if (result.body.code == 0) {
                    _this.list = result.body.list;
                    console.log(_this.list)
                }
            });
        },
        postList: function() {
            this.$http.post('http://localhost:3030/postList', { id: "2", title: "saf水水水水就而烦恼吗女啦", author: "白白" }).then(function(result) {
                console.log(result)
            });
        }
    }
} 
</script>  
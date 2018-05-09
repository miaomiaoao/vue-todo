<template>
    <div id="app">
        <div id="cover">
            <Header></Header>
            <todo></todo>
            <Footer></Footer>
        </div>
    </div>
    
</template>

<script>

import Header from './todo/header.vue'  
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
    components: {
        Header,
        Footer,
        Todo
    },
}
</script>

<style lang="scss" scoped>
    %style {
        width: 100%;
        height: 100%;
    }

    #cover {
        @extend %style;
        
        background-color: rgba(#999, 0.7);
        position: absolute;
        z-index: 22;
    }

    #app {
        @extend %style;
        background: {
            image: url('./assets/images/bg.jpeg'); // 设置背景图片 
            repeat: no-repeat; // 不能重复
            size: cover; // 图片自适应,平铺
            position: center; // 居中
        }
    }
    
</style>




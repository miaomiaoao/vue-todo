<template>
<section id="main-todo">
    <input 
    type="text"
    autofocus="autofocus" 
    placeholder="接下去准备做啥呢"
    class="add-input"
    v-on:keyup.enter="addTodo"
    >
    <!-- 使用组件v-for时, key是必须的 -->
    <Item 
        v-bind:todo="todo"
        v-for="todo in filterTodos"
        :key="todo.id"
        @del="deleteTodo"
    />
    <Tabs 
        :filter="filter"
        @clear="clearAllComplted"
        :todos="todos"
        @toggle="toggleFilter"
    />
</section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0

export default {
    components: {
        Item,
        Tabs
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: id++, 
                content: e.target.value.trim(), 
                completed: false
            })
            e.target.value = ''
        },
        deleteTodo(id) {
            console.log(id)
            // id不见得是元素的位置
            // findeIndex返回目标元素的位置
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            // this.todos.filter(todo => todo.id !== id)
            // this.todos.splice(id, 1)
        },
        clearAllComplted() {
            // filter 返回结果为true的集合
            this.todos = this.todos.filter(todo => !todo.completed)
        },

        toggleFilter(state) {
            this.filter = state
        }
    },
    data() {
        return {
            filter: 'all',
            todos: [],
        }
    },
    computed: {
        filterTodos() {
            if(this.filter === 'all') {
                return this.todos
            } 
            const completed = this.filter === 'completed'
            return this.todos.filter(todo => completed === todo.completed)
        }
    }
}
</script>

<style lang="scss" scoped>
    #main-todo {
        margin: 0 auto;
        background: #ffffff;
        width: 600px;
        box-shadow: 0 0 5px #666;

        .add-input {
            height: 80px;
            width: 600px;
            font-size: 40px;
            border: none;
            outline: none;
            padding-left: 50px;
            box-sizing: border-box;
        }
    }

</style>



<template>
    <div v-bind:class="['todo-item', todo.completed ? 'completed': '']">
        <input type="checkbox" class="toggle" v-model="todo.completed"/>
        <label>{{todo.content}}</label>
        <button class="destory" v-on:click="deleteTodo" ></button>
    </div>
</template>

<script>
export default {
   props: {
       todo: {
           type: Object,
           required: true
       }
   },

   methods: {
       deleteTodo() {
           this.$emit('del', this.todo.id)
           // 父组件给自组件传递消息通过props
           // 子组件给父组件传递消息通过事件
       }
   }
}
</script>

<style lang="scss" scoped>

    .todo-item {
        position:relative;
        width: 600px;
        background: #ffffff;
        font-size: 24px;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        &:hover {
            .destory:after {
                content: 'x'
            }
        }
        label {
            white-space: pre-line;
            word-break: break-all;
            padding: 15px 60px 15px 15px;
            margin-left: 45px;
            display: block;
            line-height: 1.2;
            transition: color 0.4;
        }
        &.completed {
            label {
                color: #d9d9d9;
                 text-decoration:line-through
            }
        }
    }

    .toggle {
        height: 40px;
        width: 40px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        bottom:0;
        appearance: none;
        -webkit-appearance: none;
        border: none;
        outline: none;
        &:after {
           content:url('../assets/images/round.svg')
        }
        &:checked:after {
           content:url('../assets/images/done.svg')
        }
    }

    .destory {
        background-color: transparent;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        border: none;
        position: absolute;
        top: 0;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 30px;
        margin-bottom: 11px;
        color: #cc9a9a;
        transition: color 0.3s ease-out;

    }

    
</style>



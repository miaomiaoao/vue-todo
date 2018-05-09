<template>
  <div class="todo-tabs">
      <span class="left">{{getUnCompleted}} item left</span>
      <span class="tabs">
          <span
            v-for="state in states"
            :key="state"
            :class="[state, filter === state ? 'actived': '']"
            @click="toggleFilter(state)"
          >
              {{state}}
          </span>
      </span>
      <span class="clear" @click="clearAllComplted">clear completed</span>
  </div>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            states: ['all', 'active', 'completed'],
        }
    },

    methods: {
        toggleFilter(state) {
            this.$emit('toggle', state)
        },
        clearAllComplted() {
            this.$emit('clear')
        }
    },
    computed: {
        getUnCompleted() {
            return this.todos.filter(todo => !todo.completed).length
        }
    }

}
</script>

<style lang="scss" scoped>
    .todo-tabs {
        height: 50px;
        display:flex;
        justify-content:space-between;
         line-height: 50px;
        .left {
            text-align: left;            
            margin-left: 20px;
        }
        .tabs {
            text-align: center;  
            left: 200px; 
            span {
                display: inline-block;
                // width: 50px;
                height: 30px;
                line-height: 30px;
                padding: 5px 10px;
            }
        }

        .clear {
            text-align: right; 
            right: 30px;
            margin-right: 20px;
            cursor: pointer;
        }
    }

    .tabs {
       cursor: pointer;
       display: inline-block;
       & .actived {
           border: 1px solid rgba(175,47,47,0.4);
           border-radius: 5px;
       }
    }



</style>



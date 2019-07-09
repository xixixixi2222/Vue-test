// var app = new Vue({
// 	el : '#app' ,
	
// 	data: {
//      message: 'Hello Vue.js!'
//   },
//   methods:{
//   	reverseMessage:function(){
//   		this.message = this.message.split('').reverse().join('')
//   	}
//   }
// })

// var vm = new Vue({
//   el: '#demo',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar'
//   },
//   computed: {
//     fullName: function () {
//       return this.firstName + ' ' + this.lastName
//     }
//   }
// })





// <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
// <script>
// var watchExampleVM = new Vue({
//   el: '#watch-example',
//   data: {
//     question: '',
//     answer: 'I cannot give you an answer until you ask a question!'
//   },
//   watch: {
//     // whenever question changes, this function will run
//     question: function (newQuestion, oldQuestion) {
//       this.answer = 'Waiting for you to stop typing...'
//       this.debouncedGetAnswer()
//     }
//   },
//   created: function () {
//     // _.debounce is a function provided by lodash to limit how
//     // often a particularly expensive operation can be run.
//     // In this case, we want to limit how often we access
//     // yesno.wtf/api, waiting until the user has completely
//     // finished typing before making the ajax request. To learn
//     // more about the _.debounce function (and its cousin
//     // _.throttle), visit: https://lodash.com/docs#debounce
//     this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
//   },
//   methods: {
//     getAnswer: function () {
//       if (this.question.indexOf('?') === -1) {
//         this.answer = 'Questions usually contain a question mark. ;-)'
//         return
//       }
//       this.answer = 'Thinking...'
//       var vm = this
//       axios.get('https://yesno.wtf/api')
//         .then(function (response) {
//           vm.answer = _.capitalize(response.data.answer)
//         })
//         .catch(function (error) {
//           vm.answer = 'Error! Could not reach the API. ' + error
//         })
//     }
//   }
// })
// </script>


// var example1 = new Vue({
//   el: '#example-1',
//   data: {
//     items: [
//       { message: 'Foo' },
//       { message: 'Bar' }
//     ]
//   }
// })




// new Vue({
//   el: '#v-for-object',
//   data: {
//     object: {
//       title: 'How to do lists in Vue',
//       author: 'Jane Doe',
//       publishedAt: '2016-04-10'
//     }
//   }
// })




// Vue.component('todo-item', {
//   template: '\
//     <li>\
//       {{ title }}\
//       <button v-on:click="$emit(\'remove\')">Remove</button>\
//     </li>\
//   ',
//   props: ['title']
// })

// new Vue({
//   el: '#todo-list-example',
//   data: {
//     newTodoText: '',
//     todos: [
//       {
//         id: 1,
//         title: 'Do the dishes',
//       },
//       {
//         id: 2,
//         title: 'Take out the trash',
//       },
//       {
//         id: 3,
//         title: 'Mow the lawn'
//       }
//     ],
//     nextTodoId: 4
//   },
//   methods: {
//     addNewTodo: function () {
//       this.todos.push({
//         id: this.nextTodoId++,
//         title: this.newTodoText
//       })
//       this.newTodoText = ''
//     }
//   }
// })




// new Vue({
//   el: '#example-3',
//   methods: {
//     say: function (message) {
//       alert(message)
//     }
//   }
//})



// new Vue({
//   el: '#example-3',
//   data: {
//     checkedNames: []
//   }
// })


// new Vue({
//   el: '...',
//   data: {
//     selected: 'A',
//     options: [
//       { text: 'One', value: 'A' },
//       { text: 'Two', value: 'B' },
//       { text: 'Three', value: 'C' }
//     ]
//   }
// })



// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })
// new Vue({ el: '#components-demo' })



// Vue.component('blog-post', {
//   props: ['post'],
//   template: `
//     <div class="blog-post">
//       <h3>{{ post.title }}</h3>
//       <button>
//         Enlarge text
//       </button>
//       <div v-html="post.content"></div>
//     </div>
//   `
// })
// new Vue({
//   el: '#blog-posts-events-demo',
//   data: {
//     posts: [/* ... */],
//     postFontSize: 1
//   }
// })





// Vue.component('base-input', {
//   inheritAttrs: false,
//   props: ['label', 'value'],
//   computed: {
//     inputListeners: function () {
//       var vm = this
//       // `Object.assign` 将所有的对象合并为一个新对象
//       return Object.assign({},
//         // 我们从父级添加所有的监听器
//         this.$listeners,
//         // 然后我们添加自定义监听器，
//         // 或覆写一些监听器的行为
//         {
//           // 这里确保组件配合 `v-model` 的工作
//           input: function (event) {
//             vm.$emit('input', event.target.value)
//           }
//         }
//       )
//     }
//   },
//   template: `
//     <label>
//       {{ label }}
//       <input
//         v-bind="$attrs"
//         v-bind:value="value"
//         v-on="inputListeners"
//       >
//     </label>
//   `
// })




// new Vue({
//   el: '#demo',
//   data: {
//     show: true
//   }
// })



// new Vue({
//   el: '#example-1',
//   data: {
//     show: true
//   }
// })



// new Vue({
//   el: '#example-4',
//   data: {
//     show: false
//   },
//   methods: {
//     beforeEnter: function (el) {
//       el.style.opacity = 0
//       el.style.transformOrigin = 'left'
//     },
//     enter: function (el, done) {
//       Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
//       Velocity(el, { fontSize: '1em' }, { complete: done })
//     },
//     leave: function (el, done) {
//       Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
//       Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
//       Velocity(el, {
//         rotateZ: '45deg',
//         translateY: '30px',
//         translateX: '30px',
//         opacity: 0
//       }, { complete: done })
//     }
//   }
// })



// new Vue({
//   el: '#list-demo',
//   data: {
//     items: [1,2,3,4,5,6,7,8,9],
//     nextNum: 10
//   },
//   methods: {
//     randomIndex: function () {
//       return Math.floor(Math.random() * this.items.length)
//     },
//     add: function () {
//       this.items.splice(this.randomIndex(), 0, this.nextNum++)
//     },
//     remove: function () {
//       this.items.splice(this.randomIndex(), 1)
//     },
//   }
// })



// new Vue({
//   el: '#flip-list-demo',
//   data: {
//     items: [1,2,3,4,5,6,7,8,9]
//   },
//   methods: {
//     shuffle: function () {
//       this.items = _.shuffle(this.items)
//     }
//   }
// })


// new Vue({
//   el: '#staggered-list-demo',
//   data: {
//     query: '',
//     list: [
//       { msg: 'Bruce Lee' },
//       { msg: 'Jackie Chan' },
//       { msg: 'Chuck Norris' },
//       { msg: 'Jet Li' },
//       { msg: 'Kung Fury' }
//     ]
//   },
//   computed: {
//     computedList: function () {
//       var vm = this
//       return this.list.filter(function (item) {
//         return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
//       })
//     }
//   },
//   methods: {
//     beforeEnter: function (el) {
//       el.style.opacity = 0
//       el.style.height = 0
//     },
//     enter: function (el, done) {
//       var delay = el.dataset.index * 150
//       setTimeout(function () {
//         Velocity(
//           el,
//           { opacity: 1, height: '1.6em' },
//           { complete: done }
//         )
//       }, delay)
//     },
//     leave: function (el, done) {
//       var delay = el.dataset.index * 150
//       setTimeout(function () {
//         Velocity(
//           el,
//           { opacity: 0, height: 0 },
//           { complete: done }
//         )
//       }, delay)
//     }
//   }
// })



// new Vue({
//   el: '#dynamic-fade-demo',
//   data: {
//     show: true,
//     fadeInDuration: 1000,
//     fadeOutDuration: 1000,
//     maxFadeDuration: 1500,
//     stop: true
//   },
//   mounted: function () {
//     this.show = false
//   },
//   methods: {
//     beforeEnter: function (el) {
//       el.style.opacity = 0
//     },
//     enter: function (el, done) {
//       var vm = this
//       Velocity(el,
//         { opacity: 1 },
//         {
//           duration: this.fadeInDuration,
//           complete: function () {
//             done()
//             if (!vm.stop) vm.show = false
//           }
//         }
//       )
//     },
//     leave: function (el, done) {
//       var vm = this
//       Velocity(el,
//         { opacity: 0 },
//         {
//           duration: this.fadeOutDuration,
//           complete: function () {
//             done()
//             vm.show = true
//           }
//         }
//       )
//     }
//   }
// })





// 这种复杂的补间动画逻辑可以被复用
// 任何整数都可以执行动画
// 组件化使我们的界面十分清晰
// 可以支持更多更复杂的动态过渡
// 策略。
Vue.component('animated-integer', {
  template: '<span>{{ tweeningValue }}</span>',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      tweeningValue: 0
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  },
  mounted: function () {
    this.tween(0, this.value)
  },
  methods: {
    tween: function (startValue, endValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function () {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start()

      animate()
    }
  }
})

// 所有的复杂度都已经从 Vue 的主实例中移除！
new Vue({
  el: '#example-8',
  data: {
    firstNumber: 20,
    secondNumber: 40
  },
  computed: {
    result: function () {
      return this.firstNumber + this.secondNumber
    }
  }
})
20
40


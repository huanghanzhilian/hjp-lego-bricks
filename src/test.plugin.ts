// import { App } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'
// const plugins = {
//   install: (app: App) => {
//     app.config.globalProperties.$echo = () => {
//       console.log('a plugin')
//     }
//     app.component('hello-world', HelloWorld)
//     app.provide('test', {
//       message: 'from test.plugin'
//     })
//   }
// }
// export default plugins

// <template>
//   <hello-world />
// </template>
// <script lang="ts">
// import { defineComponent, getCurrentInstance, onMounted, inject } from 'vue'
// export default defineComponent({
//   name: 'App',
//   setup() {
//     onMounted(() => {
//       getCurrentInstance()?.appContext.config.globalProperties.$echo()
//     })
//     console.log(inject('test'))
//   }
// })
// </script>

// import { createApp } from 'vue'
// import App from './App.vue'
// import testPlugin from './test.plugin'

// const app = createApp(App)
// app.use(testPlugin)
// app.mount('#app')

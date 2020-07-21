import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//全局组件
import Header from './components/header'
Vue.component("my-heade",Header);
import Footer from './components/footer'
Vue.component("my-foot",Footer);

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// // 引入富文本编辑器
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)
//加入以下引用
 //实现quill-editor编辑器拖拽上传图片
//  import * as Quill from 'quill'
//  import { ImageDrop } from 'quill-image-drop-module'
//  Quill.register('modules/imageDrop', ImageDrop)
 
//  //实现quill-editor编辑器调整图片尺寸
//  import ImageResize from 'quill-image-resize-module'
//  Quill.register('modules/imageResize', ImageResize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

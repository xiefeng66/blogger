<template>
  <div>
    <!-- 图片上传组件辅助 action上传图片地址name上传的文件字段名
    before-upload上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。-->
    <!-- 上传组件辅助-->
    <el-upload
      class="avatar-uploader-editor"
      :action="serverUrl"
      name="img"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
    ></el-upload>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      style="height: 500px;"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @blur="onEditorBlur($event)"
      @change="onEditorChange($event)"
    >
      <!-- 自定义toolar -->
      <div id="toolbar" slot="toolbar">
        <!-- Add a bold button -->
        <button class="ql-bold" title="加粗">Bold</button>
        <button class="ql-italic" title="斜体">Italic</button>
        <button class="ql-underline" title="下划线">underline</button>
        <button class="ql-strike" title="删除线">strike</button>
        <button class="ql-blockquote" title="引用"></button>
        <button class="ql-code-block" title="代码"></button>
        <button class="ql-header" value="1" title="标题1"></button>
        <button class="ql-header" value="2" title="标题2"></button>
        <!--Add list -->
        <button class="ql-list" value="ordered" title="有序列表"></button>
        <button class="ql-list" value="bullet" title="无序列表"></button>
        <!-- Add font size dropdown -->
        <select class="ql-header" title="段落格式">
          <option selected>段落</option>
          <option value="1">标题1</option>
          <option value="2">标题2</option>
          <option value="3">标题3</option>
          <option value="4">标题4</option>
          <option value="5">标题5</option>
          <option value="6">标题6</option>
        </select>
        <select class="ql-size" title="字体大小">
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px" selected>16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
        <select class="ql-font" title="字体">
          <option value="SimSun">宋体</option>
          <option value="SimHei">黑体</option>
          <option value="Microsoft-YaHei">微软雅黑</option>
          <option value="KaiTi">楷体</option>
          <option value="FangSong">仿宋</option>
          <option value="Arial">Arial</option>
        </select>

        <!-- const titleConfig = {
          'ql-bold': '加粗',
          'ql-color': '颜色',
          'ql-font': '字体',
          'ql-code': '插入代码',
          'ql-italic': '斜体',
          'ql-link': '添加链接',
          'ql-background': '背景颜色',
          'ql-size': '字体大小',
          'ql-strike': '删除线',
          'ql-script': '上标/下标',
          'ql-underline': '下划线',
          'ql-blockquote': '引用',
          'ql-header': '标题',
          'ql-indent': '缩进',
          'ql-list': '列表',
          'ql-align': '文本对齐',
          'ql-direction': '文本方向',
          'ql-code-block': '代码块',
          'ql-formula': '公式',
          'ql-image': '图片',
          'ql-video': '视频',
          'ql-clean': '清除字体样式'
        }-->
        <!-- Add subscript and superscript buttons -->
        <select class="ql-color" value="color" title="字体颜色"></select>
        <select class="ql-background" value="background" title="背景颜色"></select>
        <select class="ql-align" value="align" title="对齐"></select>
        <button class="ql-clean" title="还原"></button>
        <button class="ql-image" slot="trigger" title="上传"></button>
        <!-- You can also add your own -->
      </div>
    </quill-editor>
  </div>
</template>

<script>
import { Quill, quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
console.log(Quill);
//引入font.css
//   import '../../../assets/css/font.css'
//实现quill-editor编辑器拖拽上传图片
import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);

//实现quill-editor编辑器调整图片尺寸
//  import ImageResize from 'quill-image-resize-module'
//  Quill.register('modules/imageResize', ImageResize)
// 自定义字体大小
let Size = Quill.import("attributors/style/size");
Size.whitelist = ["10px", "12px", "14px", "16px", "18px", "20px"];
Quill.register(Size, true);

// 自定义字体类型
var fonts = [
  "SimSun",
  "SimHei",
  "Microsoft-YaHei",
  "KaiTi",
  "FangSong",
  "Arial",
  "Times-New-Roman",
  "sans-serif",
  "宋体",
  "黑体"
];
var Font = Quill.import("formats/font");
Font.whitelist = fonts;
Quill.register(Font, true);

export default {
  name: "FuncFormsEdit",
  components: {
    quillEditor
  },
  data() {
    return {
      content: null,
      editorOption: {
        placeholder: "请输入",
        theme: "snow", // or 'bubble'
        modules: {
          toolbar: {
            container: "#toolbar"
          }
        },
        quanbu: ""
      }
    };
  },
  modules: {},
  methods: {
    // 准备富文本编辑器
    onEditorReady() {},
    // 富文本编辑器 失去焦点事件
    onEditorBlur() {
      console.log(this.content);
    },
    // 富文本编辑器 获得焦点事件
    onEditorFocus() {
      //  console.log(this.content);
    },
    // 富文本编辑器 内容改变事件
    onEditorChange() {
      //  console.log(this.content);
    }
  }
};
</script>
<style>
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="SimSun"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="SimSun"]::before {
  content: "宋体";
  font-family: "SimSun";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="SimHei"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="SimHei"]::before {
  content: "黑体";
  font-family: "SimHei";
}

.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-value="Microsoft-YaHei"]::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-value="Microsoft-YaHei"]::before {
  content: "微软雅黑";
  font-family: "Microsoft YaHei";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="KaiTi"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="KaiTi"]::before {
  content: "楷体";
  font-family: "KaiTi";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="FangSong"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="FangSong"]::before {
  content: "仿宋";
  font-family: "FangSong";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Arial"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Arial"]::before {
  content: "Arial";
  font-family: "Arial";
}

.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-value="Times-New-Roman"]::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-value="Times-New-Roman"]::before {
  content: "Times New Roman";
  font-family: "Times New Roman";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="sans-serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="sans-serif"]::before {
  content: "sans-serif";
  font-family: "sans-serif";
}

.ql-font-SimSun {
  font-family: "SimSun";
}

.ql-font-SimHei {
  font-family: "SimHei";
}

.ql-font-Microsoft-YaHei {
  font-family: "Microsoft YaHei";
}

.ql-font-KaiTi {
  font-family: "KaiTi";
}

.ql-font-FangSong {
  font-family: "FangSong";
}

.ql-font-Arial {
  font-family: "Arial";
}

.ql-font-Times-New-Roman {
  font-family: "Times New Roman";
}

.ql-font-sans-serif {
  font-family: "sans-serif";
}
</style>
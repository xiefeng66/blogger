<template>
  <div id="heade">
      <div class="headtop"></div>
      <div class="contenttop">
        <div class="logo f_l">个人博客模板</div>
        <div class="search f_r">
          <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
            <input
              name="keyboard"
              id="keyboard"
              class="input_text"
              value="请输入关键字"
              style="color: rgb(153, 153, 153);"
              onfocus="if(value=='请输入关键字'){this.style.color='#000';value=''}"
              onblur="if(value==''){this.style.color='#999';value='请输入关键字'}"
              type="text"
            />
            <input name="show" value="title" type="hidden" />
            <input name="tempid" value="1" type="hidden" />
            <input name="tbname" value="news" type="hidden" />
            <input name="Submit" class="input_submit" value="搜索" type="submit" />
          </form>
        </div>
        <div class="blank"></div>

        <div id="mnav">
          <h2>
            <span class="navicon"></span>
          </h2>
          <ul>
            <li>
              <a href="/">网站首页</a>
            </li>
            <li>
              <a href="/about.html">关于我</a>
            </li>
            <li>
              <a href="/download/">模板分享</a>
              <ul>
                <li>
                  <a href="#.html">关于我</a>
                </li>
                <li>
                  <a href="#.html">关于我</a>
                </li>
                <li>
                  <a href="#.html">关于我</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/jstt/">学无止境</a>
              <ul>
                <li>
                  <a href="#.html">关于我</a>
                </li>
                <li>
                  <a href="#.html">关于我</a>
                </li>
                <li>
                  <a href="#.html">关于我</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/news/">慢生活</a>
              <ul>
                <li>
                  <a href="#.html">关于我</a>
                </li>
                <li>
                  <a href="#.html">关于我</a>
                </li>
                <li>
                  <a href="#.html">关于我</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/e/tool/gbook/?bid=3">留言</a>
            </li>
          </ul>
        </div>
        <nav>
          <div class="navigation">
            <ul class="menu">
              <li>
                <a href="/">网站首页</a>
              </li>
              <li>
                <a href="#">关于我</a>
                <ul>
                  <li>
                    <a href="about.html">个人简介</a>
                  </li>
                  <li>
                    <a href="listpic.html">个人相册</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">我的日记</a>
                <ul>
                  <li>
                    <a href="newslistpic.html">个人日记</a>
                  </li>
                  <li>
                    <a href="newslistpic.html">学习笔记</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="newslistpic.html">技术文章</a>
              </li>
              <li>
                <a href="#">给我留言</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  </div>
</template>
<script>

export default {
  
}
</script>
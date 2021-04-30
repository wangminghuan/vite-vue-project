<template>
   <ul class="tab-box">
    <li v-for="item in newsTab" :class="{active:tag==item.value}" :key="item.value" @click="clickTabNews(item)">{{item.label}}</li>
  </ul>
  <ul class="list-box">
    <li v-for="item in newsList" :key="item.item_id" @click="clickNewsItem(item)">
      <p>{{item.title}}</p>
      <div class="info"><span>{{item.media_name}}</span><span>评论 {{item.comment_count}}</span><span>{{item.datetime}}</span></div>
      </li>
  </ul>
</template>
<script>
import useNewsTab from './useNewsTab'
import useNewsList from './useNewsList'
export default {
  setup() {
    const { tag,newsTab, clickTabNews } = useNewsTab()
    const { newsList, clickNewsItem } = useNewsList(tag)
    return {
      tag,
      newsTab,
      clickTabNews,
      newsList,
      clickNewsItem
    }
  }
}
</script>
<style>
*{margin: 0;padding: 0;}
ul,li{
  list-style: none;
  text-align: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.tab-box{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.tab-box li{
   padding: 0 20px;
   padding-bottom: 4px;
}
.tab-box li.active{
  color: red;
  border-bottom: 1px solid red;
}
.list-box{
  width: 90%;
  margin:0 auto;
  padding: 30px 0;
}
.list-box li{
  margin-bottom: 10px;
  padding-bottom: 4px;
  border-bottom: 1px dotted #eee;
}
.list-box .info{
  line-height: 24px;
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  margin-top:20px;
}
.list-box .info span{
  margin-right: 10px;
}
</style>

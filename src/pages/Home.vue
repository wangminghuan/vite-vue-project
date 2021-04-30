<template>
   <ul class="tab-box">
    <li v-for="item in list" :class="{active:tag==item.value}" :key="item.value" @click="tabClick(item)">{{item.label}}</li>
  </ul>
  <ul class="list-box">
    <li v-for="item in newsList" :key="item.item_id" @click="handleJump(item)">
      <p>{{item.title}}</p>
      <div class="info"><span>{{item.media_name}}</span><span>评论 {{item.comment_count}}</span><span>{{item.datetime}}</span></div>
      </li>
  </ul>
   <!-- <MyList :tag="tag" /> -->
</template>
<script>
export default {
  data(){
    return {
      tag:"news_hot",
      newsList:[],
      list:[{
          label:"热点",
          value:"news_hot"
        },{
          label:"娱乐",
          value:"news_entertainment"
        },{
          label:"军事",
          value:"news_military"
        },{
          label:"科技",
          value:"news_tech"
        }]
    }
  },
  watch:{
    tag(val){
      this.getData();
    }
  },
  methods:{
    handleJump(item){
     this.$router.push("/detail/" + item.item_id)
    },
    tabClick(item){
      this.tag=item.value
    },
    async getData(){
      const behot_time = (new Date().getTime()-2*60*60*1000).toString().substring(0,10);
      const params={
        ac: 'wap',
        count: '20',
        format: 'json_raw',
        as: 'A17660380A47A27',
        cp: '608A27CAC2F75E1',
        max_behot_time: behot_time,
        _signature: 'QgOLQgAAIouldHNEEOjZ7kIDi1',
        i: behot_time,
        page: 1}
      const res = await window.$http.get(`/list/?tag=${this.tag}`,{
        params:params
      })
      this.newsList = res.data;
    }
  },
  created(){
    this.getData()
  }
}
</script>
<style>
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

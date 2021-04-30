import {ref} from "vue"
export default function(){
  const newsTab=ref([]);
  const tag=ref('')
  const getNewsTab=()=>{
    newsTab.value=[{
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
    tag.value=newsTab.value[0].value
  }
  getNewsTab();
  const clickTabNews=(item)=>{
    tag.value=item.value
  }
  return {
    tag,
    newsTab,
    clickTabNews
  }
}
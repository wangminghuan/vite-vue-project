import {ref,watch} from "vue"
import { useRouter } from "vue-router";
export default function (tag) {
  const newsList = ref([])
  const router = useRouter();
  const getNewsList = async () => {
    const behot_time = (new Date().getTime() - 2 * 60 * 60 * 1000).toString().substring(0, 10);
    const params = {
      ac: 'wap',
      count: '20',
      format: 'json_raw',
      as: 'A17660380A47A27',
      cp: '608A27CAC2F75E1',
      max_behot_time: behot_time,
      _signature: 'QgOLQgAAIouldHNEEOjZ7kIDi1',
      i: behot_time,
      page: 1
    }
    const res = await this.$http.get(`/list/?tag=${tag.value}`, {
      params: params
    })
    newsList.value = res.data;
  }
  getNewsList()
  watch(tag,()=>{
    getNewsList()
  })
  const clickNewsItem=(item)=>{
    router.push("/detail/" + item.item_id)
  }
  return {
    newsList,
    clickNewsItem,
    getNewsList
  }
}
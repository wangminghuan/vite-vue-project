<template>
  <div class="content" v-html="html"></div>
</template>
<script>
export default {
  data () {
    return {
      html: ''
    }
  },
  methods: {
    async getData (id) {
      const res = await this.$http.get(`/i${id}/info/`, {
        params: {
          _signature: 'HLIIRxARQk77xfBBg2LRhxyyCF',
          i: id
        }
      })
      this.html = res.data.content
    }
  },
  created () {
    this.getData(this.$route.params.id);
  }
}
</script>
<style>
.content {
  line-height: 30px;
  padding:0 20px;
}
.content img {
  display: block;
  margin: 0 auto;
  width: 100%;
}
.content p {
  font-size: 14px;
  color: #555;
  line-height: 28px;
}
</style>
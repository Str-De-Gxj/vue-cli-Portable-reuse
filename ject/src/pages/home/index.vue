<template lang="html">
  <div>
    <div v-for="item in list" :key="item.url">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import mockdata from '@/mock'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    this.list = mockdata.data.date
  }
}
</script>

<style lang="scss">
p {
    font-size: 75px;
}
</style>

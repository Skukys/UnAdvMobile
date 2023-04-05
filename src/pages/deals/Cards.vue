<template>
  <div class="wrapper">
    <div class="cards" @scroll="checkScroll">
      <Card v-if="cards" v-for="card in cards" :card="card"></Card>
    </div>
  </div>
</template>

<script>
import {useBaseStore} from "@/stores/baseStore"
import Card from "@/pages/deals/Card.vue"

export default {
  name: "Cards",
  data(){
    return {
      baseStore: useBaseStore(),
      cards: null,
      pagination: {
        limit: 20,
      }
    }
  },
  components: {Card},
  computed: {
    getId(){
      if(parseFloat(this.$route.query.portfolio_id))
        return parseFloat(this.$route.query.portfolio_id)
      else return 78
    }
  },
  methods: {
    async getData(){
      await this.baseStore.auth()
      let res = await this.baseStore.getDeals(this.getId, this.pagination)
      this.cards = res.json.data
    },
    checkScroll(e){
      if(e.target.scrollTop === ((248 + 24) * this.pagination.limit + 20 - e.target.clientHeight)) {
        this.pagination.limit += 20
        this.getData()
      }
    }
  },
  async mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
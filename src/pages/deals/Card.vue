<template>
  <div class="card">
    <div class="card-top flex justify-between">
      <div class="card-top__date gray-text">{{getDate}}</div>
      <div class="card-top__status buy">{{getType.ru}}</div>
    </div>
    <div class="card-bank flex items-center mt-[20px]">
      <div class="card-bank__icon">
        <img class="mr-[10px]" :src="`https://storage.alorbroker.ru/icon/${card.instrument?.ticker}.png`" alt="icon">
      </div>
      <div>
        <p>{{card.instrument?.title}}</p>
        <p>{{card.instrument?.exchange}}.{{card.instrument?.ticker}}</p>
      </div>
    </div>
    <div class="card-bank__base mt-[20px]">
      <div class="card-bank__base-row justify-between flex">
        <div class="card-bank__base-row__left gray-text">Количество</div>
        <div class="card-bank__base-row__right gray-text">{{card.amount}} шт.</div>
      </div>
      <div class="card-bank__base-row  mt-[10px] justify-between flex">
        <div class="card-bank__base-row__left gray-text">Сумма</div>
        <div class="card-bank__base-row__right gray-text">{{card.payment}} {{getIcon}}</div>
      </div>
      <div class="card-bank__base-row  mt-[10px] justify-between flex">
        <div class="card-bank__base-row__left gray-text">Цена за штуку</div>
        <div class="card-bank__base-row__right gray-text">{{card.payment/card.amount}} {{getIcon}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {enums,currency} from "@/assets/enums"

export default {
  name: "Card",
  props: {
    card: {}
  },
  computed: {
    getDate(){
      let date = new Date(this.card.transaction_date_time)
      let day = this.fixDate(date.getDay())
      let month = this.fixDate(date.getMonth())
      let year = date.getFullYear()
      let hours = this.fixDate(date.getUTCHours())
      let minutes = this.fixDate(date.getMinutes())
      return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
    },
    getType(){
      return enums.TransactionType[`${this.card.transaction_type}`]
    },
    getIcon(){
      return currency[this.card.currency].symbol
    }
  },
  methods: {
    fixDate(num) {
      return num >= 10 ? num : '0' + num
    }
  }
}
</script>

<style scoped>

</style>
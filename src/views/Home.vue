<template>
  <div class="home">
      <div class="echarts-wrapper" v-if="false">
          <v-echarts class="charts" :option="option" />
      </div>
      <div>
          <top-header />
          <sales-bar />
          <sales-line />
          <sales-pie />
          <sales-map />
          <sales-sun />
          <sales-radar />
      </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import SalesLine from '@/components/SalesLine'
import SalesBar from '@/components/SalesBar'
import SalesPie from '@/components/SalesPie'
import SalesMap from '@/components/SalesMap'
import SalesSun from '@/components/SalesSun'
import SalesRadar from '@/components/SalesRadar'
export default {
  name: 'Home',
  components: {
    TopHeader,
    SalesLine,
    SalesBar,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar
  },
  data () {
    return {
      option: {}
    }
  },
  mounted () {
    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }
}
</script>

<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-row>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">1</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">2</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">3</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">4</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">5</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">6</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">7</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">8</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <div style="height: 150px;  text-align:center;line-height:200px;">
        <span style="opacity:0;">_</span>
      </div>
    </base-header>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
h2.headertekst {
  text-align: center;
}

</style>

<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-row>
        <b-col align="center">
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <span style="opacity:0;">_</span>
      <b-row>
        <b-col>
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <span style="opacity:0;">_</span>
        <b-col>
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1 headertekst">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <span style="opacity:0;">_</span>
      <b-row>
        <b-col xl="3" md="4">
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <b-card>   
            <b-row>
              <b-col align="center">
                <h1>Turno</h1>
                <h2 class="text-nowrap">99</h2>
              </b-col>
              <b-col align="center">
                <h1>Modulo</h1>
                <h2 class="text-success mr-1">4</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </base-header>
  </div>
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

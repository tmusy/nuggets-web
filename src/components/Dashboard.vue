<template>
  <div class="box">
    <div class="box-header">
      <h3>Line chart</h3>
      <small class="block text-muted">A line chart is a way of plotting data points on a line</small>
    </div>
    <div class="box-body">
      <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
          <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
        </div>
        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
          <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
        </div>
      </div>
      <canvas id="chart-line" data-plugin="chart" height="488" width="734" class="chartjs-render-monitor" style="display: block; height: 244px; width: 367px;">
      </canvas>
    </div>
  </div>
</template>

<script>
    export default {
      name: "dashboard",
      data () {
        return {
          transactions: [],
          chartData: [],
          chartLabels: [],
          api: 'http://localhost:5000/api/v1.0/accounts/1/transactions',
          pageNum: 1,
          pageSize: 200
        }
      },
      methods: {
        getTransactions: function() {
          this.$http.get(this.api+'?pageSize='+this.pageSize+'&page='+this.pageNum).then(function(response) {
            if (response.status == 200) {
              console.log(response.data);
              this.transactions = response.data._embedded.items;
              for (var i = 0; i < this.transactions.length; i++) {
                this.chartData.push(this.transactions[i].saldo);
                this.chartLabels.push(this.transactions[i].date);
              }
              console.log(this.chartData);
              this.renderChart();
            }
          }, function(error){
            console.log(error.statusText);
          });
        },
        renderChart: function() {
          var ctx = document.getElementById("chart-line").getContext('2d');
          var myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: this.chartLabels.reverse(),
              datasets: [{
                label: 'Saldo',
                data: this.chartData.reverse()
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    suggestedMin: 38000,
                    suggestedMax: 42000
                  }
                }]
              }
            }
          });
        }
      },
      mounted: function () {
        this.getTransactions();
      }
    }
</script>

<style scoped>

</style>

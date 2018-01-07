<template>
  <div class="box">
    <div class="box-header">
      <h3>Transactions</h3>
    </div>
    <div class="p-2">
      <div class="row">
        <div class="col-sm-5">
          <select class="custom-select w-sm d-inline v-middle">
            <option value="0">Bulk action</option>
            <option value="1">Delete selected</option>
            <option value="2">Bulk edit</option>
            <option value="3">Export</option>
          </select>
          <button class="btn white">Apply</button>
        </div>
        <div class="col-sm-4">
        </div>
        <div class="col-sm-3">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search">
            <span class="input-group-btn">
              <button class="btn white" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped b-t">
        <thead>
          <tr>
            <th style="width:20px;"><label class="ui-check m-0"><input type="checkbox"><i></i></label></th>
            <th>Date</th>
            <th>Text</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Saldo</th>
            <th style="width:50px;"></th>
          </tr>
        </thead>
        <tbody>

          <TransactionTableItem v-for="transaction in transactions" :key="transaction.uri" :transaction="transaction" />
            <!--<td><label class="ui-check m-0"><input type="checkbox" name="post[]"><i class="dark-white"></i></label></td>-->
            <!--<td>{{ transaction.date | formatDate }}</td>-->
            <!--<td><strong>{{ transaction.name }}</strong><br />{{ transaction.description }}</td>-->
            <!--<td>{{ transaction.account }}-->
              <!--<div class="form-group row" v-if="!transaction.account">-->
                <!--<select class="form-control form-control-sm">-->
                  <!--<option v-for="account in accounts">{{ account.name }}</option>-->
                <!--</select>-->

              <!--</div>-->
            <!--</td>-->
            <!--<td>{{ transaction.amount }}</td>-->
            <!--<td>{{ transaction.saldo }}</td>-->
            <!--<td><a href="#" class="active" data-toggle-class=""><i class="fa fa-check text-success d-none"></i><i class="fa fa-times text-danger d-inline"></i></a></td>-->
          <!--</TransactionTableItem>-->
        </tbody>
      </table>
    </div>

    <footer class="light lt p-2">
      <div class="row">
        <!--Bulk actions-->
        <div class="col-sm-4 d-block-sm">
          <select class="custom-select w-sm d-inline v-middle">
            <option value="0">Bulk action</option>
            <option value="1">Delete selected</option>
            <option value="2">Bulk edit</option>
            <option value="3">Export</option>
          </select>
          <button class="btn white">Apply</button>
        </div>

        <div class="col-sm-4">
          <small class="text-muted py-2 d-block text-center">showing {{ displayedFrom }}-{{ displayedTo }} of {{ total }} items</small>
        </div>

        <!--Pagination-->
        <div class="col-sm-4">
          <paginate
            :page-count="pageCount"
            :page-range="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'">
          </paginate>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import TransactionTableItem from './TransactionTableItem';

  export default {
    name: "Transactions",
    data () {
      return {
        transactions: [],
        total: 0,
        pageNum: 1,
        pageCount: 0,
        pageSize: 20,
        api: 'http://localhost:5000/api/v1.0/accounts/1/transactions'
      }
    },
    methods:{
      ...mapActions([
        'getAccounts',
        'saveAccount'
      ]),
      getTransactions: function() {
        this.$http.get(this.api+'?pageSize='+this.pageSize+'&page='+this.pageNum).then(function(response) {
          if (response.status == 200) {
            console.log(response.data);
            this.transactions = response.data._embedded.items;
            if (this.transactions.credit_id === 1) {

            }
            this.total = response.data.total;
            this.pageCount = response.data.page_count;
          }
        }, function(error){
          console.log(error.statusText);
        });
      },
      clickCallback: function(pageNum) {
        console.log(pageNum);
        this.pageNum = pageNum;
        this.getTransactions();
      }
    },
    computed: {
      ...mapGetters({
        accounts: 'allAccounts'
      }),
      displayedFrom: function () {
        return this.pageNum * this.pageSize - this.pageSize + 1
      },
      displayedTo: function () {
        return Math.min(this.pageNum * this.pageSize, this.total)
      }
    },
    mounted: function () {
      this.getTransactions();
      this.getAccounts();
    },
    components: {
      TransactionTableItem
    },
  }
</script>

<style scoped>
  .pagination {
    float: right;
  }

</style>

<template>
  <div class="box">
    <div class="box-header">
      <h3>Accounts</h3>
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
          <button id="add-account-button" class="btn primary" data-toggle="modal" data-target="#m-md"><i class="fa fa-plus"></i> Add</button>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped b-t">
        <thead>
        <tr>
          <th style="width:20px;">
            <label class="ui-check m-0">
              <input type="checkbox"><i></i>
            </label>
          </th>
          <th>Nr.</th>
          <th>Text</th>
          <th>Type</th>
          <th style="width:50px;"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="account in accounts">
          <td><label class="ui-check m-0"><input type="checkbox" name="post[]"><i class="dark-white"></i></label></td>
          <td><span>{{ account.nr }}</span></td>
          <td><strong>{{ account.name }}</strong><br />{{ account.description }}</td>
          <td>{{ account.type }}</td>
          <td>
            <a href="#" class="active" data-toggle-class=""><i class="fa fa-pencil"></i></a>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
    <footer class="light lt p-2">
      <div class="row">
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
            :click-handler="changePage"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'">
          </paginate>
        </div>
      </div>
    </footer>

  <div id="m-md" class="modal" data-backdrop="true" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Account</h5>
        </div>
        <div class="modal-body p-lg">
          <form>
            <div class="form-group">
              <label for="inputAccountNumber">Account Number</label>
              <input type="number" class="form-control" id="inputAccountNumber" aria-describedby="accountNumberHelp" placeholder="Account number" v-model="new_account.nr">
              <small id="accountNumberHelp" class="form-text text-muted">Use official account numbers</small>
            </div>
            <div class="form-group">
              <label for="inputName">Name</label>
              <input type="text" class="form-control" id="inputName" placeholder="Name" v-model="new_account.name">
            </div>
            <div class="form-group">
              <label for="inputDescription">Description</label>
              <input type="text" class="form-control" id="inputDescription" placeholder="Description" v-model="new_account.description">
            </div>
            <div class="form-group">
              <label for="inputType">Type</label>
              <input type="text" class="form-control" id="inputType" placeholder="Type" v-model="new_account.type">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn dark-white p-x-md" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn danger p-x-md" data-dismiss="modal" v-on:click="addAccount">Add</button>
        </div>
      </div><!-- /.modal-content -->
    </div>
  </div>
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import finance from '@/api/finance'

  export default {
    name: "Accounts",
    data () {
      return {
        total: 0,
        pageNum: 1,
        pageCount: 0,
        pageSize: 20,
        api: 'http://localhost:5000/api/v1.0/accounts',
        new_account: {
          nr: null,
          name: null,
          description: null,
          type: null
        }
      }
    },
    methods:{
      ...mapActions([
        'getAccounts',
        'saveAccount'
      ]),
      changePage: function(pageNum) {
        console.log(pageNum);
        this.pageNum = pageNum;
        this.getAccounts();
      },
      addAccount: function() {
        console.log(this.new_account);
        this.saveAccount(this.new_account);
        this.new_account = {
          nr: null,
          name: null,
          description: null,
          type: null
        }
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
      this.getAccounts();
    }
  }
</script>

<style scoped>
  .pagination {
    float: right;
  }
  #add-account-button {
    float: right;
  }

</style>

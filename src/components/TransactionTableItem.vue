<template>
  <tr>
    <td><label class="ui-check m-0"><input type="checkbox" name="post[]"><i class="dark-white"></i></label></td>
    <td>{{ transaction.date | formatDate }}</td>
    <td><strong>{{ transaction.name }}</strong><br />{{ transaction.description }}</td>
    <td>
      <span class="badge badge-lg text-sm blue-grey">{{ account }}</span>
      <div class="form-group row" v-if="!account">
        <select class="form-control form-control-sm" v-on:change="updateTransaction" v-model="selectedAccount">
          <option></option>
          <option v-for="a in accounts">{{ a.name }}</option>
        </select>
      </div>
    </td>
    <td>{{ amount }}</td>
    <td>{{ transaction.saldo }}</td>
    <td><a href="#" class="active" data-toggle-class=""><i class="fa fa-check text-success d-none"></i><i class="fa fa-times text-danger d-inline"></i></a></td>
  </tr>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import finance from '../api/finance';

  export default {
    name: "transaction-table-item",
    data () {
      return {
        selectedAccount: null,
        editAccount: true
      }
    },
    props: {
      transaction: {
        type: Object,
        required: true
      }
    },
    methods: {
      updateTransaction: function () {
        if (this.transaction.type === "expense") {
          this.transaction.credit = this.accountsByName(this.selectedAccount);
        } else {
          this.transaction.debit = this.accountsByName(this.selectedAccount);
        }
        console.log(this.transaction)
        finance.updateTransaction(this.transaction, console.log);
        this.selectedAccount = null
      }
    },
    computed: {
      ...mapGetters({
        accounts: 'allAccounts',
        accountsByName: 'accountsByName'
      }),
      amount: function () {
        if (this.transaction.type === "expense") {
          return -this.transaction.amount;
        }
        return this.transaction.amount
      },
      account: function () {
        if (this.transaction.type === "expense") {
          return this.transaction.credit ? this.transaction.credit.name : null
        } else {
          return this.transaction.debit ? this.transaction.debit.name : null
        }
      }
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 1s;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    opacity: 0;
  }
  .slide-fade-enter {
    transform: translateX(31px);
  }
  .slide-fade-leave-active {
    transform: translateX(-31px);
  }

</style>

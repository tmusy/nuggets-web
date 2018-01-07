<template>
  <tr>
    <td><label class="ui-check m-0"><input type="checkbox" name="post[]"><i class="dark-white"></i></label></td>
    <td>{{ transaction.date | formatDate }}</td>
    <td><strong>{{ transaction.name }}</strong><br />{{ transaction.description }}</td>
    <td>
      <span class="badge badge-lg text-sm blue-grey">{{ account }}</span>
      <div class="form-group row" v-if="!account">
        <select class="form-control form-control-sm" v-on:change="updateTransaction" v-model="account">
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
        account: null,
        amount: this.transaction.amount,
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
          this.transaction.credit = this.accountsByName(this.account);
        } else {
          this.transaction.debit = this.accountsByName(this.account);
        }
        console.log(this.transaction)
        finance.updateTransaction(this.transaction, console.log);
      },
      evalAccount: function () {
        if (this.transaction.type === "expense") {
          this.amount = -this.amount;
          this.account = this.transaction.credit ? this.transaction.credit.name : null
        } else {
          this.account = this.transaction.debit ? this.transaction.debit.name : null
        }
      }
    },
    computed: {
      ...mapGetters({
        accounts: 'allAccounts',
        accountsByName: 'accountsByName'
      })
    },
    created: function () {
      this.evalAccount()
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

import finance from '@/api/finance'

const state = {
  accounts: []
}

const actions = {
  getAccounts ({commit}) {
    finance.getAccounts(accounts => {
      commit('recieve_accounts', accounts)
    })
  },
  saveAccount ({commit}, account) {
    finance.saveAccount(account, status => {
      commit('add_account', account)
    })
  },
}

const mutations = {
  recieve_accounts (state, accounts) {
    state.accounts = accounts
  },
  add_account (state, account) {
    state.accounts.push(account)
  }
}

const getters = {
  allAccounts (state) {
    return state.accounts
  },
  accountsByName: (state) => (name) => {
    return state.accounts.find(account => account.name == name)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

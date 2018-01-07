import axios from '../../node_modules/axios/dist/axios';

const baseURL = 'http://localhost:5000/api/';
const accountEndpoint = 'v1.0/accounts';
const transactionEndpoint = 'v1.0/transactions';

export default {

  getAccounts (callback) {
    axios.get(accountEndpoint, {baseURL:baseURL})
      .then(function (response) {
        console.log(response);
        callback(response.data._embedded.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  saveAccount (account, callback, errorCallback) {
    console.log(account);

    axios.post(accountEndpoint, account, {baseURL:baseURL})
      .then(function (response) {
        console.log(response);
        callback(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  updateTransaction (transaction, callback, errorCallback) {
    console.log(transaction);

    axios.put(transactionEndpoint+'/'+transaction.id, transaction, {baseURL:baseURL})
      .then(function (response) {
        console.log(response);
        callback(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

import auth from "./auth.js";
import api from "./api.js";

export const getAccountsMixin = {
  methods: {
    getAccounts() {
      const headers = auth.getAuthHeader();
      this.$http.get(api.account_list, { headers }).then(
        response => {
          this.accounts = response.body.data;
        },
        err => {
          this.errors = err.body.message;
        }
      );
    }
  }
};

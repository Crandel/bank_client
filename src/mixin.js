import auth from "./auth.js";

export const getAccountsMixin = {
    methods: {
        getAccounts() {
            const headers = auth.getAuthHeader();
            this.$http.get("accounts/list", {headers}).then(
                (response) => {
                    this.accounts = response.body.data;
                }, (err) => {
                    this.errors = err.body.message;
                },
            );
        }
    }
};

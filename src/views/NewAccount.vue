<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Create new Account!</h1>
    <div class="form-group">
      <div class="alert alert-danger" v-if="error.balance">
        <p v-for="er in error.balance" :key="er">{{ er }}</p>
      </div>
      <input
          type="number"
          class="form-control"
          placeholder="Enter balance"
          v-model="account.balance"
      >
    </div>
    <div class="form-group">
      <div class="alert alert-danger" v-if="error.currency">
        <p v-for="er in error.currency" :key="er">{{ er }}</p>
      </div>
      <select class="form-control" v-model="account.currency">
        <option v-for="cur in currencies" :key="cur.id" :value="cur.value">{{ cur.key }}</option>
      </select>
    </div>
    <button class="btn btn-primary" @click="submit()">Save</button>
  </div>
</template>

<script>
import auth from "../auth.js";

export default {
  data() {
    return {
      currencies: [
        {
          key: "EUR",
          value: 0
        },
        {
          key: "USD",
          value: 1
        },
        {
          key: "GBP",
          value: 2
        },
        {
          key: "CHF",
          value: 3
        }
      ],
      account: {
        currency: 0,
        balance: 0
      },
      error: {}
    };
  },
  methods: {
    submit() {
      const headers = auth.getAuthHeader();
      this.$http.post("accounts/", this.account, { headers }).then(
        data => {
          this.$router.push({ name: "home" });
        },
        err => {
          this.error = err.body.message;
        }
      );
    }
  }
};
</script>

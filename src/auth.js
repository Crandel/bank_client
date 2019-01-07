import router from "./router.js";
import api from "./api.js";

const JWT = "jwt_id";

export default {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(api.login, creds).then(
      data => {
        localStorage.setItem(JWT, data.body.token),
          (this.user.authenticated = true);

        if (redirect) {
          router.push({ name: redirect });
        }
      },
      err => {
        context.error = err.body;
      }
    );
  },

  signup(context, creds, redirect) {
    context.$http.post(api.signup, creds).then(
      data => {
        localStorage.setItem(JWT, data.data.token);

        this.user.authenticated = true;

        if (redirect) {
          router.push({ name: redirect });
        }
      },
      err => {
        context.error = err.body.message;
      }
    );
  },

  logout() {
    localStorage.removeItem(JWT);
    this.user.authenticated = false;
  },

  checkAuth() {
    const token = localStorage.getItem(JWT);
    if (token) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader() {
    return {
      Authorization: "Token " + localStorage.getItem(JWT)
    };
  }
};

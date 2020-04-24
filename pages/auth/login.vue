<template>
<div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <img src="/login/pic-login.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Selamat datang di Aplikasi</h3>
              <h3 class="login-heading mb-4 text-success"><b>Pelaporan Covid-19</b></h3>
              <form @submit.prevent="login" @keydown="form.onKeydown($event)"> 
                <div class="form-label-group">
                  <input
                    id="inputEmail"
                    v-model="form.email"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email address"
                    required autofocus>
                  <has-error :form="form" field="email" />
                  <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                  <input
                    id="inputPassword"
                    v-model="form.password"
                    :class="{ 'is-invalid':
                    form.errors.has('password') }"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control"
                    required>
                  <has-error :form="form" field="password" />
                  <label for="inputPassword">Password</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <checkbox v-model="remember" name="remember">
                    {{ $t('remember_me') }}
                  </checkbox>
                </div>

                <!-- Submit Button -->
                <v-button
                  type="submit"
                  class="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2"
                  :loading="form.busy">
                  {{ $t('login') }}
                </v-button>


                  <div class="col-md-12 d-flex">
                    <!-- GitHub Login Button -->
                    <login-with-github />
                    <!-- Keycloak Login Button -->
                    <login-with-keycloak />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Form from 'vform'

export default {
  head () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      let data

      // Submit the form.
      try {
        const response = await this.form.post('/login')
        data = response.data
      } catch (e) {
        return
      }

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scope>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  /* background-image: url('/login/pic-login.svg'); */
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
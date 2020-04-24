<template>
      <b-nav-item-dropdown right no-caret>
        <template
          slot="button-content">

          <img
            src="~static/img/logo.svg"
            class="img-avatar"
            alt="admin@bootstrapmaster.com">
  
        </template>

        <b-dropdown-header
          tag="div"
          class="text-center">
          <strong>Account</strong>
        </b-dropdown-header>

        <b-dropdown-item 
          @click="logout">
          <i class="fa fa-lock"></i> Logout
        </b-dropdown-item>

      </b-nav-item-dropdown>
</template>

<script>
  export default {
    name: 'header-dropdown',
    data: () => {
      return { itemsCount: 42 }
    },
    methods: {
      async logout () {
        // Log out the user.
        await this.$store.dispatch('auth/logout')

        // Redirect to login.
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>


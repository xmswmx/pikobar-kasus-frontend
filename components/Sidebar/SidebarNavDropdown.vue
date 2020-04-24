<template>
  <router-link
    tag="li"
    class="nav-item nav-dropdown"
    :to="url"
    disabled>
    
    <div
      class="nav-link nav-dropdown-toggle"
      @click="handleClick"
    >
      <b-icon
        :icon="icon"
        font-scale="1">
      </b-icon>
      {{name}}
    </div>
    <ul class="nav-dropdown-items">
      <slot></slot>
    </ul>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

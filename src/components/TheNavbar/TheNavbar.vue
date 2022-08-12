<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><a href="/dashboard">Главная</a></li>
      <li>
        <a custom to="/mail">Почта</a>
      </li>
      <li><router-link to="/login" @click="logout">Выйти</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject: ["logout"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

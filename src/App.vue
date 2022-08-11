<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <login-page></login-page>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import LoginPage from "./views/LoginPage";

export default {
  components: { TheNavbar, LoginPage },
  provide() {
    return {
      emails: [
        { id: 1, theme: "Купил себе PlayStation 5" },
        { id: 2, theme: "Выучил Vue Router" },
        { id: 3, theme: "Хочу изучить весь Vue" },
        { id: 4, theme: "А следующий блок про Vuex!" },
        { id: 5, theme: "А что там на счет Vue Hooks?" },
      ],
    };
  },
};
</script>

<style></style>

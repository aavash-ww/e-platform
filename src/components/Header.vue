<template>
  <header class="top-header bg-white ">
    <nav class="navbar container">
      <Logo />
      <ul class="navbar__links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contacts</router-link></li>
      </ul>
      <img src="/src/assets/icons/burger-menu.svg" alt="menu-icon" class="navbar__burger-menu" />
    </nav>
  </header>
</template>

<script>
  import Logo from './Logo.vue';
export default {
  components: {
    Logo,
  }
};
</script>
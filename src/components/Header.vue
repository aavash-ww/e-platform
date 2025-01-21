<template>
  <header class="top-header bg-white ">
    <nav class="navbar container">
      <router-link to="/"><Logo /></router-link> 
      <div class="navbar__links">
        <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contacts</router-link></li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/">Portfolio</router-link></li>
      </ul>
      <span class="signup"> <router-link to="/register">Sign Up</router-link> </span>
      </div>
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
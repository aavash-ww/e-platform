<template>
    <div v-for="(item, index) in profileData" :key="index" class="profile-wrapper">
      <div class="first-profile">
        <div class="text">
          <h5 >{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </div>
        <div class="image">
          <img :src="item.image" alt="" />
        </div>
        <div class="icon">
          <img :src="item.icon" alt="" />
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
  import profileData from "../data/profiledata.json";
  export default {
    name: "Profile",
    data() {
      return { profileData };
    },
  };
  </script>
  
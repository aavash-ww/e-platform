<template>
        <!-- Hero Section -->
        <section class="hero bg-primary">
            <div class="container">

                <Slider>
                    <h1 class="hero-quote bg-primary text-white">Lessons & Practice</h1>

                    <div class="hero-card-grid">
                        <Herocard />
                    </div>
                </Slider>
            </div>

        </section>

        <!-- Partners Section -->
        <section class="partners-section bg-primary">
            <div class="partner-wrapper container text-white">
                <div class="title-text">
                    <h2>Meet some of our partners!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores deleniti distinctio cumque!
                        Tenetur deleniti distinctio dicta rem eveniet </p>
                </div>
                <Carousel />
            </div>
        </section>

        <!-- Mission Section  -->
        <section class="mission-section bg-primary">
            <div class=" mission-container container">
                <div class="image-wrapper">
                    <img src="/src/assets/images/columnimage.avif" alt="Sample Image" class="image" />
                </div>
                <div class="mission-wrapper text-white">
                    <div v-for="(item, index) in data" :key="index" class="mission-points">
                        <div class="mission-icons">
                            <img :src="item.icon" alt="">
                        </div>
                        <div class="mission-content">
                            <h6>{{ item.title }}</h6>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Profile Section  -->
        <section class="profile-container ">
            <div class="profile-main container">
                <Profile />
            </div>
        </section>
        <!-- Last Section  -->
        <section class="last-section bg-primary">
            <div class=" last-wrapper">
                <div class="image-part">
                    <div class="quotation">
                        <img src="/src/assets/icons/quotation.svg" alt="">
                    </div>
                    <div class="girl-image">
                        <img src="/src/assets/images/thinking.jpg" alt="">
                    </div>
                </div>
                <div class="description bg-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero sit possimus illo aperiam cum
                        nisi nihil exercit error adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Porro, suscipit.</p>
                </div>
                <p>- May Hawkes, General Manager Operations -</p>
            </div>
        </section>
</template>

<script>
import Herocard from '../components/cards/Herocard.vue';
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
import Carousel from '../components/Carousel.vue';
import Profile from '../components/Profile.vue';
import data from '../data/missioncard.json'


export default {
    name: "Homepage",
    data() {
        return { data }
    },
    components: {
        Carousel,
        Herocard,
        Slider,
        Profile,
        Header
    },

}
</script>
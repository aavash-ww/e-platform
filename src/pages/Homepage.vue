<template>
    <Layout>
        <!-- Hero Section -->
        <section class="hero bg-primary">
            <div class="hero__wrapper container">
                <div class="hero-content">
                    <h1 class="hero-quote bg-primary text-white">Lessons & Practice</h1>
                    <!-- Card  -->
                    <div class="hero-card-grid">
                        <Herocard />
                    </div>
                </div>
                
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
                <div class="partner-card-grid">
                    <Partnercard />
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import Layout from '../Layout.vue'
import Partnercard from '../components/cards/Partnercard.vue'
import Herocard from '../components/cards/Herocard.vue';

export default {
    name: "Homepage",
    components: {
        Layout,
        Partnercard,
        Herocard,
    },

}
</script>
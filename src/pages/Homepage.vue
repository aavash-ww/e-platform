<template>
    <Layout>
        <!-- Hero Section -->
        <section class="hero bg-primary">
            <div class="hero__wrapper container">
                <div class="hero-content">
                    <h1 class="hero-quote bg-primary text-white">Lessons & Practice</h1>

                    <!-- Card  -->
                    <div class="hero-card-grid">
                        <div class="hero-card bg-white">
                            <div class="hero-card-icon">
                                <img src="/src/assets/icons/maths.svg" alt="" />
                            </div>
                            <h5 class="text-primary">Maths</h5>
                        </div>
                        <div class="hero-card bg-white">
                            <div class="hero-card-icon">
                                <img src="/src/assets/icons/physics.svg " alt="" />
                            </div>
                            <h5 class="text-primary">Physics</h5>
                        </div>
                        <div class="hero-card bg-white">
                            <div class="hero-card-icon">
                                <img src="/src/assets/icons/medicine.svg" alt="" />
                            </div>
                            <h5 class="text-primary">Medicine</h5>
                        </div>
                        <div class="hero-card bg-white">
                            <div class="hero-card-icon">
                                <img src="/src/assets/icons/english.svg" alt="" />
                            </div>
                            <h5 class="text-primary">English</h5>
                        </div>
                        <div class="hero-card bg-white">
                            <div class="hero-card-icon">
                                <img src="/src/assets/icons/technology.svg " alt="" />
                            </div>
                            <h5 class="text-primary">Technology</h5>
                        </div>
                        <div class="hero-card bg-white">
                            <div class="hero-card-icon">
                                <img src="/src/assets/icons/engineering.svg" alt="" />
                            </div>
                            <h5 class="text-primary">Engineering</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import Layout from '../Layout.vue'
export default {
    components: {
        Layout,
    }
}
</script>
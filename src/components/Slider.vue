<template>

    <!-- Background Image Slider -->
    <div id="slider" class="slider-container" :style="{ backgroundImage: `url(${images[currentIndex]})` }">
        <!-- Slider content  -->
        <div class="slider-content">
            <slot></slot>
            <!-- Buttons -->
        </div>
        <div class="button-container">
            <button v-for="(image, index) in images" :key="index" class="slider-btn"
                :class="{ active: index === currentIndex }" @click="onButtonClick(index)">

            </button>
        </div>
    </div>

</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            images: [
                "/src/assets/images/final.jpg",
                "/src/assets/images/slider1.jpg",
                "/src/assets/images/slider2.jpg",
                "/src/assets/images/slider3.jpg",
                "/src/assets/images/slider4.jpg",

            ],
            currentIndex: 0,
            autoSlideInterval: null,
        };
    },
    methods: {

        onButtonClick(index) {
            clearInterval(this.autoSlideInterval);
            this.currentIndex = index;
            this.startAutoSlide();
        },

        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 4000);
        },
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        clearInterval(this.autoSlideInterval);
    },
};
</script>
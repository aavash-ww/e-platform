<template>
    <div class="slider-container">
        <div class="slider" ref="slider">
            <!-- Cards  -->
            <div class="card" v-for="(sliderData, index) in sliderDataSets" :key="index">
                <div class="card-wrapper text-black">

                    <img class="card-image" :src="sliderData.image" :alt="sliderData.title">
                    <div class="card-content">
                        <h4>{{ sliderData.title }}</h4>
                        <p>{{ sliderData.description }}</p>
                        <a href="#">MORE</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="nav-btn prev" @click="scrollLeft">❮</button>
        <button class="nav-btn next" @click="scrollRight">❯</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sliderDataSets: [
                {
                    image: "/src/assets/images/partnercard1.jpeg",
                    title: "Art School Australia",
                    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                },
                {
                    image: "/src/assets/images/partnercard2.jpeg",
                    title: "University of London",
                    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                },
                {
                    image: "/src/assets/images/avatarimg4.jpg",
                    title: "Art School Australia",
                    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                },
                {
                    image: "/src/assets/images/partnercard1.jpeg",
                    title: "Art School Australia",
                    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                },
                {
                    image: "/src/assets/images/partnercard1.jpeg",
                    title: "Art School Australia",
                    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                },
                {
                    image: "/src/assets/images/partnercard1.jpeg",
                    title: "Art School Australia",
                    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                },
                // Add more offers here
            ],
        };
    },
    methods: {
        scrollLeft() {
            const slider = this.$refs.slider;
            slider.scrollBy({
                left: -slider.offsetWidth,
                behavior: "smooth",
            });
        },
        scrollRight() {
            const slider = this.$refs.slider;
            slider.scrollBy({
                left: slider.offsetWidth,
                behavior: "smooth",
            });
        },
    },
};
</script>
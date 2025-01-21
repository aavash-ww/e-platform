<template>
    <footer class="footer-section bg-dark-gray">
        <div class="footer-wrapper container">
            <div class="footer-grid text-white">
                <!-- Company  -->
                <div v-for="(item, index) in company" :key="index" class="company">
                    <h5>{{ item.title }}</h5>
                    <ul v-for="li in item.list" :key="li">
                        <li>{{ li }}</li>
                    </ul>
                </div>
                <!-- Categories  -->
                <div v-for="(item, index) in categories" :key="index" class="categories">
                    <h5>{{ item.title }}</h5>
                    <ul v-for="li in item.list" :key="li">
                        <li>{{ li }}</li>
                    </ul>
                </div>
                <!-- Help  -->
                <div v-for="(item, index) in help" :key="index" class="help">
                    <h5>{{ item.title }}</h5>
                    <ul v-for="li in item.list" :key="li">
                        <li>{{ li }}</li>
                    </ul>
                </div>
                <!-- Contact  -->
                <div v-for="(item, index) in contact" :key="index" class="contact">
                    <h5>{{ item.title }}</h5>
                    <div class="icon-wrapper">
                        <ul>
                            <li v-for="li in item.list" :key="li">{{ li }}</li>
                        </ul>
                    </div>


                </div>
            </div>
            <!-- Copyright  -->
            <div class="copyright text-gray">
                <small>&copy;2025 W3 Web Tech, All Copyrights reserved</small>
            </div>
        </div>
    </footer>
</template>

<script>

import data from '../data/footer.json'
export default {
    name: "Footer",
    data() {
        return {
            company: data.company,
            categories: data.categories,
            help: data.help,
            contact: data.contact
        }
    }
}
</script>
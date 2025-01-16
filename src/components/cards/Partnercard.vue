<template>
    <div v-for="(card, index) in partnercard" :key="index" class="partner-card bg-white">
        <img :src="card.image" :alt="card.title" class="partner-card-image">
        <div class="partner-card-content text-black">
            <h4>{{ card.title }}</h4>
            <p>{{ card.description }}</p>
            <a href="#">MORE</a>
        </div>
    </div>
</template>

<script>
import partnercard from '../../data/partnercard.json'
export default {
    name: "Partnercard",
    data() {
        return {
            partnercard,
            
        }
    }
}
console.log("Card is rendered!")
</script>
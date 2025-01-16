<template>
    <div v-for="(card, index) in herocards" :key="index" class="hero-card bg-white">
        <div class="hero-card-icon">
            <img :src="card.icon" :alt="card.title" />
        </div>
        <h5 class="text-primary">{{ card.title }}</h5>
    </div>
</template>

<script>
import herocards from '../../data/herocard.json'

export default {
    name: "Partnercard",
    data(){
        return {
            herocards
        }
    }
}
</script>
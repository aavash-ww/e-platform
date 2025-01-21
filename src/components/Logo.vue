<template>
    <div class="logo-wrapper">
        <div class="logo-image">
            <img src="/src/assets/icons/logo.svg" alt="">
        </div>
        <h4 class="logo-text">
            W3 Web 
        </h4>
    </div>

</template>



<style>
.logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;


}

.logo-image {
    max-width: 42px;
    height: auto;

}

.logo-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo-text {
    font-family: "Orbitron", sans-serif;
    color: gray;
}
</style>

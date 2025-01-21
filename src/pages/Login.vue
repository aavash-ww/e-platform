<template>
    <div class="contact-main-wrapper">
        <div class="contact-main container ">
            <div class="contact-left">
                <h1>Welcome !<br> to </h1>
                <Logo class="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo? Sit praesentium totam atque
                    dolore. Debitis magnam dolores repellendus amet. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Nulla, quis.</p>
            </div>
            <div class="form-container">
                <form action="">
                    <div class="form-group">
                        <label for="name">Username</label>
                        <input type="email" placeholder="Enter mail id">
                    </div>
                    <div class="form-group">
                        <label for="name">Password</label>
                        <input type="password" placeholder="Enter passowrd">
                    </div>

                    <div class="form-group">

                        Are you registered yet? If not <router-link to="/register" class="text-primary">Register</router-link>
                    </div>
                    <div class="form-group">
                        <button type="submit">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {

    components: {
        Logo
    }
}
</script>
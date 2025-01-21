<template>
    <div class="contact-main-wrapper">
        <div class="contact-main container ">
            <div class="contact-left">
                <h1>Weclome !<br> to </h1>
                <Logo class="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo? Sit praesentium totam atque
                    dolore. Debitis magnam dolores repellendus amet. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Nulla, quis.</p>
            </div>
            <div class="form-container">
                <form action="">

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" placeholder="Enter Full name">
                    </div>
                    <div class="form-group">
                        <label for="name">Email</label>
                        <input type="email" placeholder="Enter valid mail id">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" placeholder="Enter passord">
                    </div>
                    <div class="form-group">
                        <label for="password">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password">
                    </div>
                    <div class="form-group">
                        Are you signed up already? If <router-link to="/login" class=text-primary>Login</router-link>
                    </div>

                    <div class="form-group">
                        <button>
                            Register
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
    name: "Contact",
    components: {
        Logo
    }
}
</script>
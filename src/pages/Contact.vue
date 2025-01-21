<template>
    <div class="contact-main-wrapper">
        <div class="contact-main container ">
            <div class="contact-left">
                <h1>Connect !<br> with </h1>
                <Logo class="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo? Sit praesentium totam atque dolore. Debitis magnam dolores repellendus amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quis.</p>
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
                        <label for="name">Message</label>
                        <textarea name="message" id=""></textarea>
                    </div>
                    <div class="form-group">
                        <input type="checkbox">
                        I accept the <a href="#" class=text-primary>Terms and Services</a>
                    </div>
                    <div class="form-group">
                        <button>
                            Submit
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
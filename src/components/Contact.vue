<template>
    <div class="contact">
        <h2 class="contact__heading">
            Get in Touch
        </h2>
        <p class="contact__detail">
            If you wanna get in touch, feel free to send an email on mehwishnizam01@gmail.com 
            or drop a message here :)
        </p>
        <form class="contact__form" @submit.prevent="sendMessage">
            <input type="text" class="name" required placeholder="Enter your name" v-model="name">
            <input type="email" class="email" required placeholder="Enter your email" v-model="email">
            <input  class="message" required placeholder="Write your message" v-model="message"/>
            <button class="send-btn" type="submit">
                Send Message
            </button>
        </form>
    </div>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
    data(){
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    methods:{
        sendMessage(e){
            var contactParams = {
                from_name: this.name,
                form_email : this.email,
                message: this.message,
            }
            console.log(contactParams);
            try {
            emailjs.send('service_at8vndn', 'template_9j13b8o', e.target,
            '2VemSJ1mMzEOw4YeW', contactParams );
        } catch(error) {
            console.log({error})
         }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
        }
    }
}
</script>
<style lang="scss" scoped>
.contact{
    text-align: center;
    width: 50%;
    margin: 0 auto;
    &__heading{
        font-size: 3rem;
        color: #4fcdb5;
        font-family: Roboto-bold;
    }
    &__detail{
        font-size: 2rem;
        color: #ccd6f6;
    }
    &__form{
        display: flex;
        flex-direction: column;
        .name, .email, .message{
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #ccd6f6;
            margin: 0 auto .7rem;
            text-align: center;
            padding: 1rem 1rem .5rem;
            width: 80%;
            &:focus-within{
                outline: none;
                border-bottom: 2px solid #4fcdb5;
            }
        }
        .send-btn{
            background-color: #4fcdb5;
            color: #0a192f;
            border: none;
            outline: none;
            width: 40%;
            padding: 1rem;
            margin: 4rem auto 0;
            font-family: Roboto-bold;
            cursor: pointer;
        }
    }
}
@media screen and (max-width: 600px) {
.contact{
    width: 70%;
}
}
</style>
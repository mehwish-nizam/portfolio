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
                <transition name="v-btn-label" mode="out-in">
                    <div v-if="loading">
                        <span class="spinner"></span>
                    </div>
                    <span v-else>
                        <slot>Send Message</slot>
                    </span>
                </transition>
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
            loading: false,
        }
    },
    methods:{
        async sendMessage(){
            this.loading = true;
            try {
                await emailjs.send('service_at8vndn', 'template_6jsm1mx',  {
                    message: this.message,
                    from_name: this.name,
                    reply_to: this.email
                },
                '2VemSJ1mMzEOw4YeW').then(()=> {
                    this.$swal('Email Sent', 'Email successfully sent to Mehwish', 'success');
                })

        } catch(error) {
            this.$swal('Error', 'Unable to send email. Please try again', 'error');
        }
        this.loading = false;
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
            .spinner {
                display: inline-block;
                margin: 0 8px;
                border-radius: 50%;
                width: 1.5em;
                height: 1.5em;
                border: .215em solid transparent;
                vertical-align: middle;
                font-size: 16px;
                border-top-color: #0a192f;
                animation: spin 1s cubic-bezier(.55, .15, .45, .85) infinite;
            }
            .v-btn-label-enter-active {
                animation: slide-in-down 260ms cubic-bezier(.0, .0, .2, 1);
            }

            .v-btn-label-leave-active {
                animation: slide-out-down 260ms cubic-bezier(.4, .0, 1, 1);
            }


            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes slide-in-down {
                0% {
                    transform: translateY(-20px);
                    opacity: 0;
                }

                50% {
                    opacity: .8;
                }

                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            @keyframes slide-out-down {
                0% {
                    transform: translateY(0);
                    opacity: 1;
                }

                40% {
                    opacity: .2;
                }

                100% {
                    transform: translateY(20px);
                    opacity: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 600px) {
.contact{
    width: 70%;
}
}
</style>
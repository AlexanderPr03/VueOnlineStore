<template lang="html">
    <div class="contact-form">
        <h2>Contactați-ne!</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nume:</label>
                <input type="text" id="name" name="name" placeholder="Nume" v-model="formData.name" required>

            </div>

            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" v-model="formData.email" required>
            </div>

            <div class="contact-form-textarea">
                <label for="message">Mesaj:</label>
                <textarea id="message"  v-model="formData.message" required placeholder="Mesaj"></textarea>
            </div>

            <button type="submit">Transmite mesajul!</button>
        </form>

        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';


import { supabase } from '../lib/supabaseClient'



@Options({
    name: 'ContactFormComponent',
    data() {
        return {
            formData: {
                name:'',
                email:'',
                message:''   
            },
            successMessage:''
        }
    },
    methods: {
        async submitForm() {
            const response = await supabase.from('messages').insert([this.formData]);
            if (response.status === 200 || response.status === 201) {
                this.successMessage = 'Mulțumim pentru mesaj! Vom reveni cu un răspuns în scurt timp.';

                setTimeout(() => {
                    this.successMessage = '';
                }, 5000)

                this.resetForm();
            } else {
                alert('A aparut o eroare');
            }
        },

        resetForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        }
    }
})
export default class ContactFormComponent extends Vue {
    
}
</script>

<style lang="css" scoped>
   .contact-form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 12px;
        margin-top: 50px;
   }
   .contact-form h2 {
        text-align: center;
        margin-bottom: 15px;
   }
   .contact-form label {
    margin-right: 10px;

   }

   .contact-form input {
        height: 30px;
        width: 80%;
        margin-bottom: 20px;
        border-radius: 12px;
        border:none;
        background-color: rgb(230, 230, 230);
        padding: 5px 15px;
        font-weight: bold;
   }
   .contact-form-textarea {
    display: flex;
    justify-content: center;
   }
   .contact-form textarea {
        height: 100px;
        width: 80%;
        margin-bottom: 20px;
        border-radius: 12px;
        border:none;
        background-color: rgb(230, 230, 230);
        padding: 5px 15px;
        font-weight: bold;
   }
   .contact-form button {
        width: 100%;
        padding: 10px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
   }
   .contact-form button:hover {
    background-color: rgb(51, 51, 51);
   }
</style>



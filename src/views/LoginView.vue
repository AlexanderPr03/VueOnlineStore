<template>
    <div id="container">
        <form>
            <input type="text" name="username" v-model="username">
            <input type="password" name="password" v-model="password">
        </form>    
        <button @click="handleLogin">Login</button>
    </div>
 </template>
   
 <script lang="ts">
import { Options, Vue } from 'vue-class-component';
import api from '@/api/api';
import { login } from '@/auth/auth';
@Options({
    methods: {
        handleLogin() {
            if (this.username === 'Alexandru' && this.password === '12345') {
                login();
                this.$router.push({name: 'Dashboard'})
            }
        },
    },
    data() {
        return {    
            username:null,
            password:null,
        }
    }
})
 export default class LoginView extends Vue {}
 </script>
 
 <style scoped>


</style>
   
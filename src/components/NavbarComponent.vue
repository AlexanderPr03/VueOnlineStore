<template lang="html">



    <header>
        <nav>
            <ul class="menu-list">
                <li>
         
                        <div class="box" @mouseover="isHovered = true" 
                        @mouseleave="isHovered = false">
                            <router-link
                                :class="{ 'bouncy': isHovered }"
                                class="menu-link box" to="/home">
                                        {{ $t('menu_link_1') }}
                            </router-link> 
                        </div>
                        
                    
                 
                </li>
                <li>
                    <router-link
                        @mouseover="isHovered = true" 
                        @mouseleave="isHovered = false"
                    class="menu-link" to="/about">{{ $t('menu_link_2') }}</router-link>
                </li>
                <li>
                    <router-link 
                        @mouseover="isHovered = true" 
                        @mouseleave="isHovered = false"
                    class="menu-link box"  to="/dashboard">{{ $t('menu_link_3') }}</router-link>
                </li>
                <li>
                    <select v-model="locale" @change="changeLocale">
                        <option value="ro">Română</option>
                        <option value="en">Engleză</option>
                    </select>
                </li>
                <!-- <p>{{ $tc('mere', nrMere, {count: nrMere} ) }}</p> -->
            </ul>
            
            <input :placeholder="$t('search_bar_text')" id="search-bar" type="search">
            <div class="navbar-icons">
                <img class="navbar-icon" src="../assets/shopping.png">
                <img class="navbar-icon" src="../assets/user.png">
            </div>
    </nav>
    </header>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'NavbarComponent',
    data() {
        return {
            isHovered: true,
            locale: 'ro',
            nrMere:1
        }
    },
    methods: {
        changeLocale() {
            this.$i18n.locale = this.locale; 
        }
    }
})
export default class NavbarComponent extends Vue {

}
</script>

<style lang="css" scoped>
    header {
        height: 10vh;
        width: 100%;
        background-color: black;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        padding: 0 5%;
        box-sizing: border-box;
    }
    .menu-list {
        display: flex;
        font-size: 20px;
        gap: 25px;
        list-style: none;
    }
    .menu-link {
        color: white;
    }
    .v-enter-from, .v-leave-from {
        transform: scale(1.0);
    }
    .v-enter-active, .v-leave-active {
        transition: all 0.5s ease-in-out;
        transform: scale(1.2);
    }
    .v-enter-to, .v-leave-to {
        transform: scale(1.0);
    }
    /* @keyframes bounce {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
    .bouncy {
        display: inline-block;
        animation: bounce 0.2s;
    } */

    nav {
        display: flex;
        align-items: center;
        gap: 30px;
        width: 100%;
    }
    #search-bar {
        min-width: 200px;
        width: 40vw;
        height: 35px;
        border: none;
        border-radius: 12px;
        font-size: 20px;
        padding: 5px 10px;
    }
    .navbar-icons {
        display: flex;
        float: right;
        align-items: center;
        gap: 35px;
        height: 10vh;
        margin-right: 0;
        margin-left: auto;
    }
    .navbar-icon {
        height: 50%;
        cursor: pointer;
        filter: invert(1);
    }
</style>


<!-- 1) Crearea componentului -->
<!-- 2) Montarea Componentului -->
<!-- 3) Actualizarea Componentului -->
<!-- 4) Distrugerea Componentului -->
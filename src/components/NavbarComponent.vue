<template lang="html">
    <header>
        <nav>
            <ul class="menu-list">
                <li>
                    <Transition>
                        <router-link
                                    @mouseover="isHovered = true" 
                                    @mouseleave="isHovered = false"
                        class="menu-link" to="/home">Homepage</router-link>
                    
                    </Transition>
                </li>
                <li>
                    <router-link
                        @mouseover="isHovered = true" 
                        @mouseleave="isHovered = false"
                    class="menu-link" to="/about">About page</router-link>
                </li>
                <li>
                    <router-link 
                        @mouseover="isHovered = true" 
                        @mouseleave="isHovered = false"
                    class="menu-link" to="/dashboard">Dashboard</router-link>
                </li>
            </ul>
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
</style>


<!-- 1) Crearea componentului -->
<!-- 2) Montarea Componentului -->
<!-- 3) Actualizarea Componentului -->
<!-- 4) Distrugerea Componentului -->
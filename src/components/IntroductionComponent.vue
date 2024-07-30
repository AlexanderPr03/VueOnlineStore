<template lang="html">
    <section id="introduction">

    </section>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'IntroductionComponent',
    data() {
        return {
        }
    },

    methods: {

    }
})
export default class IntroductionComponent extends Vue {

}
</script>

<style lang="css" scoped>
   #introduction {
    height: 80vh;
    border: 1px solid black;
    margin-bottom: 20px;
   }
</style>


<!-- 1) Crearea componentului -->
<!-- 2) Montarea Componentului -->
<!-- 3) Actualizarea Componentului -->
<!-- 4) Distrugerea Componentului -->
<template>
    <div class="home full">
        <!-- Header -->
        <header class="masthead grid__cell--xs--1-1" style="height: 8%">
            <div class="wrap--guttered">
                <img src="../assets/logo.png" class="logo"/>
                <span class="h3">Logo</span>
            </div>
        </header>

        <!-- Content -->
        <div class="wrap full" style="height: 92%">
            <div class="grid__cell--xs--1-5 cbl h100 float--left p16">
                <ul>
                    <li>
                        <router-link :to="{ name: 'pagea', params: { userId: 123 }}">PageA</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'pageb', params: { userId: 123 }}">PageB</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'pagec', params: { userId: 123 }}">PageC</router-link>
                    </li>
                </ul>
            </div>
            <div class="grid__cell--xs--4-5 h100 float--right p16">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
//        router,
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    header{
        background-color: #f60;
        color: #fff;
    }
    .logo{
        width: 30px;
        height: 30px;
    }
    .cbl{
        background-color: #f8f8f8;
    }
    .h100{
        height: 100%;
    }
    .full {
        width: 100%;
        height: 100%;
        display: block;
    }
    .p16{
        padding: 16px;
    }
</style>

<template>
    <div id="pagea" class="full pagea">
        <h2>page a..</h2>
        <div class="full">
            <div class="h100 float--left cbl">
                <ul>
                    <li>
                        <router-link :to="{ name: 'a1', params: { userId: 123 }}" class="pra1">PageA1</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'a2', params: { userId: 123 }}" class="pra2">PageA2</router-link>
                    </li>
                </ul>
            </div>
            <div class="h100 float--left">
                <div class="stage_container"><router-view></router-view></div>
            </div>

            <div class="h100 float--right">

            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import VueResource from 'vue-resource'
    import PageA1 from './PageA1'
    import PageA2 from './PageA2'

    Vue.use(VueRouter);
    Vue.use(VueResource);

    const PageARoutes = [
        {path: '', component: PageA1, name: 'a1'},
        {path: 'a2', component: PageA2, name: 'a2'},
    ];

    export default {
        name: 'page_a',
        data () {
            return {
                msg: '...',
                routes: PageARoutes
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul{ margin: 0; padding:0}
    li{ list-style: none; margin-bottom: 10px;}

    .pagea {
        background-color: #eee;
    }
    .h100{
        height: 90%;
    }
    .cbl {
        background-color: #f8f8f8;
        padding: 10px;
    }
    .pra1 {
        width: 120px;
        height: 90px;
        display: block;
        background-color: #f90;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pra2 {
        width: 120px;
        height: 90px;
        display: block;
        background-color: #f09;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .stage_container{
        width: 600px;
        height: 450px;
    }
</style>

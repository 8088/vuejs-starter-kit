<template>
    <div id="pagea" class="full pagea">
        <h2>page a..</h2>
        <div class="full">
            <div class="cbl cl">
                <ul>
                    <li>
                        <router-link :to="{ name: 'a1', params: { userId: 123 }}" class="pra1">PageA1</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'a2', params: { userId: 123 }}" class="pra2">PageA2</router-link>
                    </li>
                </ul>
            </div>
            <div class="cbm cl">
                <router-view v-model="config"></router-view>
            </div>
            <div class="cbr cl">
                <config-form v-if="config" v-model="config"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import _ from 'lodash'
    import VueRouter from 'vue-router'
    import VueResource from 'vue-resource'
    import PageA1 from './PageA1'
    import PageA2 from './PageA2'
    import ConfigForm from '../../components/Form.vue'

//    Vue.use(VueRouter);
//    Vue.use(VueResource);

    const PageARoutes = [
        {path: '', component: PageA1, name: 'a1'},
        {path: 'a2', component: PageA2, name: 'a2'},
    ];

    export default {
        name: 'page_a',
        data () {
            return {
                msg: '...',
                routes: PageARoutes,
                config: null
            }
        },
        components: {
            ConfigForm
        },
        methods: {
            getData: _.debounce(
                function () {
                    var vm = this

                    vm.msg = 'loading...'
                    axios.get('./static/config.json')
                        .then(function (response) {
                            vm.config = response.data.config;
                            //test
                            vm.msg = vm.config.title;
                        })
                        .catch(function (err) {
                            vm.msg = 'Error! Could not reach the API. ' + err
                        })
                },
                500
            ),
            test(){
                this.config.titile='xxxxx';
            }

        },
        created: function () {
            this.getData();
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
        height: 100%;
    }
    .cbl {
        background-color: #f8f8f8;
        padding: 10px;
        width: 15%;
        height: 91.2%;
    }
    .cbm {
        width: 53.8%;
        height: 91.2%;
    }
    .cbr{
        background-color: #f8f8f8;
        padding: 10px;
        width: 30%;
        height: 91.2%;
    }
    .cl{
        display: inline-block;
        vertical-align: top;
    }
    .pra1 {
        height: 90px;
        display: block;
        background-color: #f90;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pra2 {
        height: 90px;
        display: block;
        background-color: #f09;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

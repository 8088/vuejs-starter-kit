<template>
    <div id="config-form" class="container">
        <h5>{{msg}}</h5>
        <div v-if="config" v-for="(v, k, i) in config">
            <label v-if="typeof v === 'string'">
                {{k}}: <input type="text" v-model="config[k]"/>
            </label>
            <label v-else-if="v instanceof Array">
                {{k}}:
                <hr/>
                <div v-for="item in v">
                    <label v-for="(iv, ik) in item" v-if="(item instanceof Object)&&(ik!=='right')" >
                        {{ik}}: <input type="text" v-model="item[ik]"/>
                    </label>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'config-form',
        props: {
            value: {
                type: Object,
                default: {}
            },
            cid: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                msg: `dynamic form with ${this.$props.cid}.json`,
                config: null
            }
        },
        created() {
            this.config = this.$props.value;
        },
        mounted () {
//            this.$el.appendChild('<input>1111</input>');
        },
        methods:{
            check(value){
                var reg = /.*\/[^\/]+\.[^\.]+$/;
                return reg.test(value);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        background: #fff;
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

/**
 * ConfigFrom
 * recursively create from with config, same to Form.vue
 *
 * Created by a8088.
 */
import Vue from 'vue'

var ConfigFrom = Vue.component('config-form', {
    template: `
        <div class="container">
            <div v-if="config" v-for="(v, k, i) in config">
                <label v-if="v instanceof Array">
                    {{k}}:
                    <hr/>
                    <div v-for="item in v">
                        <config-form v-if="item" :value="item" />
                    </div>
                </label>
                <label v-else-if="v instanceof Object">
                    <config-form v-if="v" :value="v" />
                </label>
                <label v-else-if="typeof v === 'string'">
                    {{k}}: <input type="text" v-model="config[k]"/>
                </label>
            </div>
        </div>
    `,
    model: {
        prop: 'value',
        event: 'change'
    },
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
    methods: {
        check(value){
            var reg = /.*\/[^\/]+\.[^\.]+$/;
            return reg.test(value);
        }
    }
    
})

export default ConfigFrom;

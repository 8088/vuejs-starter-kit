<template>
    <div class="full pagea">
        <h3>PageA2 get form data:</h3>
        <pre v-if="config" v-html="prettyJSON(config)"/>
    </div>
</template>

<script>
    export default {
        name: 'page_a2',
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {
                msg: '...',
                config: null
            }
        },
        watch: {
            // 如果 question 发生改变，这个函数就会运行
            value: function (v) {
                this.config = v;
            }
        },
        methods: {
            prettyJSON: function(json) {
                if (json) {
                    json = JSON.stringify(json, undefined, 4);
                    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
                    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                        var cls = 'number';
                        if (/^"/.test(match)) {
                            if (/:$/.test(match)) {
                                cls = 'key';
                            } else {
                                cls = 'string';
                            }
                        } else if (/true|false/.test(match)) {
                            cls = 'boolean';
                        } else if (/null/.test(match)) {
                            cls = 'null';
                        }
                        return '<span class="' + cls + '">' + match + '</span>';
                    });
                }
            }
        },
        created() {
            this.config = this.$props.value;
        },
        mounted (){
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    .pagea{
        background-color: #f09;
        color: #fff;
    }
</style>

<template>
    <div>
        <h4>监听storage接收的通讯值：{{storageVal}}</h4>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                storageVal: ''
            };
        },
        methods: {},
        mounted() {
            window.addEventListener('storage', event => {
                if (event.key === 'connection') {
                    this.storageVal = event.newValue;
                }
            });
            
        }
    };
</script>

<style>
</style>
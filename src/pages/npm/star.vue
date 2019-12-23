<template>
    <div>
        五星评分使用
        <star-rate
            @change="change"
            :rate="rate"
            :half="true"
            :stars="[0,1,3,4,5]"
            info="请给我五星评价呀"
            :texts="[
                    '非常不满意，体验很差!',
                    '不满意，体验不佳!',
                    '一般，还需改善!',
                    '满意!!!',
                    '非常满意，无可挑剔!!!'
                ]"
        ></star-rate>
        <question
            icon="error"
            title="本次置业中，您是否需要居理新房继续服务？"
            leftAnswer="不需要"
            rightAnswer="需要"
            @getAnswer="getAnswer"
        ></question>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 评价的星数 1-5
                rate: null,
                // 评价的星星实际值
                rateValue: null,
                answer: ''
            };
        },
        methods: {
            /**
             * @description: 评星组件返回的评星等级
             * @param {string} val 评星实际值0，1，3，4，5
             * @param {string} star 评星等级 1-5
             * @return:
             */
            change(val, star) {
                this.rateValue = val;
                this.rate = star;
            },
            /**
             * @description: 问题组件返回的问题答案
             * @param {string} val 问题答案 1正向 2负向
             * @return:
             */
            getAnswer(val) {
                // 是否继续服务  1不需要，2继续服务
                this.answer = val === '1' ? '2' : '1';
            }
        },
        mounted() {
        }
    };
</script>

<style scoped>
</style>
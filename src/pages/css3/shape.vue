<!--
 * @author: kangxue
 * @Date: 2022-01-07 18:03:16
 * @LastEditors: kangxue
 * @LastEditTime: 2022-01-07 18:12:33
 * @description: file content
-->
<template>
    <div>
        <div class="shape-box">
            <img src='https://images.unsplash.com/photo-1524303676975-5989d34c6854'>
            https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
            river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name
            of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because
            there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't
            listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached
            the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove,
            the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran
            over her cheek, then
        </div>
        <div class="box">
            <p>
                If I know what love is
                <br />it is because of you
            </p>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>
<style lang="less" scoped>
.shape-box {
    width: 760px;
    text-align: justify;
    margin: 100px auto;
    background-color: #000;
    color: #fff;

    img {
        width: 600px;
        float: left;
        shape-outside: circle(36%);
        shape-margin: 30px;
    }
}
.box {
    width: 100%;
    height: 500px;
    background: url(https://images.unsplash.com/photo-1581938165093-050aeb5ef218) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    padding: 20px 40px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    backdrop-filter: blur(20px);
    color: white;
}
</style>
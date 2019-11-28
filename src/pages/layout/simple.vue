<template>
    <div>
        <div class="header">header</div>
        <div class="content">
            <div>header,content和footer等宽的单列布局</div>
            <div>header和footer等宽，content窄的单列布局</div>
        </div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
export default {
    
};
</script>
<style scoped lang="less">
.header,
.footer {
    height: 100px;
    line-height: 100px;
    background-color: #a0b3d6;
    color: #fff;
    text-align: center;
    margin: 0 auto;
}
.content {
    margin: 0 auto;
    height: 400px;
    background-color: #f1f2f3;
}
.footer {
    background-color: #333;
}
</style>

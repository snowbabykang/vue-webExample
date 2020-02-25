<template>
    <div>
        <h3>PPT预览</h3>
        <iframe
            src='https://view.officeapps.live.com/op/view.aspx?src=http://comjia-1.oss-cn-beijing.aliyuncs.com/developer/20200221/20200221020121_jfym.pptx'
            width='100%'
            height='600'
            frameborder='1'
        >
        </iframe>

        <!-- <iframe src="https://docs.google.com/viewer?url=http://comjia-1.oss-cn-beijing.aliyuncs.com/developer/20200221/20200221020121_jfym.pptx"></iframe> -->
        <!-- <iframe
            :src="'//www.xdocin.com/xdoc?_func=to&_format=html&_cache=1&_xdoc='+fileUrl"
            width="100%"
            height="600"
            frameborder="0"
        >
        </iframe> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ppt: '../../../static/ppt/svg.pptx',
                fileUrl:
                    'http://comjia-1.oss-cn-beijing.aliyuncs.com/developer/20200221/20200221020121_jfym.pptx'
            };
        },
        mounted() {
            console.log(this.ppt);
        }
    };
</script>

<style>
</style>
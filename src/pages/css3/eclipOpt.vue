<template>
    <div>
        <div class="content-box">
            <div class="top-prove">原本展示模样</div>
            <div class="text-box">
                <div class="text-desc total-desc">
                    <div class="text-con">
                        {{content}}
                    </div>
                </div>
            </div>
        </div>
        <div class="content-box">
            <div class="top-prove">为了证明楼下的那货不会对我造成影响</div>
            <div class="text-box">
                <div
                    class="text-desc"
                    :class="isOpen ? 'total-desc' : ''"
                    :title="content"
                >
                    <div
                        class="text-con"
                        ref="desc"
                    >
                        {{content}}
                    </div>
                    <div
                        class="text-opt"
                        v-if="isBtn"
                        @click="change"
                    >{{isOpen ? '收起全文' : '展开全文'}}</div>
                </div>
            </div>
            <div class="bottom-prove">为了证明楼上的那货不会对我造成影响</div>
            <div class="change-buttom">
                <div
                    class="long"
                    @click="tryLong"
                >点这试试一段比较长的文字</div>
                <div
                    class="short"
                    @click="tryShort"
                >点这试试一段比较短的文字</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 内容信息
                content: '',
                // 是否展示按钮
                isBtn: false,
                // 按钮样子
                isOpen: true
            };
        },
        methods: {
            change() {
                this.isOpen = !this.isOpen;
            },
            tryLong() {
                let longIntroduce =
                    'Vue是一套用于构建用户界面的渐进式框架。Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。';
                this.content = longIntroduce;
            },
            tryShort() {
                let shortIntroduce =
                    'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。';
                this.content = shortIntroduce;
            }
        },
        created() {
            this.content =
                '拥有财富、名声、权力，这世界上的一切的男人--哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。拥有财富、名声、权力，这世界上的一切的男人 “海贼王”哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。';
        },
        watch: {
            content(val) {
                this.$nextTick(() => {
                    let descHeight = window
                        .getComputedStyle(this.$refs.desc)
                        .height.replace('px', '');
                    let rem = window
                        .getComputedStyle(this.$refs.desc)
                        .lineHeight.replace('px', '');
                    // 超过了四行
                    if (descHeight > rem * 4) {
                        // 显示展开收起按钮
                        this.isBtn = true;
                        this.isOpen = false;
                    } else {
                        // 不显示展开收起按钮
                        this.isBtn = false;
                        this.isOpen = true;
                    }
                });
            }
        }
    };
</script>

<style lang="less" scoped>
.content-box {
    width: 400px;
    margin: 0 20px;
    float: left;
}
.text-box {
    background: #f3f6f9;
    padding: 16px;
    border-radius: 8px;
    .text-desc {
        position: relative;
        max-height: 96px;
        line-height: 24px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        .text-con {
            font-size: 16px;
            color: #77808a;
            line-height: 24px;
        }
        // 这是展开前实际显示的内容
        &:after,
        &:before {
            content: attr(title);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            font-size: 16px;
            color: #77808a;
            line-height: 24px;
            background: #f3f6f9;
        }
        // 把最后最后一行自身的上面三行遮住
        &:before {
            display: block;
            overflow: hidden;
            z-index: 1;
            max-height: 72px;
        }
        &:after {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            height: 96px;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-indent: -15em;
            padding-right: 5em;
        }
        &.total-desc {
            max-height: none;
        }
        &.total-desc:before {
            display: none;
        }
        &.total-desc:after {
            display: none;
        }
    }
    .text-opt {
        position: absolute;
        font-size: 16px;
        color: #00c0eb;
        line-height: 24px;
        bottom: 0px;
        right: 0;
        z-index: 10;
    }
}
</style>
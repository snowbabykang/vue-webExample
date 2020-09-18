<template>
    <div>
        <h3>主页面</h3>
        <child :foo="foo"
            :boo="boo"
            :coo="coo"
            :doo="doo"></child>
        <h3>测试$listeners</h3>
        <childcom :name="name"
            :age="age"
            :sex="sex"
            @testChangeName="changeName"></childcom>
    </div>
</template>

<script>
import child from './child';
export default {
    data() {
        return {
            foo: '参数1',
            boo: '参数2',
            coo: '参数3',
            doo: '参数4',
            name: '张三',
            age: '30',
            sex: '男'
        };
    },
    components: {
        child,
        childcom: {
            props: ['name'],
            template: `<div>
                <div>我是子组件   {{name}}</div>
                <grandcom v-bind="$attrs" v-on="$listeners"></grandcom>
            </div>`,
            components: {
                grandcom: {
                    template: `<div>我是孙组件-------<button @click="grandChangeName">改变名字</button></div>`,
                    methods: {
                        grandChangeName() {
                            this.$emit('testChangeName', 'kkkkkk');
                        }
                    }
                }
            }
        }
    },
    methods: {
        changeName(val) {
            this.name = val;
        }
    }
};
</script>
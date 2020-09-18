<template>
    <div>
        <h3>组件2</h3>
        姓：<input type="text"
            placeholder="firstName"
            v-model="firstName"><br>
        名：<input type="text"
            placeholder="lastName"
            v-model="lastName"><br>
        姓名1(单向):<input type="text"
            placeholder="FullName1"
            v-model="fullName1"><br>
        姓名2(双向):<input type="text"
            placeholder="FullName2"
            v-model="fullName2"><br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'A',
            lastName: 'B'
        };
    },
    computed: {
        fullName1() {
            return this.firstName + ' ' + this.lastName;
        },
        fullName2: {
            get() {
                return this.firstName + ' ' + this.lastName;
            },
            set(val) {
                const names = val.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    }
};
</script>

<style>
</style>
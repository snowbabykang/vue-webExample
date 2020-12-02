<script>
export default {
    props: {
        // v-model绑定的值
        value: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            newTag: ''
        };
    },
    methods: {
        addTag() {
            if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
                return;
            }
            this.$emit('input', [...this.value, this.newTag.trim()]);
            this.newTag = '';
        },
        removeTag(tag) {
            this.$emit(
                'input',
                this.value.filter(t => t !== tag)
            );
        }
    },
    render() {
        return this.$scopedSlots.default({
            tags: this.value,
            addTag: this.addTag,
            removeTag: this.removeTag,
            inputEvents: {
                input: e => {
                    this.newTag = e;
                },
                change: e => {
                    this.addTag();
                }
            },
            inputAttrs: this.newTag
        });
    }
};
</script>


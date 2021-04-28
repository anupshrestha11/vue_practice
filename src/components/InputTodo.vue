<template>
    <div class="input-container">
        <div class="input-box">
            <input
                type="text"
                v-model="desc"
                placeholder="Type Your Todo"
                @keyup.enter="pressed"
            />
            <button :class="isDisabled ? 'disabled' : ''" @click="pressed">
                {{ isAdding ? "Adding" : "Add" }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            desc: "",
            isDisabled: true,
        };
    },
    props: ["isAdding"],
    watch: {
        desc(val) {
            if (val) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
    },
    methods: {
        pressed() {
            if (this.isDisabled) return;
            if (this.isAdding) return;
            this.$emit("submitted", this.desc);
            this.desc = "";
        },
    },
};
</script>

<style lang="scss" scoped>
.input-container {
    display: flex;
    justify-content: center;
    margin: 20px;
    .input-box {
        display: flex;
        justify-content: center;
        border: 1px solid dodgerblue;

        width: 400px;
        transition: all 0.3s ease;
        &:focus-within {
            box-shadow: 0 0 20px 0px rgba(30, 143, 255, 0.267);
            transform: scale(1.3);
        }
        input {
            padding: 10px;
            font-size: 1rem;
            min-width: 300px;
            border: 0;
            outline: 0;
            color: hsl(210, 94%, 37%);
        }
        button {
            background-color: dodgerblue;
            color: #fff;
            border: 0;
            outline: 0;
            padding: 10px;
            width: 100%;
            transition: all 0.1s ease;
            &:hover {
                cursor: pointer;
                background-color: hsl(210, 100%, 36%);
            }
            &.disabled {
                background-color: hsl(210, 100%, 26%);
                cursor: not-allowed;
            }
        }
    }
}
</style>

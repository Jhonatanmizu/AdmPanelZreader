<template>
    <button :class="['icon-btn', {'edit-btn':  edit   }]" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    props: {
        handle: {
            type: Function,
            required: true,
            default() {
                console.log("ICON BTN");
            }
        },
        edit:Boolean
    },
    setup(props) {
        const state = reactive({
            count: 0,
        })
        const handleClick = () => {
            props.handle()
        }
        console.log("ICON BTN", props.handle);
        return {
            ...toRefs(state),
            handleClick
        }
    }
}
</script>

<style scoped>
.icon-btn {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    color: var(--secondary-color);
    background-color: var(--primary-color);
    box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
    border-radius: 0.625rem;
    font-size: 1.5rem;
    cursor: pointer;

}

.icon-btn:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}

.icon-btn:disabled {
    opacity: 0.7;
}

.icon-btn:hover {
    filter: brightness(110%);
}
.edit-btn{
    background-color: var(--green-color);

}
</style>
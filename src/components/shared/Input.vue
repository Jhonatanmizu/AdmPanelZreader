<template>
    <div class="input-container">
        <!-- <input type="text" name="" id=""> -->
        <input type="file" name="arquivos" class="btn btn-success" accept="image/png, image/jpeg" v-on:input="dataImage"
            multiple />
        <button>
            <i class="fas-solid fa-upload"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "InputComponent",
    props: {
        placeholder: String,
        upload: Boolean
    },
    data() {
        return {
            dataImage: null
        }
    },
    methods: {
        setImage(value) {
            this.dataImage = value
        }
    },
}
</script>
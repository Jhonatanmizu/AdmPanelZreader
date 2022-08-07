<template>
  <div class="input-container">
    <!-- <input type="text" name="" id=""> -->
    <img :src="imgPath" :alt="label" class="img" v-if="upload && imgPath" />
    <form class="form">
      <label for="generic" class="input__label">{{ label }}</label>
      <input
        v-show="upload"
        type="file"
        id="generic"
        name="photo"
        accept="image/png, image/jpeg"
        @change="onFileSelected($event)"
      />
      <input
        class="input-text"
        v-show="!upload"
        type="text"
        :name="label"
        :placeholder="placeholder"
        v-model="inputValue"
      />
    </form>

    <!-- <button>
            <i class="fas-solid fa-upload"></i>
        </button> -->
  </div>
</template>

<script>
export default {
  name: "InputGenComponent",

  props: {
    placeholder: String,
    upload: Boolean,
    label: String,
  },

  data() {
    return {
      selectedFile: null,
      inputValue: "",
      imgPath: null,
    };
  },
  methods: {
    setImage(value) {
      this.dataImage = value;
    },

    onFileSelected(event) {
      this.imgPath = URL.createObjectURL(event.target.files[0]);

      this.selectedFile = event.target.files[0];
    },
    sendToFather() {
      this.$emit();
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: ; */
  gap: 2rem;
  margin: 0.3rem 0;
}

.input-container .img {
  height: 10rem;
  width: 15rem;
  border-radius: 0.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.input-container .input__label {
  font-size: 2.8rem;
  text-transform: capitalize;
}

.input-container input {
  width: 56rem;
  border: none;
  /* border: 0.2rem solid var(--alt-color); */
  height: 4.5rem;
  border-radius: 0.5rem;
  outline: none;
}
.input-container .input-text {
  border: 0.2rem solid var(--alt-color);
  padding: 0.2rem;
}
</style>

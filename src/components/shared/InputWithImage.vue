<template>
  <div class="wrapper">
    <div class="image-wrapper">
      <img
        :src="'https://zreader.vercel.app/img/logo.979e52eb.svg'"
        ref="preview"
        :alt="placeholder"
        class="image"
      />
    </div>
    <div class="input__group">
      <label :for="label" class="input-label">
        {{ label }}
      </label>
      <input
        type="file"
        ref="fileinput"
        class="fileinput"
        accept="image/jpeg, image/png"
        :name="label"
        :id="label"
        :value="value"
        @change="previewFile"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputWithIcon",
  data() {
    return {
      outputData: "",
      selectedFile: "",
    };
  },
  props: {
    placeholder: String,
    label: String,
  },
  methods: {
    outputValue() {},
    previewFile(event) {
      console.log("EVENT", event.target.value);
      console.log("FILES", this.$refs.fileinput.files);
      this.selectedFile = event.target.files[0];
      console.log("SELECTED FILE", this.selectedFile);
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);

      reader.addEventListener(
        "load",
        () => {
          this.$refs.preview.src = reader.result;
        },
        false
      );
      this.$emit("outputData", {
        image: this.selectedFile,
        src: this.$refs.preview.src,
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  justify-content: flex-start;
}
.image-wrapper {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  height: 10rem;

  width: 10rem;
}
.image {
  min-width: 100%;
  border-radius: 0.5rem;
  min-height: 100%;
}
.fileinput {
  width: 100%;
}
@media screen and (max-width: 800px) {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>

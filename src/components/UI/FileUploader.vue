<template lang="pug">
.file-uploader.text-start
  input.file-uploader--hidden(
    :ref="'fileUploader'"
    type='file'
    accept='.jpeg, .jpg'
    name='file'
    id='file'
    @change='uploadSource'
  )
  label.file-uploader--fake-label(
    for='file'
  ) Upload
  .el-input {{ fileName || 'Upload your photo' }}
</template>

<script>
  export default {
    name: 'file-uploader',
    data() {
      return {
        file: null,
        fileName: null,
      }
    },
    methods: {
      uploadSource(event) {
        const file = event.target.files[0]
        this.fileName = file.name
        const reader = new FileReader()
        reader.onload = e => {
          this.file = e.target.result
          this.$emit('transfer-file', this.file)
        }
        reader.readAsDataURL(file)
      },
    },
  }
</script>
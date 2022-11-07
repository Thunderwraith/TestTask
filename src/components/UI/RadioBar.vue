<template lang="pug">
.radio-bar
  p Select your position
  .radio-wrapper
    .el-radio(
      v-for='item in data'
      :key='item.id'
    )
      Field.el-radio--hidden(
        type='radio'
        :name='name'
        :id='item.id'
        :value='item.id'
        @change="$emit('radio-value', value)"
        v-model='value'
      )
      .el-radio--fake-radio
      label.el-radio--label(
        :for='item.id'
      ) {{ item.name }}
</template>

<script>

  import { Field, ErrorMessage } from 'vee-validate'

  export default {
    name: 'radio-bar',
    props: {
      name: String,
      data: Array,
    },
    components: {
      Field,
      ErrorMessage,
    },
    data() {
      return {
        value: null,
      }
    },
  }
</script>
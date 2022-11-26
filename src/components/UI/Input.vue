<template lang="pug">
.control-wrapper
  ErrorMessage.validation-error(
    :name='name'
  )
  Field.el-input(
    v-if='!mask'
    :name='name'
    :id='name'
    :type='type'
    :placeholder='placeholder'
    :rules='rules'
    :value='value'
    @input='updateValue'
  )
  Field.el-input(
    v-else
    v-mask='mask'
    :name='name'
    :id='name'
    :type='type'
    :placeholder='placeholder'
    :rules='rules'
    :value='value'
    @input='updateValue'
  )
  label.input-wrapper--label(
    :for='name'
  ) {{ label }}
</template>

<script>

import { Field, ErrorMessage } from 'vee-validate'
import { mask } from 'vue-the-mask'

export default {
  name: 'control-input',
  directives: {
    mask,
  },
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    type: {
      default: 'text',
    },
    mask: {
      type: String,
      default: null,
    },
    name: {},
    placeholder: {},
    label: {},
    rules: {},
    value: {},
  },
  methods: {
    updateValue(e) {
      this.$emit('update:value', e.target.value)
    }
  }
}
</script>

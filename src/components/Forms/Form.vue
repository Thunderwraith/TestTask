<template lang="pug">
section.form-section.text-center
  p.text--size-xl.text--lh-lg.pa--b-xl Working with POST request
  Form.request-form(
    @submit='send'
  )
    .row
      .col-12(
        v-for='item, index in fields'
        :key='index'
      )
        .input-wrapper.text-start
          ErrorMessage(
            :name='item.name'
          )
          Field.el-input(
            :name='item.name'
            :rules='item.rules'
            :placeholder='item.placeholder'
            :class="{'ma--b-xl' : index+1 < fields.length}"
            v-model='form[item.name]'
          )
          p.input-wrapper--label.text-start {{ item.label }}
    radio-bar.text-start(
      name='position'
      :data='positions'
      @radio-value="form.position_id = $event"
    )
    file-uploader.ma--t-xl(
      @transfer-file="form.photo = $event"
    )
    button.btn.btn--inverse.ma--t-xl(
      type='submit'
    ) Sign up
</template>

<script>

  import { ENDPOINTS } from '../../requests/ENDPOINTS'
  import { Form, Field, ErrorMessage } from 'vee-validate'

  export default {
    name: 'vue-form',
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      return {
        positions: [],
        form: {
          name: null,
          email: null,
          phone: null,
          photo: null,
          position_id: null,
        },
        fields: [
          {
            name: 'name',
            placeholder: 'Your name',
            rules: 'required'
          },
          {
            name: 'email',
            placeholder: 'Email',
            rules: 'required|email'
          },
          {
            name: 'phone',
            placeholder: 'Phone',
            label: '+38 (XXX) XXX - XX - XX',
            rules: 'required|phone'
          }
        ],
      }
    },
    mounted() {
      this.getPosition()
    },
    methods: {
      send() {
        this.$axios.post(ENDPOINTS.USERS, this.form, {
          headers: {
            token: sessionStorage.token,
            'Content-Type': 'multipart/form-data',
          }
        })
          .then(() => {
            this.$emit('form-success')
          })
      },
      getPosition() {
        this.$axios.get(ENDPOINTS.POSITIONS)
          .then(({ data: { positions } }) => {
            this.positions = positions
          })
      },
    },
  }
</script>
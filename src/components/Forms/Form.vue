<template lang="pug">
section.form-section.text-center
  p.text--size-xl.text--lh-lg.pa--b-xl Working with POST request
  Form.request-form(
    ref='form'
    @submit='send'
  )
    .row
      .col-12(
        v-for='item, index in fields'
        :key='index'
      )
        control-input.text-start(
          :class="{'ma--b-xl' : index+1 < fields.length}"
          :name='item.name'
          :placeholder='item.placeholder'
          :label='item.label'
          :rules='item.rules'
          :mask='item.mask'
          v-model:value='form[item.name]'
        )
    radio-bar.text-start(
      name='position'
      :data='positions'
      @radio-value="form.position_id = $event"
    )
      ErrorMessage.validation-error(
        name='position_id'
      )
    file-uploader.ma--t-xl(
      @transfer-file="form.photo = $event"
    )
    ErrorMessage.validation-error(
      name='photo'
    )
    button.btn.btn--inverse.ma--t-xl(
      :disabled='isLoading'
      type='submit'
    ) {{ isLoading ? 'Sending...' : 'Sign up' }}
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
        isLoading: false,
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
            type: 'tel',
            label: '+38 (XXX) XXX - XX - XX',
            rules: 'required',
            mask: '+38(###)###-##-##'
          }
        ],
      }
    },
    mounted() {
      this.getPosition()
    },
    methods: {
      send() {
        this.isLoading = true
        this.form.phone = this.form.phone.replace(/[\s()-]/g, '')
        this.$axios.post(ENDPOINTS.USERS, this.form, {
          headers: {
            token: sessionStorage.token,
            'Content-Type': 'multipart/form-data',
          }
        })
          .then(() => {
            this.isLoading = false
            this.$emit('form-success')
          })
          .catch(errors => {
            this.isLoading = false
            if(errors.response.status === 422) {
              const { response: { data: { fails } } } = errors
              this.$refs.form.setErrors(fails)
            }
            if(errors.response.status === 409) {
              const { response: { data: { message } } } = errors
              this.$notify(
                {
                  text: message,
                  type: 'warn',
                }
              )
            }
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
<template lang='pug'>
vue-header
.container
  section.intro
    img.intro--bg(
      src='./public/img/bg.png'
      alt='intro'
    )
    .intro--content
      p.text-center.text--color-white.text--size-xl.text--lh-lg Test assignment for front-end developer
      p.text-center.text--color-white.pa--t-2xs What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
      .btn.btn--default.ma--t-sm Sign up
  card-block.ma--t-xxl(
    :skip='skip'
  )
  vue-form.ma--t-xxl(
    @form-success='success'
  )
</template>

<script>

  import { ENDPOINTS } from './requests/ENDPOINTS'

  export default {
    data() {
      return {
        skip: null
      }
    },
    mounted() {
      if(!sessionStorage.token) {
        this.getToken()
      }
    },
    methods: {
      getToken() {
        this.$axios.get(ENDPOINTS.TOKEN)
          .then(({ data: { token } }) => {
            sessionStorage.token = token
          })
      },
      success() {
        this.skip = new Date()
      },
    },
  }
</script>

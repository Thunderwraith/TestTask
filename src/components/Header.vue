<template lang="pug">
header.header
  .container
    .row.justify-content-between.align-content-center
      .col-auto
        a(
          href='#'
        )
          img.logo(
            src='../public/img/logo.png'
            alt='logo'
          )
      .col-auto.pa--l-none
        .btn.btn--default.ma--r-xs Users
        .btn.btn--default Sign up
</template>

<script>
  export default {
    name: 'vue-header',
  }
</script>
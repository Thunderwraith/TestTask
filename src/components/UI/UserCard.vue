<template lang="pug">
.user-card
  img.user-card--photo(
    :src="user.photo.includes('/images/users/') ? user.photo : 'src/public/img/user.png'"
    :alt='user.name'
  )
  p.user-card--data.text-center.pa--b-2xs(
    :title='user.name'
  ) {{ user.name }}
  p.user-card--data.text-center {{ user.position }}
  p.user-card--data.text-center(
    :title='user.email'
  ) {{ user.email }}
  p.user-card--data.text-center {{ user.phone }}
</template>

<script>
  export default {
    name: 'user-card',
    props: {
      user: Object,
    },
  }
</script>
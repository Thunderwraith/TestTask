<template lang="pug">
.user-card
  img.user-card--photo(
    :src='user.photo'
  )
  p.user-card--data.text-center.pa--b-2xs {{ user.name }}
  p.user-card--data.text-center {{ user.position }}
  p.user-card--data.text-center {{ user.email }}
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
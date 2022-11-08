<template lang="pug">
section.card-section.text-center
  p.text--size-xl.text--lh-lg.pa--b-xl Working with GET request
  .row.card-section-row
    .col-12.col-md-6.col-2lg-4(
      v-for='user in users'
      :key='user.id'
    )
      user-card(
        :user='user'
      )
  .btn.btn--default.ma--t-xl(
    v-if='link'
    @click='getUsers'
  ) Show more
</template>

<script>

  import { ENDPOINTS } from '../../requests/ENDPOINTS'

  export default {
    name: 'card-block',
    props: {
      skip: {},
    },
    data() {
      return {
        users: [],
        link: null,
      }
    },
    mounted() {
      this.link = ENDPOINTS.USERS
      this.getUsers()
    },
    methods: {
      getUsers() {
        this.$axios.get(this.link, {
          params: {
            count: 6,
          }
        })
          .then(res => {
            const { data: { users, links } } = res
            this.users = users
            this.link = links.next_url
          })
      },
    },
    watch: {
      skip() {
        this.link = ENDPOINTS.USERS
        this.getUsers()
      }
    }
  }
</script>
<template>
  <div id="nav">
    <router-link to="/">All</router-link>
    |
    <router-link to="/incomplete">Incomplete</router-link>
    |
    <router-link to="/completed">Completed</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

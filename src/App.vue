<template>
  <router-view/>
</template>

<style lang="less">
html,body{
  padding: 0;
  margin: 0;
}
#app {
}

nav {
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

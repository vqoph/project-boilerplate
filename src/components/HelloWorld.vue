<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ greeting }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: { name: 'Obi Wan lorem ipsum' },
    };
  },
  props: {
    msg: String,
  },
  computed: {
    greeting() {
      return `Hello ${this.user.name} ${Math.random()}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

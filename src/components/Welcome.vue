<template>
  <div class="hello">
    <img src="../assets/me.jpg" id="Lomholdt__Me">
    <h1>{{ msg }}</h1>
    <h2>Links</h2>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/jonaslomholdt/">
            LinkedIn
        </a>
      </li>
      <li>
        <a href="https://github.com/lomholdt">
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/jonaslomholdt"
          target="_blank"
        >
          Twitter
        </a>
      </li>
    </ul>
    <h2>Contact</h2>
    jonaslomholdt [at] gmail [dot] com
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

#Lomholdt__Me {
  width: 125px;
  border-radius: 100px
}
</style>

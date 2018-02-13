<template>
  <div class="hello">
    <img src="../assets/me.jpg" id="Lomholdt__Me">
    <h2>About</h2>
    <p>Aloha stranger! My name is Jonas.</p>
    <p>I'm a {{age}} year old software developer living in Copenhagen.</p>
    <p v-show="weather">The temperature here is currently {{currentTemperature}}°C</p>
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
          target="_blank">
          Twitter
        </a>
      </li>
    </ul>
    <h2>Contact</h2>
    jonaslomholdt [at] gmail [dot] com
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Welcome',
  mounted () {
    axios.get(`/.netlify/functions/weather`)
      .then(res => {
        this.weather = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    age () {
      return this.calculateAge(this.birthday)
    },
    currentTemperature () {
      if (this.weather) {
        return Math.round(this.weather.timeserie[0].temp)
      }
      return 'N/A'
    }
  },
  methods: {
    calculateAge (birthday) {
      let diff = Date.now() - birthday.getTime()
      let date = new Date(diff)
      return date.getFullYear() - 1970
    }
  },
  data () {
    return {
      birthday: new Date('1988-09-21'),
      weather: null
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

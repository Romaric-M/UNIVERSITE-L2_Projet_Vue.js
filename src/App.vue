<template>
  <body>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
  </body>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
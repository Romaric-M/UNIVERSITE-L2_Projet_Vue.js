<template>
  <main id="index">
    <section class="presentation">
      <h2>Les recettes de Jean-bob</h2>
      <p>Bienvenue sur le site des recettes de Jean-bob !</p>
      <p>Jean-bob c'est un bon gars qui fait de la bonne cuisine !</p>
      <p>Sur ce site nous vous donnons les recettes de Jean-bob pour que vous puissiez les reproduires à la maison.</p>
      <p>Si vous le souhaitez et avez du temps libre vous pouvez aussi réserver une place dans un cours de cuisine.</p>
    </section>
    <section class="suggestion">
      <h2>Recettes qui peuvent vous plaire...</h2>
      <ul id="suggestion_list">
      <ResumeRecettes :recettes="recettes"/>
      </ul>
    </section>
  </main>
</template>

<script>

import ResumeRecettes from "../components/ResumeRecettes";

export default {
  name: 'Home',
  components: {
    ResumeRecettes
  },
  computed : {
    recettes() {
      return this.$store.state.recettes;
    }
  }
}

</script>

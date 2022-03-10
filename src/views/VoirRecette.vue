<template>
  <article id="detail_recette">
    <h2>{{ uneRecette.nom }}</h2>
    <div class="bloc_detail_recette">
      <img :src="require('@/assets/'+uneRecette.image)">
      <div class="sousbloc_detail_recette">
        <strong>Pour {{ uneRecette.nbPersonne }} Personnes</strong>
        <p>{{ uneRecette.ingredients }}</p>
        <p>{{ uneRecette.etapes }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "VoirRecette",
  computed: {
    idRecette() {
      return this.$route.params.id
    },
    uneRecette() {
      return this.$store.state.recettes.filter(r => r.id == this.idRecette)[0]
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <main id="recette">
    <div class="menu_recette">
      <h2>Nos recettes</h2>
      <nav>
        <ul id="menu_type">
          <li class="smenu"><button @click="typeID=0">Toutes les Recettes</button></li>
          <li class="smenu"><button @click="typeID=1">Les Entrées</button></li>
          <li class="smenu"><button @click="typeID=2">Les Plats</button></li>
          <li class="smenu"><button @click="typeID=3">Les Desserts</button></li>
        </ul>
      </nav>
    </div>
    <section id="les_recettes">
      <ul class="liste_recette">
        <ResumeRecettes :recettes="lesRecettes"/>
      </ul>
    </section>
  </main>
</template>

<script>
import ResumeRecettes from "../components/ResumeRecettes";
export default {
  name: "Recettes",
  components: {ResumeRecettes},
  data: function () {
    return {
      typeID: 0
    }
  },
  computed: {
    lesRecettes() {
      return this.typeID===0 ? this.$store.state.recettes : this.$store.state.recettes.filter(r => r.typeID===this.typeID)
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <v-stepper-content step="1">
    <Title text="Selectionnez le format d'entrée" />
    <section class="d-flex mb-16">
      <div
        v-for="format in formats"
        :key="format"
        class="mr-16 card"
        @click="$store.commit('setFormat', format)"
        :class="$store.state.format == format ? 'active' : ''"
      >
        <v-img
          class="mx-auto my-6"
          :src="require('../assets/' + format + '.svg')"
          alt="Icon Fichier"
          height="100px"
          width="100px"
        />
        <p class="text-center">{{ format }}</p>
      </div>
    </section>

    <section class="d-flex">
      <v-btn outlined rounded text @click="$router.push('/')">
        Précedent
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="#0083FF"
        :disabled="$store.getters.step1"
        @click="$store.state.stepper = 2"
        rounded
        class="white--text"
      >
        Suivant
      </v-btn>
    </section>
  </v-stepper-content>
</template>

<script>
import Title from "../components/Title";

export default {
  name: "Step1",
  components: {
    Title,
  },
  data() {
    return {
      formats: ["Fichier", "Application", "Api"],
    };
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  width: 200px;
  height: 300px;
}

.card:hover {
  cursor: pointer;
}

.active {
  border-color: #0083ff;
  color: #0083ff;
}
</style>
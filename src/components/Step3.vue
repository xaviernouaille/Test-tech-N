<template>
  <v-stepper-content step="3">
    <Title text="Selectionnez le déclencheur" />
    <section>
      <label for="type"
        >Choissez le type de déclencheur pour mettre à jour les données</label
      >
      <div class="col-3">
        <v-select
          class="mt-6"
          id="type"
          :items="items"
          label="Type de déclencheur"
          solo
          v-model="typeValue"
          @input="$store.commit('setType', typeValue)"
        ></v-select>
      </div>
    </section>
    <section>
      <label for="type"
        >Choissez la date de mise à jour attendue (pour envoyer une alerte en
        cas de non réalisation)</label
      >
      <div class="col-6">
        <v-date-picker
          v-model="pickerValue"
          @input="$store.commit('setDate', pickerValue)"
        ></v-date-picker>
      </div>
    </section>

    <section class="d-flex mt-10">
      <v-btn outlined rounded text @click="$store.state.stepper = 2">
        Précedent
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="#0083FF"
        @click="
          $router.push('/');
          $store.commit('saveCard');
        "
        :disabled="$store.getters.step3"
        rounded
        class="white--text"
      >
        Terminer
      </v-btn>
    </section>
  </v-stepper-content>
</template>

<script>
import Title from "../components/Title";

export default {
  name: "Step3",
  components: {
    Title,
  },
  data() {
    return {
      items: ["Manuel", "Action prédéfinie", "Calendaire"],
      typeValue: "",
      pickerValue: "",
    };
  },
};
</script>

<style>
</style>
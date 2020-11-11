<template>
  <v-stepper-content step="2">
    <Title text="Renseignez la carte" />

    <section class="my-8 col-6">
      <Dropzone />
    </section>

    <section class="my-10">
      <div class="col-8">
        <label for="name">Donner un nom à votre carte</label>
        <input
          class="input-name mt-3"
          id="name"
          type="text"
          v-model="nameValue"
          @input="$store.commit('setName', nameValue)"
        />
      </div>
    </section>

    <section class="col-3 my-10">
      <label for="tag">Ajouter des étiquettes d'équipe</label>
      <v-select
        id="tag"
        :items="tags"
        v-model="tagValue"
        small-chips
        @input="$store.commit('setTag', tagValue)"
      >
        <template slot="selection" slot-scope="data">
          <v-chip class="white--text" :color="data.item.color">{{
            data.item.text
          }}</v-chip>
        </template>
        <template slot="item" slot-scope="data">
          <v-chip class="white--text" :color="data.item.color">{{
            data.item.text
          }}</v-chip>
        </template>
      </v-select>
    </section>
    <section class="d-flex">
      <v-btn outlined rounded text @click="$store.state.stepper = 1">
        Précedent
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="#0083FF"
        :disabled="$store.getters.step2"
        @click="$store.state.stepper = 3"
        rounded
        class="white--text"
      >
        Suivant
      </v-btn>
    </section>
  </v-stepper-content>
</template>

<script>
import Dropzone from "../components/Dropzone";
import Title from "../components/Title";

export default {
  name: "Step2",
  components: {
    Dropzone,
    Title,
  },
  data() {
    return {
      nameValue: "",
      tagValue: "",
      tags: [
        { text: "Logistique", color: "#00B9DE" },
        { text: "Production", color: "#FF878A" },
        { text: "Qualité", color: "#5BE671" },
        { text: "Maintenance", color: "#FFA862" },
      ],
    };
  },
};
</script>

<style scoped>
.input-name {
  height: 48px;
  background: #eeeeee;
  border-radius: 2px;
  text-indent: 10px;
  width: 100%;
}
</style>
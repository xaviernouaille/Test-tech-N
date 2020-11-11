<template>
  <v-container class="ma-16">
    <Title text="Bienvenue dans Niagara" />

    <v-container class="d-flex my-6">
      <div class="col-2"></div>
      <v-spacer></v-spacer>
      <v-btn
        rounded
        class="white--text"
        color="#0083FF"
        @click="$router.push('/form')"
        >+ Ajouter une carte</v-btn
      >
    </v-container>

    <v-container>
      <div
        class="d-flex pa-4 align-center mb-6 card px-8"
        v-for="carte in $store.state.all"
        :key="carte.name"
      >
        <p class="card-name ma-0">{{ carte.name }}</p>
        <v-spacer></v-spacer>
        <v-chip class="white--text">{{ carte.tag }}</v-chip>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import Title from "../components/Title";

export default {
  name: "Home",
  components: {
    Title,
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
}

.card-name {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #212121;
}
</style>

<template>
  <v-stepper v-model="$store.state.stepper" alt-labels class="stepper">
    <v-stepper-header>
      <v-container class="col-3 d-flex">
        <v-stepper-step step="1"> Etape 1 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2"> Etape 2 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Etape 3 </v-stepper-step>
      </v-container>
    </v-stepper-header>

    <v-stepper-items>
      <Step1 />

      <Step2 />

      <Step3 />
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

export default {
  name: "Form",
  components: {
    Step1,
    Step2,
    Step3,
  },
};
</script>
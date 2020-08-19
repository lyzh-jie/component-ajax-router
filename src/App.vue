<template>
  <div>
    <p>
      click {{count }} times,count is
      {{evenOrOdd}}
    </p>
    <button @click="INCREMENT">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="decrementIfAync">decrement async</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  mounted() {
    console.log(this.$store);
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["evenOrOdd"])
  },

  methods: {
    ...mapActions(["incrementIfOdd", "decrementIfAync"]),
    ...mapMutations(["INCREMENT", "DECREMENT"])
  }
};
</script>

<style></style>

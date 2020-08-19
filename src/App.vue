<template>
  <div>
    <p>
      click {{count }} times,count is
      {{evenOrOdd}}
    </p>
    <button @click="decrement">+</button>
    <button @click="increment">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="decrementIfAync">decrement async</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    evenOrOdd() {
      return this.$store.getters.evenOrOdd;
    }
  },

  methods: {
    decrement() {
      this.$store.commit("INCREMENT");
    },
    increment() {
      this.$store.commit("DECREMENT");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    decrementIfAync() {
      this.$store.dispatch("decrementIfAync");
    }
  }
};
</script>

<style></style>

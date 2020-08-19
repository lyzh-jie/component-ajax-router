<template>
  <div>
    <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="decrement">+</button>
    <button @click="increment">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="decrementIfAync">decrement async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 == 0 ? "偶数" : "奇数";
    }
  },
  methods: {
    decrement() {
      this.count++;
    },
    increment() {
      this.count--;
    },
    incrementIfOdd() {
      if (this.count % 2 == 0) {
        this.count++;
      }
    },
    decrementIfAync() {
      setTimeout(() => {
        this.count--;
      }, 100);
    }
  }
};
</script>

<style>
</style>
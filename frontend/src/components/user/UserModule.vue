<script>
export default {
  props: {
    active: Boolean,
    name: String,
  },
  data() {
    return {
      points: 0,
      timer: null,
    };
  },
  methods: {
    startPoints() {
      // send start to backend
      if (this.active) {
        console.log("start");
        // this.$socket.emit("raiseFinger", {
        //   roomCode: 1324,
        //   playerName: "Dennis",
        // });
      }
    },
    stopPoints() {
      // send Stop to backend
      if (this.active) console.log("stop");
    },
  },
};
</script>

<template>
  <div
    v-on:mouseenter="startPoints"
    v-on:mouseleave="stopPoints"
    class="player"
  >
    <p>{{ name }}</p>
  </div>
</template>

<style lang="scss" scoped>
.player {
  width: 10vw;
  height: 10vw;
  border-radius: 1000px;
  display: grid;
  background-color: aqua;
  p {
    color: black;
    align-self: center;
    justify-self: center;
  }
}
</style>

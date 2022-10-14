<script setup>
import UserModule from "../components/user/UserModule.vue";
import VueSocketIO from "vue-3-socket.io";
import SocketIO from "socket.io-client";
import store from "./store";

new VueSocketIO({
  debug: true,
  connection: SocketIO("localhost:4000", {
    withCredentials: true,
    KeepAlive: true,
    // allowedHeaders: ["my-custom-header"],
  }),
  options: { allowedHeaders: ["my-custom-header"] }, //Optional options
});
</script>
<script>
// export default {
//   sockets: {
//     connect: function () {
//       console.log("socket to notification channel connected");
//     },
//   },

//   data() {
//     return {
//       users: [],
//     };
//   },

//   mounted() {
//     this.$socket.subscribe("userConnect", function (data) {
//       console.log("This event was fired by eg. sio.emit('kebab-case')", data);
//     });
//   },
// };
</script>

<template>
  <main>
    <UserModule active name="Max" />
    <UserModule name="fanny" />
    <UserModule name="Daniel" />
    <UserModule name="William" />
  </main>
</template>

<template>
    <base-header class="pb-1 pb-6 pt-1 pt-md-8 bg-gradient-success">
      <div style="height: 300px;  text-align:center;line-height:200px;">
        <span style="opacity:0;">_</span>
      </div>
      <div style="height: 200px;  text-align:center;line-height:200px;">
        <base-button block size="lg" type="primary" v-on:click="getClientQueue">Solicitar turno</base-button>
      </div>
      <div style="height: 300px;  text-align:center;line-height:200px;">
        <span style="opacity:0;">_</span>
      </div>
    </base-header>
</template>
<script>
import http from "../http-common";
import EventBus from "../event-bus";

export default {
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    getClientQueue() {
      http
        .get("turn").then(response => {
          localStorage.setItem("ClientTurn", response.data[0].turnId);
          this.$router.push("/ClientQueue");
        })
        .catch(e => console.log(e));
    },
  },
  mounted() {
    
  }
};
</script>
<style>
h2.headertekst {
  text-align: center;
}
</style>

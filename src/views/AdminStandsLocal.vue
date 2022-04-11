<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-row>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(1)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">1</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(2)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">2</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(3)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">3</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(4)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">4</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(5)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">5</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(6)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">6</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(7)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">7</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <span style="opacity:0;">_</span>
          <b-card>   
            <b-row>
              <b-col align="center">
                <base-button type="primary" v-on:click="getClientQueue(8)">Estoy disponible</base-button>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">8</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <div style="height: 150px;  text-align:center;line-height:200px;">
        <span style="opacity:0;">_</span>
      </div>
      <b-col align="center">
        <base-button type="danger" v-on:click="resetTurns()">Reset</base-button>
      </b-col>
    </base-header>
</template>
<script>
import http from "../http-common";

export default {
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    getClientQueue(data) {
      http.post("stand/" + data,{withCredentials:false},{withCredentials:false})
      .then(response => {
        console.log("actualizado el " + data);
      })
      .catch(e => {
        console.log(e);
      });
    },
    resetTurns(){
      http.delete("restart2",{withCredentials:false})
      .then(response => {
        console.log("Borrando los turnos");
      })
      .catch(e => {
        console.log(e);
      });
    },
  },
  mounted() {
    
  }
};
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
h2.headertekst {
  text-align: center;
}

</style>

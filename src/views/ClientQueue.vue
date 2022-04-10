<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-row>
        <b-col align="center">
          <b-card style="background-color:#11cdef;">
            <b-row>
              <b-col align="center">
                <h1 style="font-size: 42px">TURNO:</h1>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 42px">{{ this.numTurn }}</h1>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <span style="opacity:0;">_</span>
      <b-row>
        <b-col align="center">
          <b-card>
          <span style="opacity:0;">_</span>
            <b-row>
              <b-col align="center">
                <h1 style="font-size: 50px">TURNO</h1>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">{{ this.turns.number[0] }}</h1>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">MODULO:</h1>
              </b-col>
              <b-col align="center">
                <h1 style="font-size: 50px">{{ this.turns.stand[0] }}</h1>
              </b-col>
            </b-row>
            <span style="opacity:0;">_</span>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <span style="opacity:0;">_</span>
          <b-card>
            <b-row>
              <b-col align="center">
                <h1>TURNO</h1>
                <h2>{{ this.turns.number[1] }}</h2>
              </b-col>
              <b-col align="center">
                <h1>MODULO</h1>
                <h2>{{ this.turns.stand[1] }}</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
        <span style="opacity:0;">_</span>
          <b-card>
            <b-row>
              <b-col align="center">
                <h1>TURNO</h1>
                <h2>{{ this.turns.number[2] }}</h2>
              </b-col>
              <b-col align="center">
                <h1>MODULO</h1>
                <h2>{{ this.turns.stand[2] }}</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
        <span style="opacity:0;">_</span>
          <b-card>
            <b-row>
              <b-col align="center">
                <h1>TURNO</h1>
                <h2>{{ this.turns.number[3] }}</h2>
              </b-col>
              <b-col align="center">
                <h1>MODULO</h1>
                <h2>{{ this.turns.stand[3] }}</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <span style="opacity:0;">_</span>
          <b-card>
            <b-row>
              <b-col align="center">
                <h1>TURNO</h1>
                <h2 class="text-nowrap">{{ this.turns.number[4] }}</h2>
              </b-col>
              <b-col align="center">
                <h1>MODULO</h1>
                <h2>{{ this.turns.stand[4] }}</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
        <span style="opacity:0;">_</span>
          <b-card>
            <b-row>
              <b-col align="center">
                <h1>TURNO</h1>
                <h2>{{ this.turns.number[5] }}</h2>
              </b-col>
              <b-col align="center">
                <h1>MODULO</h1>
                <h2>{{ this.turns.stand[5] }}</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
        <span style="opacity:0;">_</span>
          <b-card>
            <b-row>
              <b-col align="center">
                <h1>TURNO</h1>
                <h2>{{ this.turns.number[6] }}</h2>
              </b-col>
              <b-col align="center">
                <h1>MODULO</h1>
                <h2>{{ this.turns.stand[6] }}</h2>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </base-header>
</template>
<script>
import http from "../http-common";

export default {
  components: {

  },
  data() {
    return {
      numTurn: 0,
      connection: null,
      turns: {
        stand: [0,0,0,0,0,0,0,0],
        number: [0,0,0,0,0,0,0,0],
      }
    };
  },
  methods: {
    getQueue() {
      http.get("turns",{"headers":{"Access-Control-Allow-Origin":"*"},withCredentials:false})
      .then(response => {
        let len = response.data.length;
        console.log("len:" + len);
        this.turns.stand = [];
        this.turns.number = [];
        if(len >= 8){
          for(let i = 0; i<8; i++){
            this.turns.stand.push(response.data[i].assignedNumber);
            this.turns.number.push(response.data[i].assignedStand);
          }
        } else {
          for(let i = 0; i<len; i++){
            this.turns.stand.push(response.data[i].assignedNumber);
            this.turns.number.push(response.data[i].assignedStand);
          }
          for(let i = 0; i< (8-len); i++){
            this.turns.stand.push(0);
            this.turns.number.push(0);
          }
        }
      })
      .catch(e => {
        console.log(e);
      });
    },
  },
  mounted() {
    if (localStorage.getItem("ClientTurn")) {
      this.numTurn = JSON.parse(localStorage.getItem("ClientTurn"));
    } else {
      this.numTurn = 0;
    }
    this.getQueue();
    this.$root.$on("updateStand", data => {
      console.log(data);
    });
  },
  created() {

    setInterval(function () {
      this.getQueue();
    }.bind(this), 5000);
    //const WebSocket = require('ws');
    //var socket = new WebSocket('ws://localhost:3000');
    /*console.log("Starting webSocket connection");
    const WebSocket = require('ws');
    var socket = new WebSocket('ws://localhost:3000');

    socket.onopen = function(event) {

    // Send an initial message
      socket.send('I am the client and I\'m listening!');

      // Listen for messages
      socket.onmessage = function(event) {
          console.log('Client received a message',event);
      };

      // Listen for socket closes
      socket.onclose = function(event) {
          console.log('Client notified socket has closed',event);
      };

      // To close the socket....
      socket.close()

    };

    this.connection.onopen = function(event){
      console.log(event);
      console.log("Succesfully webSocket connection");
    }

    this.connection.onmessage = function(event){
      console.log(event);
      console.log("Succesfully webSocket connection message");
    }*/

  },
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

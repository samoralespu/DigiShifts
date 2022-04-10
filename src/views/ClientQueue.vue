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
import VueNativeSock from 'vue-native-websocket'


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
      http.get("turns",{withCredentials:false})
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
  async mounted() {
    if (localStorage.getItem("ClientTurn")) {
      this.numTurn = JSON.parse(localStorage.getItem("ClientTurn"));
    } else {
      this.numTurn = 0;
    }
    this.getQueue();

    this.socket = await new WebSocket('wss://localhost:3000/ws'); 
        // When it opens, console log that it has opened. and send a message to the server to let it know we exist
        this.socket.onopen = () => {
            console.log('Websocket connected.');
            this.sendMessage(JSON.stringify({"message" : "Hello, server."}));
        }

        // When we receive a message from the server, we can capture it here in the onmessage event.
        this.socket.onmessage = (event) => {
            // We can parse the data we know to be JSON, and then check it for data attributes
            let parsedMessage = JSON.parse(event.data);
            // If those data attributes exist, we can then console log or show data to the user on their web page.
            console.log("MessageReceived: " + parsedMessage);
        }

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

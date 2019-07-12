<template>
  <div class="col-lg-4 col-sm-12" v-if="!username">
    <div class="alert alert-primary" role="alert">
      <center>
        <img
          src="https://courts.ms.gov/images_folder/demo/loading.gif"
          width="20%"
          height="20%"
          alt="loading"
        />
      </center>
    </div>
    <div class="alert alert-primary" role="alert">
      <center>
        <img
          src="https://courts.ms.gov/images_folder/demo/loading.gif"
          width="20%"
          height="20%"
          alt="loading"
        />
      </center>
    </div>
    <div class="alert alert-primary" role="alert">
      <center>
        <img
          src="https://courts.ms.gov/images_folder/demo/loading.gif"
          width="20%"
          height="20%"
          alt="loading"
        />
      </center>
    </div>
    <div class="alert alert-primary" role="alert">
      <center>
        <img
          src="https://courts.ms.gov/images_folder/demo/loading.gif"
          width="20%"
          height="20%"
          alt="loading"
        />
      </center>
    </div>
  </div>
  <div class="col-lg-4 col-sm-12" v-else>
    <div class="row">
      <div class="col alert alert-primary">
        <center>
          <span>Reward Weight</span>
          <h4>{{ `${full_stake} WS` }}</h4>
          <span
            ><small
              >Next Powerdown: {{ username.vesting_withdraw_rate }}</small
            ></span
          >
        </center>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped"
            :style="{ width: votin_power + '%' }"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ votin_power + "%" }}
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <center>
              <p class="mboton">number of post</p>
              <span class="miniature">{{`${username.post_count} posts`}}</span>
            </center>
          </div>
          <div class="col">
            <center>
              <p class="mboton">age</p>
              <h5 class="mboton">{{ created_account() }}</h5>
              <span class="miniature">{{ age() }}</span>
            </center>
          </div>
        </div>
        <center>
          <span class="mb-0 spanOpacity">
            view on:<a :href=" `https://whaleshares.io/@${username}` " >whaleshares.io</a>
          </span>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col alert alert-primary" role="alert">
        <table>
          <tbody>
            <tr v-for="(key_obj,key) in keys_users" :key="key">
              <th v-if="username[key_obj]">{{ key_obj.replace(/_/, ' ') }}:</th>
              <td v-if="username[key_obj]">{{ username[key_obj] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col alert alert-primary" role="alert">
          <center><h4 class="alert-heading">json metadata</h4></center>
          <p class="text-danger textoajust">{{ username.json_metadata }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col alert alert-primary" role="alert">
          <div v-if="username.proxy">
            <b>proxy:</b>
            <router-link :to="`@${username.proxy}`">@{{ username.proxy }}</router-link>
          </div>
          
          <div v-else>
            <center><h4 class="alert-heading">witness votes</h4></center>
            <ol >
              <li v-for="(witness,key) in username.witness_votes" :key="key" >{{ witness }}</li>
            </ol>
            <hr />
            <b>witness votes free:</b> {{ 30-username.witness_votes.length }}
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import moment from 'moment';

export default {
  name: "Perfil_data",
  props: ["username"],
  data: () => ({
    full_stake: "loading...",
    votin_power: 0,
    keys_users: null
  }),
  watch:{
    user_updated(dt){
      this.full_stake = this.getStake(dt.vesting_shares);
      this.votin_power = this.getVotingPower(
        dt.voting_power,
        dt.last_vote_time
      );
      this.keys_users = Object.keys(dt)
      this.delete_keys(this.keys_users)
    }
  },
  computed: {
    ...mapState({
      properties: state => state.dynamicglobalproperties.properties
    }),
    user_updated(){
      return this.username
    }
  },
  methods: {
    getVotingPower(vp, lastVote) {
      const seconds_ago =
        (new Date().getTime() - new Date(lastVote + "Z").getTime()) / 1000;
      const votingPower = vp + (10000 * seconds_ago) / 432000;
      return Math.min((votingPower / 100).toFixed(2), 100);
    },
    getStake(vesting_shares) {
      return parseInt(
        (parseFloat(vesting_shares) *
          parseFloat(this.properties.total_vesting_shares)) /
          parseFloat(this.properties.total_vesting_fund_steem)
      );
    },
    created_account(){
      return moment(moment.utc(this.username.created).valueOf()).fromNow()
    },
    age(){
      return moment(this.username.created).format('MMMM YYYY')
    },
    delete_keys(keys_full){
      var keys_final=[]
      var data_not = [ 'json_metadata', 'memo_key'  ]
      keys_full.forEach(key_unique => {
        var type_data = typeof this.username[key_unique]
        var index_key_not  = data_not.indexOf(key_unique)
        if(type_data=="string" && index_key_not==-1 || type_data=="number" && index_key_not==-1){
          keys_final.push(key_unique)
        }
      });
      this.keys_users = keys_final;
    }
  }
};
</script>
<style scoped>
.mboton{
  margin-bottom: 0px;
}
.miniature{
  color: #114f92a6;
  font-size: 0.8em;
}
.spanOpacity{
  opacity: 0.3;
  filter: alpha(opacity=30);
}
.spanOpacity:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
}
.textoajust{
  word-wrap: break-word;
}
</style>

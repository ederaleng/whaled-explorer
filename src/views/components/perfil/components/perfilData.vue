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
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Perfil_data",
  props: ["username"],
  data: () => ({
    full_stake: "loading...",
    votin_power: 0
  }),
  updated() {
    this.full_stake = this.getStake(this.username.vesting_shares);
    this.votin_power = this.getVotingPower(
      this.username.voting_power,
      this.username.last_vote_time
    );
  },
  computed: {
    ...mapState({
      properties: state => state.dynamicglobalproperties.properties
    })
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
    }
  }
};
</script>

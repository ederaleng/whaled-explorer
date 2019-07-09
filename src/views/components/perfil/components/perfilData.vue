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
        <div class="col">
          <center>
            <span>Reward Weight</span>
            <h4>{{ full_stake }}</h4>
            <span><small>Next Powerdown: {{ username.vesting_withdraw_rate }}</small></span>
          </center>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100">
              loading..
            </div>
          </div>
        </div>
    </div>



  </div>
</template>
<script>
export default {
  name: "Perfil_data",
  props: ["username"],
  data:()=>({
    full_stake: "loading..."
  }),
  created(){

  },
  methods:{
    getFullStake(){
      this.full_stake = data
    }
  }
};
</script>

<template>
  <div class="text-center mt-5" v-if="!isValid">
    <h4>The username {{ username }} is invalid</h4>
    <h5>check the username and try again</h5>
  </div>
  <div class="container" v-else>
    <div className="row">
      <h3 className="col-12 titleUsername">{{ `@${username}` }}</h3>
    </div>
    <div class="row">
      <div class="col-12">

      </div>
      <div class="col-12">
        
      </div>
    </div>
  </div>
</template>
<script>
import wlsjs from '@whaleshares/wlsjs';

export default {
  name:"Perfil",
  data: ()=>({
    isValid: true,
    username: null
  }),
  created(){
    this.username = this.$route.params.id.replace(/@/g, '')
    if(wlsjs.utils.validateAccountName(this.username)){
      this.isValid = false;
    }
  }
};
</script>
<style scoped>
.titleUsername{
  color: #555758!important;
  padding-left: 15px;
  padding-bottom: 30px;
}
</style>


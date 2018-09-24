<template>
  <div id="app">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="./assets/basketball.png">
        NBA干道
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="./assets/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style>

</style>
<script>
    export default {
        name: "tabBar",
        data(){
            return{
                selected:"1"
            }
        },
        watch:{
            selected(val,oldVal){
                switch (val) {
                    case "1":
                        this.$router.push('/index');
                    break;
                    case "2":
                        this.$router.push('/me');
                    break;
                }
            }
        }

    }
</script>

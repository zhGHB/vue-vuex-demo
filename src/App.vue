<template>
  <div id="app" @scroll="showTop">
  	<my-header ></my-header>
    
    <router-view></router-view>
    <slider-menu :isShow="isShow" @changeS="change"></slider-menu>
  </div>
</template>

<script>
   
    import '@/assets/style/var.less';
    import myHeader from '@/components/MyHeader.vue';
    import sliderMenu from '@/components/sliderMenu.vue';
	export default {
	  name: 'app',
	  components:{myHeader,sliderMenu},
    data(){
      return{
        isShow:false,
      }
    },
    methods:{
      showFun(){
         this.isShow=!this.isShow;
      },
      change(data){
        this.isShow=data;
      },
      showTop(){
        console.log("ddd")
      }
      
    }
	}
</script>

<style lang="less">
		@import './assets/style/reset.less';
		@import './assets/icon/iconfont.css';
</style>

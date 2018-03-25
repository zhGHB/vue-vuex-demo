<template>
	<div class="header">
		 <i class="icon iconfont icon-menu" @click="showMenu"></i>
		 <i class="icon iconfont icon-people"></i>
		 <div class="content flex bt">
		 	<span>卖座电影</span>
		 	<div @click="showCityListFN">{{city}}<i class="icon iconfont icon-bottom"></i></div>
		 </div>
	</div>
</template>

<script type="text/javascript">
	import {mapActions,mapGetters} from 'vuex';
	export default{
		created(){
			this.getLocation();
		},
		computed:{
			...mapGetters([
				'isShowSliderMenu',
				'city',
				'showCityList',
				])
		},
		methods:{
			...mapActions([
				'show_menu',
				'show_city_list'
				]),
			showMenu(){
			   var isShow=!this.isShowSliderMenu;
			   this.show_menu(isShow);
			},
			showCityListFN(){
				this.show_city_list(!this.showCityList);
			},
			getLocation(){

				if (navigator.geolocation)
				{ 

				    navigator.geolocation.getCurrentPosition(showPosition,showError);
				 }else{
				 	alert("浏览器不支持定位")
				 }
			},
			showPosition(){
				alert("dd");
			}
		}
	}
</script>

<style lang="less" scoped >
		@import '~ST/header.less';
</style>
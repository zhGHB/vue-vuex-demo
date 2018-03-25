<template>
	<div class="silder-menu" v-show="isShowSliderMenu" @click="hide">
		<transition name="fade" mode="">
			<div class="item-box" v-if="isShowSliderMenu" transiton="fade">
				<div class="item flex bt" v-for="(item,indx) in lists">
					 	<span>{{item}}</span>
					 	<i class="icon iconfont icon-right"></i>
				</div>
			</div>
	    </transition>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters,mapActions} from 'vuex';
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:true,
			}
		},
		data(){
			return{
				lists:[
					'新闻列表',
					'电影列表',
					'资讯列表'
				]
			}
		},
		methods:{
			hide(){
				this.show_menu(!this.isShowSliderMenu);
			},
			...mapActions([
				'show_menu'
				])
		},
		computed:{
			...mapGetters([
					'isShowSliderMenu'
				])
		},

	}
</script>
<style lang="less" scoped >
      @import '~ST/sliderMenu.less';

</style>
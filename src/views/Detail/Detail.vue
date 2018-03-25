<template>
	<div>
		
		<img :src="detailData.cover.origin" />
		<div class="info-box">
			 <div class="director"> 导演：{{detailData.director}}</div>
			 <div class="actors">
			 	 <p>演员：</p>

			 	 <span v-for="(item,index) in detailData.actors">
			 	 	   {{item.name}}&nbsp;&nbsp;
			 	 </span>
			 </div>
		</div>
	</div>

</template>

<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				detailData:{},
			}
		},
		created(){
			this.getDetail();
		},
		methods:{
			getDetail(){
				var that=this;
				var id=this.$route.params.id;
				var url=`/api/film/${id}`;
				 axios.get(url).then(function(res){
				 	console.log(res);
				 	if(res.data.status==0){
				 		var data=res.data.data.film;
				 		that.detailData=data;
				 	}
				}).catch(function(res){alert("网络异常")});
			}
		}
	}
</script>
<style lang="less">
	 @import "~ST/detail.less";
</style>
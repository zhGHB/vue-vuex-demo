
<template>
	<div class="home" >
		<city v-if="showCityList"></city>
		<loading v-if="loading01||loading02" ></loading>
		<!-- 轮播图 -->
		 <banner></banner>	
		 <!-- 轮播图 -->
		  <div class="lists-box">
		  	  <div class="list-item" v-for="(item,index) in lists" :key="index">
		  	  	  <router-link :to="{name:'detail',params:{id:item.id}}">
		  	  			<img :src="item.cover.origin">
		  	  			<div class="intro flex bt">
		  	  				 <div>
		  	  				 	 <h4>{{item.name}}</h4>
		  	  				 	 <div>{{item.intro}}</div>
		  	  				 </div>
		  	  				 <div class="align-center flex  grade">
		  	  				 	 {{item.grade}}
		  	  				 </div>
		  	  			</div>

		  	  	  </router-link>
		  	  </div>
		  </div> 


		  <div class="lists-box">
		  	  <div class="list-item" v-for="(item,index) in soon" :key="index">
		  	  			<router-link :to="{name:'detail',params:{id:item.id}}">
		  	  				<img :src="item.cover.origin">
		  	  				<div class="intro flex bt">
		  	  					 <div>
		  	  					 	 <h4>{{item.name}}</h4>
		  	  					 	 <div>{{item.intro}}</div>
		  	  					 </div>
		  	  					 <div class="align-center flex  grade">
		  	  					 	 {{item.grade}}
		  	  					 </div>
		  	  				</div>
		  	  			</router-link>
		  	  </div>
		  </div> 

		  <!-- 回到顶部 -->
		  	<div  class="go-top" :class="showButton?'active':''" @click="goTop">
		  		<i class="icon iconfont icon-top-copy"></i>
		  	</div>
		  <!-- 回到顶部 -->
		
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';
	import Banner from './Banner.vue';
	import Loading from '@/components/Loading.vue';
	import City from '@/components/City.vue';
	import {mapGetters,mapActions}  from 'vuex';
	export default {
		components:{Banner,Loading,City},
		data(){
			return{
				lists:[],
				soon:[],
				loading01:true,
				loading02:true,
				showButton:false,
			}
		},
		created(){
			this.getLists();
			this.commingSoon();
		},
		computed:{
			...mapGetters([
				'showCityList',

				])
		},
		methods:{
			...mapActions([
				'show_city_list'
				]),
			getLists(){
				var that=this;
				axios.get("/api/film/now-playing",{page:1,count:5}).then(function(res){
					var data=res.data;
					if(data.status==0){
						that.lists=data.data.films;
						that.loading01=false;
					}
				}).catch(function(error){console.log(error)});
			},
			commingSoon(){
				var that=this;
				axios.get('api/film/coming-soon',{page:1,count:10}).then(function(res){
						var data=res.data;
						if(data.status==0){
							that.soon=data.data.films;
							that.loading02=false;
						}
				}).catch(function(res){console.log(res);alert("网络异常");
				    	that.loading02=false;
				    	that.loading01=false;
			     })
			},
			SC(){
				this.showButton=document.body.scrollTop>200?true:false;
			},
			goTop(){
				  let speed = 10;
				  let timer = setInterval(function(){
				    if(document.body.scrollTop>0){
				      document.body.scrollTop = document.body.scrollTop-speed > 0 ? document.body.scrollTop-speed : 0 ;
				      speed += 2;      
				    }else{
				      clearInterval(timer)
				    }       
				  },16)
			},
		},
		mounted() {
          window.addEventListener('scroll', this.SC);
        },	

	}
</script>
<style lang="less">
	@import '~ST/home.less';
</style>
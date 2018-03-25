<template>
	<div class="city-box">
		 <!-- <div class="city-content"> -->
		 	<div class="city-group">
		 		  <div class="item" v-for="(item,index) in CT">
		 		  	   <h3 v-if="item.length">字母排序{{index}}</h3>
		 		  	    <div class="city" v-for="(city,index) in item" @click="chooseCity(city.name)">
		 		  	    		{{city.name}}
		 		  	    </div>
		 		  </div>
		 	</div>
		 <!-- </div> -->
		 	    
	</div>
</template>
<script type="text/javascript">
	    import axios from 'axios';
	    import {mapActions,mapGetters} from 'vuex';
	    export default {
	       data(){
	       	 return{
	       	 	city:[],
	       	 	CT:[],
	       	 }
	       },
	      created(){
	      	this.getCity();
	      },
	      methods:{
	      	...mapGetters([
	      		'showCityList'
	      		]),
	      	 getCity(){
	      	 	var that=this;
	      	 	axios.get('api/city',{}).then(function(res){
	      	 		var cityData=res.data.data.cities;
	      	 		cityData.sort((a, b) => a.pinyin > b.pinyin ? 1 : -1);  //排序
	      	 		that.city=cityData;
	      	 		var CT={};
	      	 		for(var i=0;i<26;i++){
	      	 			var letter=String.fromCharCode(65 + i);
	      	 			CT[letter]=[];
	      	 		}
	      	 		cityData.forEach(function(key,index){
	      	 			 var L=key.pinyin.substring(0,1);
	      	 			 CT[L].push(key);
	      	 		});
	      	 		that.CT=CT;
	      	 	}).catch(function(res){});
	      	 },
	      	 chooseCity(name){
	      	 	this.set_city(name);
	      	 	this.show_city_list(!this.showCityList);
	      	 },
	      	 ...mapActions([
	      	 	  'set_city',
	      	 	  'show_city_list',
	      	 	])
	      }
	    }
</script>
<style lang="less" scoped>
	.item{
		margin-top:1rem;
		h3{
			margin-left:1rem;
		}
	}
	.city-box{
		top:4rem;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		background:#fff;
		z-index:1000;
		overflow: auto;
	}
	.city-content{
		
	}
	.city{
		display:inline-block;
		width:100%/4;
		text-align:center;
		font-size:1.4rem;
		border-bottom:.1rem solid #ccc;
		margin-top:.3rem;
	} 
</style>
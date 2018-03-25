<template>
    <Carousel autoplay class="banner-box">
        <Carousel-item v-for="(item,index) in Blists" :key="index">
        	<img :src="item.imageUrl">
        </Carousel-item>
        
    </Carousel>
</template>
<script>
	import axios from 'axios';
    export default {
        data(){
        	return {
        		Blists:[],
        	}
        },
        created(){
        	this.getBanner();
        },
        methods:{
        	getBanner(){
        		var that=this;
        		axios.get('/api/billboard/home',{}).then(function(res){
					if(res.data.status===0){
						var bannerLists=res.data.data.billboards;
						that.Blists=bannerLists;
					}	
				}).catch(function (error) {console.log(error);})
        	}
        }
    }
</script>
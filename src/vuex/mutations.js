import * as types from './mutations_types';


const mutations = {
    
    [types.SHOW_MENU](state,isShow){
    	console.log("菜单状态更新");
        state.isShowSliderMenu=isShow;
    },
    // 更新用户信息
   // 修改城市
   [types.SET_CITY](state,city){
   	  state.city=city;
   },
   [types.SHOW_CITY_LIST](state,showCity){
   	  state.showCityList=showCity;
   }
    
}
export default mutations;

import * as types from './mutations_types';
export const show_menu = function ({commit}, isShow) {
    commit(types.SHOW_MENU,isShow);
}
export const set_city = function ({commit}, city) {
	commit(types.SET_CITY,city);
}

export const show_city_list =function({commit},showCityList){
	commit(types.SHOW_CITY_LIST,showCityList);
}
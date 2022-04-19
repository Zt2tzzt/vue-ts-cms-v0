import { IRootState } from '../../type'
import { Module } from 'vuex'
import type { IDashboardState } from './type'
import {
	getCategoryGoodsCount,
	getCategoryGoodsSale,
	getCategoryGoodsFavor,
	getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
	namespaced: true,
	state() {
		return {
			categgoryGoodsCount: [],
			categgoryGoodsSale: [],
			categgoryGoodsFavor: [],
			addressGoodsSale: []
		}
	},
	mutations: {
		changeCategoryGoodsCount(state, list) {
			state.categgoryGoodsCount = list
		},
		changeCategoryGoodsSale(state, list) {
			state.categgoryGoodsSale = list
		},
		changeCategoryGoodsFavor(state, list) {
			state.categgoryGoodsFavor = list
		},
		changeAddressGoodsSale(state, list) {
			state.addressGoodsSale = list
		}
	},
	actions: {
		/**
		 * @description: 请求图表所需的4组数据
		 * @Author: ZeT1an
		 */
		getDashboardDataAction({ commit }) {
			// 请求产品数量
			getCategoryGoodsCount().then(res => {
				commit('changeCategoryGoodsCount', res.data)
			})
			// 请求产品销售数据
			getCategoryGoodsSale().then(res => {
				commit('changeCategoryGoodsSale', res.data)
			})
			// 请求产品收藏数据
			getCategoryGoodsFavor().then(res => {
				commit('changeCategoryGoodsFavor', res.data)
			})
			// 请求产品地区销售数据
			getAddressGoodsSale().then(res => {
				commit('changeAddressGoodsSale', res.data)
			})
		}
	}
}

export default dashboardModule

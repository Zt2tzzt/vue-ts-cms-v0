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
		getDashboardDataAction({ commit }) {
			getCategoryGoodsCount().then(res => {
				commit('changeCategoryGoodsCount', res.data)
			})
			getCategoryGoodsSale().then(res => {
				commit('changeCategoryGoodsSale', res.data)
			})
			getCategoryGoodsFavor().then(res => {
				commit('changeCategoryGoodsFavor', res.data)
			})
			getAddressGoodsSale().then(res => {
				commit('changeAddressGoodsSale', res.data)
			})
		}
	}
}

export default dashboardModule

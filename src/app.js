/**
 * @file entry
 * @author lincenying(lincenying@qq.com)
 */

import Vue from 'vue'
import {createRouter} from './router'
import {createStore} from './store'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import titleMixin from './mixins'

Vue.mixin(titleMixin)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
export function createApp() {
    const router = createRouter()
    const store = createStore()
    sync(store, router)
    const app = new Vue({
        router,
        store,
        ...App
    })
    return {app, router, store}
}

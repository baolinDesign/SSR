import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _925549fa = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _d8791210 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _36389f20 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _13e024f0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _0d36ec88 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _a9f2fd74 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _0aab2f86 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _925549fa,
    children: [{
      path: "",
      component: _d8791210,
      name: "home"
    }, {
      path: "/login",
      component: _36389f20,
      name: "login"
    }, {
      path: "/register",
      component: _36389f20,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _13e024f0,
      name: "profile"
    }, {
      path: "/settings",
      component: _0d36ec88,
      name: "settings"
    }, {
      path: "/editor",
      component: _a9f2fd74,
      name: "editor"
    }, {
      path: "/article:slug",
      component: _0aab2f86,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

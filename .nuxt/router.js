import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a0fe3c3 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _9ceda090 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7fd50fb0 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _901297a0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _4fc03b08 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _6e410a06 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _c27e1106 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _7a0fe3c3,
    children: [{
      path: "",
      component: _9ceda090,
      name: "home"
    }, {
      path: "/login",
      component: _7fd50fb0,
      name: "login"
    }, {
      path: "/register",
      component: _7fd50fb0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _901297a0,
      name: "profile"
    }, {
      path: "/settings",
      component: _4fc03b08,
      name: "settings"
    }, {
      path: "/editor",
      component: _6e410a06,
      name: "editor"
    }, {
      path: "/article:slug",
      component: _c27e1106,
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

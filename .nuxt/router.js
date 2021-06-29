import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d844a42 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0f9329f7 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _39eb455e = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _230f1d91 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5fd6b58a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _71b57085 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _09d960de = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _7d844a42,
    children: [{
      path: "",
      component: _0f9329f7,
      name: "home"
    }, {
      path: "/login",
      component: _39eb455e,
      name: "login"
    }, {
      path: "/register",
      component: _39eb455e,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _230f1d91,
      name: "profile"
    }, {
      path: "/settings",
      component: _5fd6b58a,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _71b57085,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _09d960de,
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

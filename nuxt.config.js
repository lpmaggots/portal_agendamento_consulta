export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  head: {
    // Global page headers: https://go.nuxtjs.dev/config-head
    titleTemplate: '%s - agendamd',
    title: 'agendamd',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // Global CSS: https://go.nuxtjs.dev/config-css
    '@/assets/scss/main.scss'
  ],
  plugins: [
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    '@/plugins/vue-use'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  buildModules: [
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  modules: [
    // Modules: https://go.nuxtjs.dev/config-modules
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDveFwsH9rEb4cnHXbjXxspfZEyhNwcDs4',
          authDomain: 'agendamento-md.firebaseapp.com',
          projectId: 'agendamento-md',
          storageBucket: 'agendamento-md.appspot.com',
          messagingSenderId: '189649003730',
          appId: '1:189649003730:web:478e4c4014b117ac96390b',
          measurementId: 'G-8N2YD08VYW'
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  vuetify: {
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true
  },
  build: {
    // Build Configuration: https://go.nuxtjs.dev/config-build
  }
}

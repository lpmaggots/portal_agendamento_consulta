<template>
    <div>
        <v-app-bar app prominent color="blue" dark height="auto">
            <v-container class="py-3 fill-height">
                <a href="#">
                    <v-img :src="require(`@/static/${logo}`)" max-width="100%"></v-img>
                </a>
                <v-spacer></v-spacer>
                <div v-for="(item, index) in links" :key="item.label" class="hidden-md-and-down"> 
                    <div v-if="index == links.length - 1" key="lastItem" class="ml-5">
                        <v-btn color="white" large light v-if="!isLogged" to="/InternalSystem/Login" router>
                            {{ item.label }}
                        </v-btn>
                        <v-btn text v-else>
                            Minha área
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </div>
                    <div v-else key="items" class="mx-5">
                        <NuxtLink class="menu-link" :to="item.url" router exact>
                            {{ item.label }}
                        </NuxtLink>
                    </div>
                </div>
                <v-app-bar-nav-icon
                    @click="drawer = !drawer"
                    class="hidden-lg-and-up"
                ></v-app-bar-nav-icon>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group>
                    <v-list-item v-for="item in links" :key="item.label" :to="item.url" router exact>
                        <v-list-item-icon>
                            <v-icon>
                                {{ item.icon }}
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ item.label }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            isLogged: false,
            logo: 'images/logotipo/health-logo.png',
            links: [
                {
                    label: 'Home',
                    icon: 'mdi-home',
                    url: '/'
                },
                {
                    label: 'Sobre',
                    icon: 'mdi-information-outline',
                    url: '#'
                },
                {
                    label: 'FAQ',
                    icon: 'mdi-message-question-outline',
                    url: '##'
                },
                {
                    label: 'Fale conosco',
                    icon: 'mdi-chat-outline',
                    url: '###'
                },
                {
                    label: 'Faça o login',
                    icon: 'mdi-login',
                    url: '/Static/Login'
                }
            ]
        })
    }
</script>

<style lang="scss" scoped>
    .menu-link {
        color: white;
        text-decoration: none;
        padding-left: 0.2em;
        padding-right: 0.2em;
    }
    .nuxt-link-active {
        color: map-get($blue, 'lighten-5');
    }
</style>
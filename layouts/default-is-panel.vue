<template>
    <v-app id="inspire">   
        <Menu />
        <v-main class="control-space-menu background mt-10 pb-10">
            <v-container>
                <v-row>
                    <AsideNavigation />
                    <v-col>
                        <v-sheet class="py-3 px-3 rounded" elevation="2">
                            <Nuxt />
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <Footer />
    </v-app>
</template>

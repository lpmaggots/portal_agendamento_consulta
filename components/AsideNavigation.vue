<template>
    <v-col lg="3">
        <v-card class="fixed">
            <v-navigation-drawer>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Gerenciar
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense nav>
                    <v-list-item v-for="item in links" :key="item.label" :to="item.url" router exact>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.label }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </v-col>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                label: "Consultas agendadas",
                icon: "mdi-calendar-check",
                url: "/InternalSystem/Appointment",
            },
            {
                label: "Meu perfil",
                icon: "mdi-account",
                url: "/InternalSystem/Account",
            },
        ],
    }),
}
</script>

<style scoped>
    .fixed {
        position: sticky;
        top: 143px;
    }
    .v-navigation-drawer {
        width: auto !important;
    }
</style>
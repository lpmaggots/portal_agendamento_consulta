<template>
    <v-row>
        <v-col>
            <v-card class="mb-10 pt-4" elevation="3">
                <v-toolbar dense flat>
                    <v-tabs v-model="tab" align-with-title>
                        <v-tabs-slider color="blue darken-1"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item" class="blue--text darken-1">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </v-toolbar>
                <v-card-text>
                    <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="item in items"
                            :key="item"
                        >
                            <v-row class="pt-2 pb-3">
                                <v-col lg="6" md="12" sm="12" cols="12">
                                    <div class="d-flex">
                                        <v-avatar color="blue lighten-5 white--text mt-6" size="55" class="ml-5 mr-4">
                                            <b>F</b>
                                        </v-avatar>
                                        <div>
                                            <v-card-title>
                                                <NuxtLink to="#">
                                                    Dr. Felipe Falcone - CRM: 54865484
                                                </NuxtLink>
                                            </v-card-title>
                                            <v-card-subtitle>
                                                Dermatologista (Tratamentos estéticos
                                                faciais, Tratamentos estéticos
                                                corporais, Queda de cabelo, Manchas na
                                                pele), Especialista em medicina estética
                                                (Tricologia, Toxina botulínica,
                                                Rejuvenescimento, Tratamentos de rugas)
                                            </v-card-subtitle>
                                        </div>
                                    </div>
                                    <div class="ml-5 mr-4">
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-icon color="blue darken-1">
                                                        mdi-map-marker
                                                    </v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title> Alameda Barão de Limeira 111</v-list-item-title>
                                                    <v-list-item-subtitle>01202-000 - Campos Eliseos - São Paulo - SP</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-icon color="blue darken-1">
                                                        mdi-phone
                                                    </v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>(11) 95246-8503</v-list-item-title>
                                                    <v-list-item-subtitle>WhatsApp</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-action></v-list-item-action>
                                                <v-list-item-content>
                                                    <v-list-item-title>(11) 95246-8503</v-list-item-title>
                                                    <v-list-item-subtitle>Telefone</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </v-col>
                                <v-divider inset vertical></v-divider>
                                <v-col lg="6" md="12" sm="12" cols="12" class="d-flex flex-column align-center justify-center">
                                    <v-card-title>Escolha a data da sua consulta</v-card-title>
                                    <v-card-subtitle>
                                        * As datas em cinza não estão disponiveis ou já
                                        foram preenchidas.
                                    </v-card-subtitle>
                                    <v-date-picker
                                        v-model="date"
                                        class="rounded-0"
                                        color="blue darken-1"
                                        full-width
                                        no-title
                                        locale="pt"
                                        @click:date="checkSchedule()"
                                    ></v-date-picker>
                                    <v-dialog ref="dialog" v-model="modal" persistent width="750px">
                                        <v-card>
                                            <v-card-title class="d-flex justify-center mb-1">
                                                Agende seu horário
                                            </v-card-title>
                                            <v-card-subtitle class="text-center">
                                                Os horários abaixo estão disponiveis para consulta.
                                            </v-card-subtitle>
                                            <v-card-text>
                                                <v-chip-group >
                                                    <v-chip
                                                        class="mx-1"
                                                        active-class="success--text"
                                                        label
                                                        link
                                                        outlined
                                                        v-for="schedule in schedules"
                                                        :key="schedule"
                                                    >
                                                        {{ schedule }}
                                                    </v-chip>
                                                </v-chip-group>
                                            </v-card-text>
                                            <v-divider></v-divider>
                                            <v-card-actions class="d-flex justify-space-between py-3">
                                                <v-btn large @click.stop="modal=false">Cancelar</v-btn>
                                                <v-btn color="success" large @click.stop="modal=false" to="/InternalSystem/Resume">Agendar consulta</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import pt from 'vuetify/lib/locale/pt'

    export default {
        lang: {
            locales: { pt },
            current: 'pt',
        },
        data: () => ({
            tab: null,
            modal: false,
            telemedicina: false,
            items: ['Clinica 1', 'Clinica 2', 'Clinica 3'],
            schedules: ['08:30', '09:00', '10:30', '11:00', '13:45', '14:30', '15:30', '16:00', '16:30', '17:00'],
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
        }),
        methods: {
            checkSchedule() {
                this.modal = !this.modal;
            }
        }
    }
</script>
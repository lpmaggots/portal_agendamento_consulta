<template>
    <div>
        <v-btn class="mx-2" color="primary" large @click="change()">Remarcar consulta</v-btn>

        <v-dialog ref="dialog" v-model="modal" persistent width="1200px">
            <v-card>
                <v-container>
                    <v-row class="pt-2 pb-3">
                        <v-col lg="6" md="12" sm="12" cols="12">
                            <div class="d-flex">
                                <v-avatar color="blue lighten-5 white--text mt-6" size="55" class="ml-5 mr-4">
                                    <b>F</b>
                                </v-avatar>
                                <div>
                                    <v-card-title>
                                        Dr. Felipe Falcone - CRM: 54865484
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
                        </v-col>
                    </v-row>
                    <transition name="fade">
                        <v-row v-if="showSchedules">
                            <v-col class="d-flex flex-column justify-center align-center">
                                <v-card-title class="d-flex justify-center mb-1">
                                    Selecione seu horário
                                </v-card-title>
                                <v-card-subtitle class="text-center">
                                    Os horários abaixo estão disponiveis para consulta.
                                </v-card-subtitle>
                                <v-chip-group class="text-center">
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
                            </v-col>
                        </v-row>
                    </transition>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions class="d-flex justify-space-between py-3">
                    <v-btn large @click.stop="modal = false">
                         Voltar
                    </v-btn>
                    <v-btn
                        color="success"
                        dark
                        large
                        @click.stop="modal = false"
                    >
                        Remarcar consulta
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import pt from 'vuetify/lib/locale/pt'

    export default {
        lang: {
            locales: { pt },
            current: 'pt',
        },
        data: () => ({
            modal: false,
            showSchedules: false,
            schedules: ['08:30', '09:00', '10:30', '11:00', '13:45', '14:30', '15:30', '16:00', '16:30', '17:00'],
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
        }),
        methods: {
            change() {
                this.modal = !this.modal;
            },
            checkSchedule() {
                this.showSchedules = !this.showSchedules
            }
        }
    }
</script>
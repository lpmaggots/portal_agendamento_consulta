<template>
    <div>
        <v-card v-for="n in 3" :key="n" elevation="0">
            <v-card-text>
                <v-row>
                    <v-col lg="12" class="d-flex flex-column justify-space-between">
                        <div class="d-flex">
                            <v-avatar
                                color="blue lighten-5 white--text"
                                size="45"
                                class="mt-6 ml-2 mr-1"
                            >
                                <b>F</b>
                            </v-avatar>
                            <div>
                                <v-card-title>
                                    Dr. Felipe Falcone - CRM: 54865484
                                </v-card-title>
                                <v-card-subtitle>
                                    Dermatologista (Tratamentos estéticos faciais,
                                    Tratamentos estéticos corporais, Queda de
                                    cabelo, Manchas na pele), Especialista em
                                    medicina estética (Tricologia, Toxina
                                    botulínica, Rejuvenescimento, Tratamentos de
                                    rugas)
                                </v-card-subtitle>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-list>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="blue darken-1">
                                        mdi-clock-outline
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        >03/07/2021 as 13h30</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        >Data e horário da
                                        consulta</v-list-item-subtitle
                                    >
                                </v-list-item-content>
                                <div class="d-flex align-center success--text">
                                    <div class="block-icon success text-center mr-2">
                                        <v-icon color="white">mdi-check</v-icon>
                                    </div>
                                    AGENDADO
                                </div>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="blue darken-1">
                                        mdi-map-marker
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        >Alameda Barão de Limeira
                                        111</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        >01202-000 - Campos Eliseos - São Paulo -
                                        SP</v-list-item-subtitle
                                    >
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="blue darken-1">
                                        mdi-phone
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        >(11) 95246-8503</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        >WhatsApp</v-list-item-subtitle
                                    >
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
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-between mb-7">
                <CancelAppointment class="mx-2" />
                <ChangeDoctorSchedule />
            </v-card-actions>
            <v-divider v-if="n < 3"></v-divider>
        </v-card>
    </div>
</template>

<style scoped>
    .block-icon {
        width: 25px;
        height: 25px;
        border-radius: 5px;
    }
</style>
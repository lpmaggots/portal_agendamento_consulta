<template>
    <div class="mt-5">
        <v-row>
            <v-col lg="4" md="4" sm="4" cols="12">
                <v-autocomplete
                    class="rounded-0"
                    clearable
                    solo
                    placeholder="Especialidade Médica"
                ></v-autocomplete>
                
            </v-col>
            <v-col lg="4" md="4" sm="4" cols="12">
                <v-autocomplete
                    class="rounded-0"
                    clearable
                    solo
                    placeholder="Estado / Cidade"
                ></v-autocomplete>
            </v-col>
            <v-col lg="4" md="4" sm="4" cols="12">
                <v-autocomplete
                    class="rounded-0"
                    clearable
                    solo
                    placeholder="Bairro"
                ></v-autocomplete>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-expansion-panels flat class="mt-3">
                    <v-expansion-panel class="transparent">
                        <v-expansion-panel-header expand-icon="mdi-none">
                            <div class="label-expansion-panel text-center">
                                Refine sua pesquisa
                                <v-icon>
                                    mdi-menu-down
                                </v-icon>
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col lg="4" md="4" sm="4" cols="12">
                                    <v-select
                                        class="rounded-0"
                                        dense
                                        placeholder="Tipo de atendimento"
                                    ></v-select>
                                </v-col>
                                <v-col lg="4" md="4" sm="4" cols="12">
                                    <v-autocomplete
                                        class="rounded-0"
                                        clearable
                                        dense
                                        placeholder="Convênio médico"
                                    ></v-autocomplete>
                                </v-col>
                                <v-col lg="4" md="4" sm="4" cols="12">
                                    <v-autocomplete
                                        class="rounded-0"
                                        clearable
                                        dense
                                        placeholder="Clinica / Profissional"
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
    .label-expansion-panel {
        font-size: 18px;
    }
    .v-expansion-panels {
        top: -30px;
    }
</style>
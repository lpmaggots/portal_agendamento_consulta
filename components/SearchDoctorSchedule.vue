<template>
    <v-row>
        <v-col lg="5" fill-height>
            <h1 class="blue--text d-flex flex-column justify-center">
                Agende sua consulta
            </h1>
            <form ref="entryForm" @submit.prevent="submit()">
                <v-radio-group 
                    row
                    v-model="formData.tipo_atendimento"
                >
                    <v-radio
                        label="Presencial"
                        value="presencial"
                    ></v-radio>
                    <v-radio
                        label="Telemedicina"
                        value="telemedicina"
                    ></v-radio>
                </v-radio-group>
                <v-autocomplete
                    solo
                    class="rounded-0"
                    placeholder="Especialidade Médica"
                    v-model="formData.especialidade"
                    :items="especialidade"
                ></v-autocomplete>
                <transition name="fade">
                    <v-autocomplete
                        solo
                        class="rounded-0"
                        placeholder="Estado / Cidade"
                        v-if="formData.especialidade"
                        v-model="formData.estado_cidade"
                        :items="estadoCidade"
                    ></v-autocomplete>
                </transition>
                <transition name="fade">
                    <v-autocomplete
                        solo
                        multiple
                        class="rounded-0"
                        placeholder="Bairro"
                        v-if="formData.estado_cidade"
                        v-model="formData.bairro"
                        :items="bairro"
                    ></v-autocomplete>
                </transition>
                <transition name="fade">
                    <v-btn
                        dark
                        type="submit"
                        color="primary"
                        large
                        v-if="formData.estado_cidade"
                        to="/InternalSystem/DoctorSchedule"
                    >
                    Buscar horário
                    </v-btn>
                </transition>
            </form>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            formData: {
                tipo_atendimento: '',
                especialidade: '',
                estado_cidade: '',
                bairro: '',
            },
            especialidade: ["Analise Clinica", "Clinico Geral", "Endocrinologista", "Nutricionista"],
            estadoCidade: ["São Paulo", "Rio de janeiro", "Parana"],
            bairro: ["Campos Eliseos", "Santa Cecilia", "Republica", "Vila Matilde","Tatuapé"]
        }),
        methods: {
            submit() {
                alert('Clicado')
            }
        }
    }
</script>
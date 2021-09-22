<template>
    <div>
        <v-btn large @click="cancel()"> Cancelar consulta </v-btn>

        <v-dialog ref="dialog" v-model="modal" persistent width="750px">
            <v-card>
                <v-card-title class="title d-flex justify-center mb-1">
                    Cancelamento
                </v-card-title>
                <v-card-text class="subtitle text-center">
                    Deseja prosseguir com o cancelamento?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="d-flex justify-space-between py-3">
                    <v-btn large @click.stop="modal = false">
                         Voltar
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        dark
                        large
                        @click.stop="modal = false"
                    >
                        Cancelar consulta
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
    export default {
        data: () => ({
            modal: false
        }),
        methods: {
            cancel() {
                this.modal = !this.modal;
            }
        }
    }
</script>

<style scoped>
    .title {
        font-size: 28px !important;
    }
    .subtitle {
        font-size: 17px !important;
    }
</style>
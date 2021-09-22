<template>
    <v-container class="fill-height">
        <v-row>
            <v-col lg="10" offset-lg="1" class="mt-10">
                <v-sheet class="py-3 px-3 rounded" elevation="2">
                    <v-row>
                        <v-col>
                            <div
                                class="container-title d-flex flex-column align-center"
                            >
                                <v-avatar
                                    class="container-title-check elevation-3"
                                    color="success"
                                    size="56"
                                >
                                    <v-icon color="white">mdi-check</v-icon>
                                </v-avatar>
                                <h1 class="text-center mt-5">Consulta agendada</h1>
                                <p class="text-center">
                                    Sua consulta foi agendada com sucesso! Agora é só
                                    conferir seus dados e aguardar pela data do
                                    atendimento =)
                                </p>
                            </div>
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <DetailsAppointment />
                        </v-col>
                        <v-col class="d-flex flex-column justify-center align-center">
                            <CalendarAppointment />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-divider class="mb-5"></v-divider>
                            <div class="d-flex justify-space-between">
                                <CancelAppointment />
                                <v-btn color="primary" large to="./Appointment">
                                    Área do paciente
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: "default-with-background",
};
</script>

<style scoped>
.container-title {
    position: relative;
}
.container-title-check {
    position: absolute;
    top: -50px;
}
</style>
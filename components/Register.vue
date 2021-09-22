<template>
    <div>
        <v-dialog transition="dialog-top-transition" persistent max-width="1000">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" large v-bind="attrs" v-on="on">Cadastre-se</v-btn>
            </template>
            <template v-slot:default="dialog">
                <v-card>
                    <v-form>
                        <v-toolbar class="d-flex flex-column align-center" color="primary" dark flat>
                            <h1>Cadastro de Paciente</h1>
                        </v-toolbar>
                        <v-card-text class="mt-6 px-10">
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        label="Nome completo"
                                        placeholder="Nome completo"
                                        outlined
                                        v-model="formData.nome_completo"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="CPF"
                                        placeholder="CPF"
                                        outlined
                                        v-model="formData.cpf"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        type="email"
                                        label="E-mail"
                                        placeholder="E-mail"
                                        outlined
                                        v-model="formData.email"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select
                                        label="Convênio"
                                        placeholder="Convênio"
                                        outlined
                                        v-model="formData.email"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        type="tel"
                                        label="Telefone"
                                        placeholder="Telefone "
                                        outlined
                                        v-model="formData.telefone"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        type="tel"
                                        label="Telefone / WhatsApp"
                                        placeholder="Telefone / WhatsApp"
                                        outlined
                                        v-model="formData.celular_whatsapp"
                                        hint="Será enviado um código de verificação para o seu celular."
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-select
                                        label="Estado civil"
                                        placeholder="Estado civil"
                                        outlined
                                        v-model="formData.estado_civil"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex flex-column justify-center">
                                    <div class="ajust-radio-group">
                                        <label class="mt-0">Sexo de Nascimento</label>
                                        <v-radio-group
                                            v-model="formData.sexo"
                                            row
                                            class="mt-0"
                                        >
                                            <v-radio
                                                label="Masculino"
                                                value="masculino"
                                            ></v-radio>
                                            <v-radio
                                                label="Feminino"
                                                value="feminino"
                                            ></v-radio>
                                            <v-radio
                                                label="Prefiro não informar"
                                                value="nao_informado"
                                            ></v-radio>
                                        </v-radio-group>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        label="Digite sua senha"
                                        placeholder="Digite sua senha"
                                        hint="Deve ter pelo menos 8 caracteres."
                                        counter
                                        outlined
                                        v-model="formData.senha"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="showPassword ? 'text' : 'password'"
                                        @click:append="showPassword = !showPassword"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="Confirme sua senha"
                                        placeholder="Confirme sua senha"
                                        hint="Deve ter pelo menos 8 caracteres."
                                        counter
                                        outlined
                                        v-model="formData.confirma_senha"
                                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="showConfirmPassword ? 'text' : 'password'"
                                        @click:append="showConfirmPassword = !showConfirmPassword"
                                    ></v-text-field>
                                </v-col>
                            </v-row>                            
                        </v-card-text>
                        <v-card-actions class="justify-space-between py-4 px-10">
                            <v-btn @click="dialog.value = false" large>Cancelar</v-btn>
                            <v-btn color="success" large dark @click="dialog.value = false">Cadastrar dados</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        showPassword: false,
        showConfirmPassword: false,
        formData: {
            cpf: '',
            nome_completo: '',
            email: '',
            telefone: '',
            celular_whatsapp: '',
            estado_civil: '',
            sexo: '',
            convenio: '',
            senha: '',
            confirma_senha: ''
        }
    })
}
</script>
<style scoped>
    .ajust-radio-group {
        margin-top: -12px;
    }
</style>
<template>
    <v-row>
        <v-col lg="6" cols="12">
            <h2 class="mb-3">Alterar dados</h2>
            <v-text-field
                v-model="formData.email"
                outlined
                label="E-mail"
                placeholder="E-mail"
            ></v-text-field>
            <v-text-field
                v-model="formData.telefone"
                outlined
                label="Telefone"
                placeholder="Telefone"
            ></v-text-field>
            <v-text-field
                v-model="formData.celular"
                outlined
                label="Celular / WhatsApp"
                placeholder="Celular / WhatsApp"
            ></v-text-field>
            <v-select
                v-model="formData.convenio"
                label="Convênio"
                placeholder="Convênio"
                outlined
            ></v-select>
            <h2 class="mb-3">Alterar senha</h2>
            <v-text-field
                v-model="formData.senha"
                label="Digite sua nova senha"
                placeholder="Digite sua nova senha"
                hint="Deve ter pelo menos 8 caracteres."
                counter
                outlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-text-field
                v-model="formData.confirma_senha"
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                hint="Deve ter pelo menos 8 caracteres."
                counter
                outlined
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirmPassword ? 'text' : 'password'"
                @click:append="showConfirmPassword = !showConfirmPassword"
            ></v-text-field>
            <v-btn color="success" large>Alterar dados</v-btn>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            showPassword: false,
            showConfirmPassword: false,
            formData: {
                email: '',
                telefone: '',
                celular: '',
                convenio: '',
                senha: '',
                confirma_senha: ''
            }
        })
    }
</script>
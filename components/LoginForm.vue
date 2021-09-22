<template>
    <v-form @submit.prevent="doLogin()">
        <v-card-text>
            <div class="d-flex justify-space-between align-center pb-5 pr-1">
                <a href="#" v-for="link in socialLogin" :key="link.label" class="d-flex align-center" @click.prevent="checkLink(link.id)">
                    <v-img :src="require(`@/static/${link.ico}`)" width="32"></v-img>
                    {{ link.label }}
                </a>
            </div>
            <v-text-field
                v-model="formData.usuario"
                label="Digite seu CPF"
                placeholder="Digite seu CPF"
                outlined
                append-icon="mdi-account"
                :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
                v-model="formData.senha"
                label="Digite sua senha"
                placeholder="Digite sua senha"
                hint="Deve ter pelo menos 8 caracteres."
                counter
                outlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="[rules.required, rules.min]"
            ></v-text-field>
            <div class="d-flex justify-space-between align-center mt-2">
                <a href="#">ESQUECI MINHA SENHA</a>
                <v-btn type="submit" color="primary" large>
                    Faça o login
                </v-btn>
            </div>
            <v-divider class="mt-6"></v-divider>
        </v-card-text>
        <v-card-actions class="d-flex flex-column">
            <p class="mb-2">AINDA NÂO POSSUI CONTA?</p>
            <Register />
        </v-card-actions>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        showPassword: false,
        socialLogin: [
            {
                "id": 'Google',
                "ico": 'icos/login-google.png',
                "label": 'Logar utilizando conta Google',
                "clickEvent": 'googleSignIn'
            },
            {
                "id": 'Smartphone',
                "ico": 'icos/login-sms.png',
                "label": 'Logar utuilizando celular',
                "clickEvent": 'smartphoneSignIn'
            }
        ],
        formData: {
            usuario: '',
            senha: '',
        },
        rules: {
            required: (value) => !!value || "Obrigatório.",
            min: (v) => v.length >= 8 || "Minimo 8 caracteres",
        },
    }),
    methods: {
        checkLink(id) {
            id == 'Google' ? this.googleSignIn() : this.smartphoneSignIn()
        },
        googleSignIn() {
            var provider = new this.$fireModule.auth.GoogleAuthProvider();
            this.$fireModule.auth().signInWithPopup(provider).then(result => {
                this.$router.push({ path: "/" });
            }).catch(e => {
                console.log(e)
            })
        },
        smartphoneSignIn() {
            alert('smartphoneSignIn')
        },
        doLogin() {
            this.$router.push({ path: "/InternalSystem/Appointment" });
        },
    },
};
</script>
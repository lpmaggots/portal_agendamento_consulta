<template>
    <div>

        <v-container fluid class="call-to-action">
            <v-container class="fill-height">
                <SearchDoctorSchedule />
            </v-container>
        </v-container>

        <v-container fluid>
            <v-container class="fill-height py-10">
                <v-row>
                    <v-col lg="4">
                        <div class="border-patient text-center py-8 px-5">
                            <h2 class="blue--text mb-6">Paciente</h2>
                            <v-img :src="require(`@/static/${patientImage}`)" class="mb-8"></v-img>
                            <Register />
                        </div>
                    </v-col>
                    <v-col lg="7" offset-lg="1" class="text-patient d-flex flex-column justify-center">
                        <h2 class="blue--text mb-3">Bem-vindo ao nosso portal de agendamento online!</h2>
                        <p>Tenha acesso a um portal exclusivo com os melhores profissionais de saúde do nosso país. Escolha o tipo de consulta, o estado e a cidade, a especialidade e o profissional. Agende o melhor dia e horário para a sua consulta e tenha acesso a um painel pessoal exclusivo, com o seu histórico de saúde, atendimentos anteriores, notificações e muito mais!</p>
                        <h3 class="text-center">Para ter acesso a tantas facilidades, basta se cadastrar e utilizar o serviço totalmente de graça!</h3>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        
        <v-container fluid class="white">
            <v-container class="py-10">
                <v-row>
                    <v-col class="text-center">
                        <h1 class="blue--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col lg="3" md="3" sm="12" v-for="item in benefiti" :key="item.title">
                        <v-card 
                            height="300"
                            color="grey lighten-3"
                            class="card-benefiti d-flex align-center px-3"
                            :style="'background-image: url(' + require(`@/static/${item.src}`) + ');'">
                            <v-row>
                                <v-col lg="8" md="8">
                                    <h4>{{ item.title }}</h4>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <div width="100" class="center-btn text-center mt-6">
                        <v-btn color="success" large href="#" target="_blank">Saiba mais e contrate</v-btn>
                    </div>
                </v-row>
                <v-row>
                    <v-col class="text-center mt-10">
                        <h1 class="blue--text mb-3">Certificações do nosso sistema</h1>
                        <div class="d-flex flex-wrap justify-center align-center">
                            <a v-for="item in certificate" :key="item.alt" :href="item.href" target="_blank" class="my-2 mx-3">
                                <v-img :src="require(`@/static/${item.src}`)" :alt="item.alt"></v-img>
                            </a>
                            <v-card>
                                teste
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>

    </div>
</template>

<style lang="scss" scoped>
    .call-to-action {
        height: 650px;
        background-image: url('@/static/images/banner-portal.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .border-patient {
        border: 1px solid #666666;
        border-radius: 3px;
        & h2 {
            font-size: 29px;
        }
    }
    .text-patient {
        & h2 {
            font-size: 29px;
        }
        & h3 {
            color: #666666;
            font-size: 22px;
        }
        & p {
            text-align: justify;
        }
    }
    .card-benefiti {
        background-repeat: none;
        background-position: right center;
        background-size: contain;
        & h4 {
            color: #666666;
            font-size: 25px;
        }
    }
    .center-btn {
        width: 100%;
    }
</style>

<script>
export default {
    data: () => ({
        patientImage: 'images/home/paciente.png',
        benefiti: [
            {
                "src": 'images/home/pep-beneficio-1.png',
                "title": 'Sistema Certificado'
            },
            {
                "src": 'images/home/pep-beneficio-2.png',
                "title": 'Agenda Inteligente'
            },
            {
                "src": 'images/home/pep-beneficio-3.png',
                "title": 'Gestão Financeira Completa'
            },
            {
                "src": 'images/home/pep-beneficio-4.png',
                "title": 'Receituário'
            },
            {
                "src": 'images/home/pep-beneficio-5.png',
                "title": 'Sistema Eletrônico'
            },
            {
                "src": 'images/home/pep-beneficio-6.png',
                "title": 'Faturamento de Convênios'
            },
            {
                "src": 'images/home/pep-beneficio-7.png',
                "title": 'Agiliza a solicitação de exames'
            },
            {
                "src": 'images/home/pep-beneficio-8.png',
                "title": 'Suporte Total'
            }
        ],
        certificate: [
            {
                "href": 'https://www.dnb.com/',
                "src": 'images/logotipo/d-b.png',
                "alt": 'Certificado D&B'
            },
            {
                "href": 'http://www.sbis.org.br/certificacao/certificados/Certificado_SBIS_SRES_064_MedicinaDireta.pdf',
                "src": 'images/logotipo/sbis-certificado.jpg',
                "alt": 'Certificado SBIS'
            },
            {
                "href": 'http://www.sbis.org.br/certificacao/certificados/Certificado_SBIS_SRES_064_MedicinaDireta.pdf',
                "src": 'images/logotipo/sbis-certificado-2.png',
                "alt": 'Certificado SBIS 2'
            },
            {
                "href": 'https://portal.cfm.org.br/',
                "src": 'images/logotipo/cfm.png',
                "alt": 'Certificado CFM'
            },
            {
                "href": 'https://www.comodo.com/',
                "src": 'images/logotipo/comodo-secure.png',
                "alt": 'Certificado Comodo'
            }
        ]
    })
}
</script>
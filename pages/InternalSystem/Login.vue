<template>
    <div>
        <Breadcrumb pageTitle="FAÇA O SEU LOGIN" />
        <v-container>
            <v-row>
                <v-col lg="6" offset-lg="3" class="mb-10">
                    <v-card color="grey lighten-5" elevation="2" class="py-4">
                        <LoginForm />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        layout: 'default-with-background'
    }
</script>
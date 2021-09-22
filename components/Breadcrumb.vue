<template>
    <v-container fluid class="call-to-action mb-10">
        <v-container class="fill-height">
            <v-row>
                <v-col>
                    <h1>
                        {{ pageTitle }}
                    </h1>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        props: ['pageTitle']
    }
</script>

<style scoped>
    .call-to-action {
        height: 250px;
        background-image: url('@/static/images/banner-interno.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
</style>
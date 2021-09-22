<template>
    <div class="text-center">
        <h2>Adicione sua consulta</h2>
        <p class="text-center">
            Salve no seu calendário para não perder a consulta.
        </p>
        <div class="d-flex justify-center align-center pb-5 pr-1">
            <a href="#" v-for="link in calendarButton" :key="link.label" class="d-flex align-center mx-3">
                <v-img :src="require(`@/static/${link.ico}`)" width="25" class="mb-1"></v-img>
                {{ link.label }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        calendarButton: [
            {
                "ico": 'icos/login-google.png',
                "label": 'Google Calendar'
            },
            {
                "ico": 'icos/apple-logo.png',
                "label": 'iCalendar'
            }
        ],
    })
}
</script>
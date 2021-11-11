<template>
    <div class="idx">
        <Header />
        <IdxBanner />
        <IdxSearch />
        <IdxEvent />
        <IdxFood />
        <IdxHotel />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import IdxBanner from "@/components/IdxBanner.vue";
import IdxSearch from "@/components/IdxSearch.vue";
import IdxEvent from "@/components/IdxEvent.vue";
import IdxFood from "@/components/IdxFood.vue";
import IdxHotel from "@/components/IdxHotel.vue";
export default {
    components: {
        Header,
        Footer,
        IdxBanner,
        IdxSearch,
        IdxEvent,
        IdxFood,
        IdxHotel,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
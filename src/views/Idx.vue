<template>
    <div class="idx">
        <Header />
        <IdxBanner />
        <IdxSearch />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import IdxBanner from "@/components/IdxBanner.vue";
import IdxSearch from "@/components/IdxSearch.vue";
export default {
    components: {
        Header,
        Footer,
        IdxBanner,
        IdxSearch,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="sass">
</style>
<template>
    <div class="idx-hotel">
        <div class="idx-hotel-title">
            <h2>精選住宿</h2>
            <small>ACCOMMODATION</small>
        </div>
        <ul>
            <HotelListItem v-for="(item, i) in 4" :key="i" />
        </ul>
        <button>更多住宿</button>
    </div>
</template>

<script>
import HotelListItem from "@/components/HotelListItem.vue";
export default {
    components :{
        HotelListItem,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss">
</style>
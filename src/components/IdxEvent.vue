<template>
    <div class="idx-event">
        <ul>
            <EventListItem v-for="(item, i) in 3" :key="i" />
            <div>
                <h2>多久沒有<br>出門走走了呢？</h2>
                <small>LET’S GET OUT</small>
                <button>更多FUNNY</button>
            </div>
        </ul>
        <ul>
            <EventListItem v-for="(item, i) in 3" :key="i" />
        </ul>
    </div>
</template>

<script>
import EventListItem from "@/components/EventListItem.vue";
export default {
    components: {
        EventListItem,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
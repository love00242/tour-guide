<template>
    <div class="idx-food">
        <div class="idx-food-title">
            <div>
                <h2>餐飲美食</h2>
                <small>TASTY</small>
            </div>
            <button>更多美味</button>
        </div>
        <div class="idx-food-info">
            <ul>
                <li v-for="(item, i) in 5" :key="i">
                    <img :src="`/images/idxFood0.png`" alt="">
                    <p>
                        長腳96
                        <small>異國料理</small>
                    </p>
                    <span>新北市</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>
<template>
    <li class="hotel-list-item">
        <div class="hotel-list-item-img">
            <img src="/images/hotel1.png" alt="">
        </div>
        <h2>洛碁大飯店忠孝館</h2>
        <small>國際觀光旅館</small>
        <div class="hotel-list-item-text">
            <p>1200<small>起</small></p>
            <span>桃園市</span>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},      
}
</script>

<style lang="scss">
.hotel-list-item {
    max-width: 290px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    border-radius: 10px;  
    margin-right: 15px;
    background: #fff;
    h2 {
        font-size: 16px;
        letter-spacing: 0.03em;
        padding: 10px 10px 0;
    }
    small {
        font-size: 12px;
        letter-spacing: 0.03em;
        color: #A8A8A8;
        padding: 0 10px;
    }
    &-text {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        span {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.03em;
            color: #0085FF;
            font-weight: 550;
            small {
                padding: 0 3px;
            }
        }
    }
}
</style>
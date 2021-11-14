<template>
    <li class="event-list-item">
        <div class="event-list-item-img">
            <img src="/images/event1.png" alt="">
        </div>
        <h2>2021大溪豆干節</h2>
        <small>花蓮縣壽豐鄉鹽寮村6鄰福德49-2號</small>
        <div class="event-list-item-text">
            <div>
                <p>節慶</p>
                <p>藝文</p>
            </div>
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
.event-list-item {
    width: 290px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    margin-right: 30px;
    background: #fff;
    &-img { //
        width: 290px;
        height: 243px;
    }
    h2 {
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.03em;
        font-weight: 550;
        padding: 10px 10px 0;
    }
    small {
        color:#A8A8A8;
        font-size: 12px;
        letter-spacing: 0.03em;
        padding: 0 10px;
    }
    &-text {
        display: flex;
        align-items: center;
        padding: 10px 10px 15px;
        div {
            display: flex;
            width: 84%;
            p {
                background: #EDEDED;
                border-radius: 11px;
                font-size: 12px;
                padding: 4px;
                width: 42px;
                text-align: center;
                margin-right: 5px;
                line-height: 17px;
            }
        }
        span {
            color: #0085FF;
            font-weight: 550;
            font-size: 14px;
            letter-spacing: 0.03em;
        }
    }
}
</style>
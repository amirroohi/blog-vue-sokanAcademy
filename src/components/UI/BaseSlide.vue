<template>
    <swiper class="swiper" :modules="[Pagination, Navigation]" :space-between="5" :slides-per-view="1"
        :slides-per-group="1" :loop="true" :loop-fill-group-with-blank="true" :navigation="{ clickable: true }"
        :pagination="{ clickable: true }" :breakpoints="{
            '768': {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            '1000': {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        }">
        <swiper-slide v-for="(card, index) in cards" :key="index">
            <base-card :blogTitle="card.title" :blogAuthorAvatar="card.author.avatar"
                :blogAuthorName="card.author.full_name" :blogCategory="card.category_name"
                :blogDuration="getDateFromReleased(card.created_at)" :blogCoverPath="card.cover_path">
            </base-card>
        </swiper-slide>
    </swiper>
</template>
<script setup>
import BaseCard from './BaseCard.vue';
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getDateFromReleased } from '../../utils/getDateReleased';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps({
    cards: Array,
})

</script>

<style lang="scss">
.swiper {
    width: 100%;

    .swiper-wrapper {
        width: 100% !important;
    }

    .swiper-button-next::after {
        content: url(../../assets/icons/arrow-left.svg);
    }

    .swiper-button-prev::after {
        content: url(../../assets/icons/arrow-right.svg);
    }

    .swiper-button-next {
        color: #0B032D !important;
        right: 55%;
        top: -38px;
        position: relative;
        z-index: 50;
    }

    .swiper-button-prev {
        color: #0B032D !important;
        left: -42%;
        right: auto;
        top: -16px;
        position: relative;
        z-index: 50;
    }

    @media (max-width: 768px) {
        .swiper-button-prev {
            left: -20%;
        }

        .swiper-button-next {
            right: 71%;
        }
    }

    .swiper-pagination {
        bottom: 0px;
    }

    .swiper-pagination-bullet {
        background-color: #9D9D9D;
        width: 10px;
        height: 10px;
    }

    .swiper-pagination-bullet-active {
        background-color: #0B032D;
    }
}
</style>
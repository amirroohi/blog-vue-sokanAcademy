<template>
    <section class="hero container d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
        <base-loading v-if="!data"></base-loading>
        <div v-else class="hero__content">
            <h2 class="hero__title">{{ title }}</h2>
            <div class="hero__metadatas">
                <div class="hero__metadata-category hero__metadata">
                    <img src="../assets/icons/category.svg" alt="category">
                    <span>{{ category.name }}</span>
                </div>
                <div class="hero__metadata-dateCreated hero__metadata">
                    <img src="../assets/icons/date.svg" alt="category">
                    <span>{{ getDateFromReleased(created_at) }}</span>
                </div>
                <div class="hero__metadata-duration hero__metadata">
                    <img src="../assets/icons/clock.svg" alt="category">
                    <span>{{ article.duration }} دقیقه</span>
                </div>
            </div>
            <div class="hero__avatar d-flex column-gap-2 align-items-center">
                <div class="profile-creater">
                    <img v-if="authorAvater" :src="authorAvater" alt="author" class="rounded" />
                    <img v-else src="../assets/images/avatar.png" alt="author" class="rounded" />
                </div>
                <p> {{ author.full_name }}
                </p>
                <img src="../assets/icons/verify.svg" alt="verify">
            </div>
        </div>
        <div class="hero__image">
            <img :src=cover :alt="title">
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { getDateFromReleased } from '../utils/getDateReleased';
import BaseLoading from "./UI/BaseLoading.vue";

// call api
const props = defineProps({
    data: Object,
});
const { author, cover, title, article, created_at, category } = props.data;
const authorAvater = ref(author.avatar);
</script>
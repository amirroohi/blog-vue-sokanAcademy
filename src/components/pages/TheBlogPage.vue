<template>
    <the-navbar></the-navbar>
    <base-loading v-if="!data"></base-loading>
    <the-breadcrumb :title="title" :categoryName="category.name"></the-breadcrumb>
    <the-hero :data="data"></the-hero>
    <the-main :article="article" :tags="tags"></the-main>
    <the-recommended></the-recommended>
    <the-author-info :author="author"></the-author-info>
    <the-comment></the-comment>
    <the-footer></the-footer>
</template>

<script setup>
import { getMainApi } from "../../service/api";
import TheAuthorInfo from "../theAuthorInfo.vue";
import TheBreadcrumb from "../TheBreadcrumb.vue";
import TheComment from "../TheComment.vue";
import TheFooter from "../TheFooter.vue";
import TheHero from "../TheHero.vue";
import TheMain from "../TheMain.vue";
import TheNavbar from "../TheNavbar.vue";
import TheRecommended from "../TheRecommended.vue";
import BaseLoading from "../UI/BaseLoading.vue";


const data = await getMainApi();
const { author, article, tags, title, category } = data;

</script>
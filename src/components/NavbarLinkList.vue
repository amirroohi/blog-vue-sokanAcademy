<template>
    <li class="nav-item" v-for="(navbarLink, index) in navbarLinklist" :key="index">
        <a class="nav-link" href="#">{{ navbarLink }}</a>
    </li>
</template>

<script setup>
import { ref } from 'vue';
const navbarLinklist = ref(["دوره‌های آموزشی", "وبلاگ", "مجموعه‌ها", "رادیوفول‌استک", "فن‌واژه"]);
</script>

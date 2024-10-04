<template>
    <section class="comment container d-flex flex-column justify-content-center align-items-center row-gap-5">
        <h2 class="comment__header">دیدگاه شما</h2>
        <form class="comment__form d-flex flex-column">
            <label for="comment"><span></span>دیدگاه یا پرسش جدید</label>
            <textarea name="comment" id="comment" v-model="text"
                placeholder="دیدگاه یا پرسش خود را درباره این محتوا بنویسید..."></textarea>
            <div class="d-flex flex-row-reverse">
                <base-button :disabled="text === ''" type="submit" @click="(e) => { e.preventDefault() }">
                    <template v-slot:default>
                        <span>ارسال دیدگاه</span>
                    </template>
                </base-button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from './UI/BaseButton.vue';
const text = ref('');
</script>
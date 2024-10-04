<template>
    <footer class="container-lg footer-container mw-100">
        <div class="footer row justify-content-between py-5">
            <div class="footer__logo col-12 col-lg-6 g-0">
                <img src="../assets/icons/Logo.svg" alt="logo">
                <p>
                    ما در سکان‌آکادمی معتقدیم همه‌ی انسان‌ها حق دارند، به آموزش باکیفیت
                    و کم‌هزینه دسترسی آسان داشته باشند و همه‌ی افراد می‌توانند با آموزش
                    درست، زندگی فردی و اجتماعی خود را بهتر کنند. با توجه به تخصص تیم ما
                    در حوزه‌ی IT و نیاز روزافزون بازار کار به متخصصان این حوزه، تولید و
                    عرضه‌ی محتوای مهارت‌محور و تخصصی را در حوزه‌ی IT جدی‌تر دنبال کردیم.
                    در این راه از ابتدای انتخاب مسیر متناسب با توانایی و امکانات دانشجو
                    تا یادگیری، تمرین، کسب مهارت تخصصی و عمومی، و در نهایت معرفی به
                    بازار کار همراه او هستیم...
                </p>
            </div>
            <div class="col-12 col-lg-6">
                <div class="footer__links row justify-content-lg-center row-cols-2">
                    <div class="service-link col-6 gap-4 p-0">
                        <h3>خدمات سکان آکادمی</h3>
                        <p v-for="(footerService, index) in footerServicelist" :key="index">
                            <a href="">
                                {{ footerService }}
                            </a>
                        </p>
                    </div>
                    <div class="access-link col-6 gap-4 p-0">
                        <h3>دسترسی سریع</h3>
                        <p v-for="(footerQuickAccess, index) in footerQuickAccesslist" :key="index">
                            <a href="">
                                {{ footerQuickAccess }}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer__copyright text-center mt-4">
                کلیه حقوق مادی و معنوی این وب‌سایت متعلق به سکان آکادمی می‌باشد.
            </div>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue';
const footerServicelist = ref(["دوره‌های آموزشی", "وبلاگ", "سکان پلاس", "رادیوفول‌استک", "فن‌واژه"]);
const footerQuickAccesslist = ref(["درباره ما", "تماس با ما", "همکاری با ما", "شرایط و قوانین"]);
</script>
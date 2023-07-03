<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <img
                className="object-fill w-full h-96"
                src="https://img.freepik.com/fotos-gratis/conceito-de-viagens-com-pontos-de-referencia_23-2149153256.jpg?w=1380&t=st=1688352599~exp=1688353199~hmac=d5847246dafec0caa0e7a4f2b0845a9a9a973da2524b0fb451a4fcb4a978a9b0"
                alt="image slide 1"
            />
        </swiper-slide>
        <swiper-slide>
            <img
                className="object-fill w-full h-96"
                src="https://img.freepik.com/fotos-gratis/conceito-de-viagem-completo-com-pontos-de-referencia_23-2149153258.jpg?3&w=1380&t=st=1688352604~exp=1688353204~hmac=8c5b8f00571b9a742ff97a3bdce84ebb9917dd35f3b8028b2853a7a06fe51b36"
                alt="image slide 2"
            />
        </swiper-slide>
        <swiper-slide>
            <img
                className="object-fill w-full h-96"
                src="https://img.freepik.com/fotos-premium/viajar-o-conceito-de-monumentos-do-mundo_117023-14.jpg"
                alt="image slide 3"
            />
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
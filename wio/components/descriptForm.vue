<template>
    <div class="inner_shell" style="margin: 2em auto 1em auto;">
        <div class="scdream_greyDark_11" style="margin:0.5em auto 1em auto"><span class="gradient_text">{{ pers }}</span>는 이런 사람이에요</div>
        <nuxt-link :to="`/personality/test/persbingo/` + pers" class="default_button outer_shell"
            style=" background: var(--greyLight-1); width:100%; margin:0 auto 0.7em auto">
            <span style="margin: auto 2%; color:var(--greyDark)">{{ pers }} 빙고보기</span>
            <img :src="storage_url + `/icon/black_link.png`" style="height: 1em;margin:auto 0" />
        </nuxt-link>
        <nuxt-link :to="`/personality/types/` + pers" class="default_button outer_shell"
            style=" background: var(--greyLight-1); width:100%;">
            <span style="margin: auto 2%; color:var(--greyDark)">{{ pers }} 상세설명</span>
            <img :src="storage_url + `/icon/black_link.png`" style="height: 1em;margin:auto 0" />
        </nuxt-link>
    </div>
</template>

<script>
import ShareLink from '~/components/ShareLink.vue';
import perslove from "~/assets/js/perslove";
export default {
    name: "ShareForm",
    components: {
        ShareLink: ShareLink,
        perslove: perslove,

    },
    data() {
        return {
            perslove_pers: "",
            pershate_pers: "",
        };
    },
    props: {
        pers: {
            type: String,
            required: true
        },
    },
    computed: {
        storage_url: {
            get() {
                return `${process.env.VUE_APP_STORAGE_URL}/images`
            }
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

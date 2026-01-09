<template>
    <div class="normal_shell" style="width:86%">
        <div class="row_group" style="justify-content: space-between; margin: 0 auto">
            <div class="row_group scdream_greyDark1_10" style="margin:1% auto 0 auto; justify-content: center;">
                <nuxt-link :to="`/personality/test/perslove/result?myPers=` +
                pers +
                `&yourPers=` +
                perslove_pers" style="display:flex; flex-direction: row; justify-content: center;">
                    <div style="margin-right:0.2em; color:var(--persLink); font-size:1.0em;white-space:nowrap;">
                        <span style="color:var(--blueLight-1)">잘 맞음: </span> {{ perslove_pers }}
                    </div>
                    <img :src="storage_url + `/icon/blue_link.png`" style="height: 1.0em;margin:auto 0" />
                </nuxt-link>
            </div>
            <div class="row_group scdream_greyDark1_10" style="margin:1% auto 0 auto; justify-content: center;">
                <nuxt-link :to="`/personality/test/perslove/result?myPers=` +
                pers +
                `&yourPers=` +
                pershate_pers" style="display:flex; flex-direction: row; justify-content: center;">
                    <div style="margin-right:0.2em; color:var(--persLink); font-size:1.0em;white-space:nowrap;">
                        <span style="color:var(--redLight-1)">안 맞음: </span> {{ pershate_pers }}
                    </div>
                    <img :src="storage_url + `/icon/blue_link.png`" style="height: 1.0em;margin:auto 0" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import ShareLink from '~/components/ShareLink.vue';
import Header from "~/assets/js/header";
import perslove from "~/assets/js/perslove";
export default {
    name: "ShareForm",
    components: {
        ShareLink: ShareLink,
        Header: Header,
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
        this.perslove_pers = perslove.perslove_search100(this.pers);
        this.pershate_pers = perslove.pershate_search100(this.pers);
    }
}
</script>

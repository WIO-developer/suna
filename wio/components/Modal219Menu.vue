<template>
    <div id="home">
        <div style="background:black" id="popup_menu">
            <div class="hr_shell row_group" style="margin:1em auto">
                <div> </div>
                <div>
                    <img @click="onScroll" :src="storage_url + `/icon/white_x.png`" style="width:1.5em; margin-right: 0.5em;" />
                </div>
            </div>
            <img style="height:2.5em; margin-left:1em" :src="storage_url + `/collection/219/219_0_white.png`">
            <hr width="90%" style="border: solid 1px white;margin: 0 1em 1em 1em;" />
            <div style="margin-left:1em">
                <a style="margin-left:0.5em; font-weight: 700; color:white; font-size: 1.2em;"
                    href="https://smartstore.naver.com/twoonenine/">STORE</a>
            </div>
            <div style="margin: 0.3em 0 0 1em">
                <a style="margin-left:0.5em; font-weight: 700; color:white; font-size: 1.2em;"
                    href="https://www.instagram.com/219_twoonenine/">INSTAGRAM</a>
            </div>

            <Side219Footer />
        </div>
        <div id="overlay_modal" @click="onScroll">
        </div>
    </div>
</template>

<script>
import Header from "~/assets/js/header";
export default {
    name: "ModalMenu",
    components: {
        Header: Header
    },
    data() {
        return {
        };
    },
    computed: {
        storage_url: {
            get() {
                return `${process.env.VUE_APP_STORAGE_URL}/images`
            }
        }
    },
    methods: {
        onScroll() {
            Header.onScroll()
        },
    },
    mounted() {
    }
}
</script>
<template>
    <div id="home">
        <div style="background:white;font-family:'hotel'; font-weight: 100;" id="popup_menu">
            <div class="hr_shell row_group" style="margin:1em auto">
                <div> </div>
                <div>
                    <img @click="onScroll" :src="storage_url + `/icon/x.png`" style="width:1.5em; margin-right: 0.5em;" />
                </div>
            </div>
            <img style="height:2.5em; margin-left:1em" :src="storage_url + `/village/village_home_logo_4.png`">
            <hr width="90%" style="border: solid 1px rgb(100, 100, 100);margin: 0 1em 1em 1em;" />
            
            <div style="margin: 0.3em 0 0 1em">
                <a style="margin-left:0.5em; font-weight: 700; color:rgb(100, 100, 100); font-size: 1.0em; "
                    href="https://www.instagram.com/wio.village/">INSTAGRAM</a>
            </div>
            <div style="margin-left:1em">
                <a style="margin-left:0.5em; font-weight: 700; color:rgb(100, 100, 100); font-size: 1.0em;"
                    href="https://www.youtube.com/@user-rs6ye7yr6j">YOUTUBE</a>
            </div>
            <div style="margin-left:1em">
                <a style="margin-left:0.5em; font-weight: 700; color:rgb(100, 100, 100); font-size: 1.0em;"
                    href="https://twitter.com/wio_village">TWITER</a>
            </div>
            <div style="margin-left:1em">
                <a style="margin-left:0.5em; font-weight: 700; color:rgb(100, 100, 100); font-size: 1.0em;"
                    href="https://www.tiktok.com/@wio.village">TIKTOC</a>
            </div>
            <div style="margin-left:1em">
                <a style="margin-left:0.5em; font-weight: 700; color:rgb(100, 100, 100); font-size: 1.0em;"
                    href="https://www.facebook.com/Wio.Village/">FACEBOOK</a>
            </div>
            <SideVillageFooter />
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
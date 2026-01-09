<template>
    <div class="service_width">
        <PersHeader/>
        
        <nuxt />
    </div>
</template>
<script>
import metaConfig from '~/config/metaConfig'
import PersHeader from "@/components/PersHeader"

export default {
    name: "PE-ENFJ",
    head() {
        return metaConfig
            .filter((menu) => {
                return menu.fileNm === "noindex";
            })
            .pop();
    },
    components: {
        PersHeader: PersHeader
    },
    computed: {
        storage_url: {
            get() {
                return `${process.env.VUE_APP_STORAGE_URL}/images`
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

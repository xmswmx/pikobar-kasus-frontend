<template>
    <div>
        <cases-list-summary />
        <cases-list />
    </div>
</template>

<script>
import CasesList from '~/components/Case/CasesList.vue'
import CasesListSummary from '~/components/Case/CasesListSummary.vue'

export default {
    layout: 'backoffice',
    middleware: 'auth',
    components: { CasesList, CasesListSummary },
    computed: {
    },
    data() {
        return {
            step: 1
        }
    },
    head () {
        return { title: this.$t('home') }
    },
    methods: {
    },
}
</script>

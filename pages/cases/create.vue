<template>
    <b-card header-tag="header" footer-tag="footer">
        <template v-slot:header>
            <b-row>
                <b-col md="2">
                    <b-icon
                    :variant="'success'"
                    font-scale="1.3"
                    icon="person-check-fill">
                    </b-icon>
                    <span>Detail Profil Kasus</span>
                </b-col>
                <b-col md="8">
                    <hr>
                </b-col>
                <b-col md="2">
                    <b-icon
                    :variant="isStepTwo ? 'success' : ''"
                    font-scale="1.3"
                    icon="check-circle">
                    </b-icon>
                    <span>Riwayat Kasus</span>
                </b-col>
            </b-row>
        </template>
        <b-card-text>
            <case-form v-if="isStepOne" @action="action" />
            <history-form v-if="isStepTwo" @action="action" />
        </b-card-text>
        </b-card>
    </b-card-group>
</template>

<script>
import CaseForm from '~/components/Case/CaseForm.vue'
import HistoryForm from '~/components/History/HistoryForm.vue'

export default {
    layout: 'backoffice',
    middleware: 'auth',
    components: { CaseForm, HistoryForm },
    computed: {
        isStepOne () {
            return this.step === 1 
        },
        isStepTwo () {
            return this.step === 2
        }
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
        action(type, toStep, item) {
            this.step = toStep
        },
        submit() {
            console.log('good')
        }
    },
}
</script>

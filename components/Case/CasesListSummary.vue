<template>
    <b-row>
    <b-col md="12" xs="12">
        <b-card
            border-variant="green"
            bg-variant="green"
            text-variant="white"
        >
        <b-card-text>
            <p class="h6">Total Data Kasus: 2135</p>
            <p class="h5">Dinkes Kota Bandung</p>
        </b-card-text>
        </b-card>
    </b-col>

    <b-col md="3" xs="12">
        <b-card
            border-variant="secondary "
            bg-variant="secondary "
            text-variant="white"
            title="Orang Tanpa Gejala"
        >
        <b-card-text>
            <p class="h6">19 Orang</p>
        </b-card-text>
        </b-card>
    </b-col>

    <b-col md="3" xs="12">
        <b-card
            border-variant="info"
            bg-variant="info"
            text-variant="white"
            title="Orang Dalam Pemantauan"
        >
        <b-card-text>
            <p class="h6">80 Orang</p>
        </b-card-text>
        </b-card>
    </b-col>

    <b-col md="3" xs="12">
        <b-card
            border-variant="warning"
            bg-variant="warning"
            text-variant="white"
            title="Pasien Dalam Pengawasan"
        >
        <b-card-text>
            <p class="h6">2023 Orang</p>
        </b-card-text>
        </b-card>
    </b-col>


    <b-col md="3" xs="12">
        <b-card
            border-variant="danger"
            bg-variant="danger"
            text-variant="white"
            title="Positif"
        >
        <b-card-text>
            <p class="h6">13 Orang</p>
        </b-card-text>
        </b-card>
    </b-col>

    </b-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        state: {
            processing: false
        }
      }
    },
    methods: {
    },
    mounted () {
    },
  }
</script>

<style scoped>
    h4, .h4 {
        font-size: 1.0rem;
    }
</style>
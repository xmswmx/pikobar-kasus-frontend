<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <!-- Left Form -->
        <b-col md="6" s="12" xs="12">
          <b-form-group id="group-status" label="Kriteria:"
            label-for="status">
            <b-form-radio-group
              id="group-status"
              v-model="form.status"
              :options="statuses"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group id="group-stage" label="Tahapan:"
            label-for="stage">
            <b-form-radio-group
              id="group-stage"
              v-model="form.stage"
              :options="stages"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group id="group-result" label="Tahapan:"
            label-for="final_result">
            <b-form-radio-group
              id="group-result"
              v-model="form.final_result"
              :options="results"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group id="group-location-type" label="Lokasi saat int:"
            label-for="current_location_type">
            <b-form-radio-group
              id="group-location-type"
              v-model="form.current_location_type"
              :options="locationTypes"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group id="group-report-source" label="Sumber Laporan:"
            label-for="report_source">
            <b-form-input
              id="group-report-source"
              v-model="form.report_source"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-other-notes" label="Catatan tambahan:"
            label-for="other_notes">
            <b-form-textarea
              id="other_notes"
              v-model="form.other_notes"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <!-- Right Form -->
        <b-col md="6" s="12" xs="12">
          <b-form-group id="group-history" label="Riwayat:"
            label-for="history_tracing">
            <b-form-checkbox-group
              v-model="form.history_tracing"
              :options="histories"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>

          <b-form-group id="group-other-history"
            label-for="other_history">
            <b-form-input
              id="other_history"
              v-model="form.other_history"
              placeholder="Masukkan Riwayat lainnya (jika ada)"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-symptom" label="Tanggal Gejala:"
            label-for="first_symptom_date">
            <b-form-input
              id="first_symptom_date"
              v-model="form.birth_date"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-diagnosis" label="Gejala:"
            label-for="diagnosis">
            <b-form-checkbox-group
              v-model="form.diagnosis"
              :options="diagnosis"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>

          <b-form-group id="group-other-diagnosis"
            label-for="diagnosis_other">
            <b-form-input
              id="diagnosis_other"
              v-model="form.diagnosis_other"
              placeholder="Sebutkan gejala lainnya (jika ada)"
            ></b-form-input>
          </b-form-group>

        </b-col>
      </b-row>
    </b-form>
    

    <b-col md="12">
      <b-form-group> 
        <b-button
          @click="submit(3)"
          class="float-right"
          type="submit"
          variant="success">
            Lanjut
        </b-button>
        <b-button
          @click="submit(1)"
          class="float-right"
          type="submit">
            Kembali
        </b-button>
      </b-form-group>
    </b-col>
  </div>
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
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        statuses: [
          { text: 'OTG', value: 'OTG' },
          { text: 'ODP', value: 'ODP' },
          { text: 'PDP', value: 'PDP' },
          { text: 'POSITIF', value: 'POSITIF' }
        ],
        stages: [
          { text: 'Proses', value: '0' },
          { text: 'Selesai', value: '1' }
        ],
        results: [
          { text: 'Negatif', value: '0' },
          { text: 'Sembuh', value: '1' },
          { text: 'Meninggal', value: '2' }
        ],
        locationTypes: [
          { text: 'Rumah', value: 'RUMAH' },
          { text: 'Rumah Sakit', value: 'RS' }
        ],
        histories: [
          { text: 'Dari Luar Negeri', value: 'abroad' },
          { text: 'Perjalann ke luar kota', value: 'city' },
          { text: 'Kontan dengan pasien positif', value: 'physical_contact' }
        ],
        diagnosis: [
          { text: 'Suhu tubuh >= 38 °C', value: 'Suhu tubuh >= 38 °C' },
          { text: 'Suhu tubuh < 38 °C', value: 'Suhu tubuh < 38 °C' },
          { text: 'Batuk', value: 'Batuk' },
          { text: 'Pilek', value: 'Pilek' },
          { text: 'Sakit Tenggorokan', value: 'Sakit Tenggorokan' },
          { text: 'Sakit Kepala', value: 'Sakit Kepala' },
          { text: 'Sesak Napas', value: 'Sesak Napas' },
          { text: 'Menggigil', value: 'Menggigil' },
          { text: 'Lemah (malaise)', value: 'Lemah (malaise)' },
          { text: 'Nyeri Otot', value: 'Nyeri Otot' },
          { text: 'Mual atau muntah', value: 'Mual atau muntah' },
          { text: 'Nyeri Abdomen', value: 'Nyeri Abdomen' },
          { text: 'Diare', value: 'Diare' },
        ],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$emit('action', 'case', this.form)
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      submit (toStep) {
        this.$emit('action', 'history', toStep, this.form)
      }
    }
  }
</script>
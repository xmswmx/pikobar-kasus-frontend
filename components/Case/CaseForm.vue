<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <!-- Left Form -->
        <b-col md="6" s="12" xs="12">
          <b-form-group id="group-nik" label="NIK:" label-for="nik">
            <b-form-input
              id="nik"
              v-model="form.nik"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-case-related" label="Nama Pasien Terkait:"
            label-for="case_related">
            <b-form-input
              id="case_related"
              v-model="form.id_case_related"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-case-national" label="ID Kasus Pusat:"
            label-for="case_national">
            <b-form-input
              id="case_national"
              v-model="form.id_case_national"
              type="text"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="group-ocupation" label="Pekerjaan:"
            label-for="ocupation">
            <b-form-select
              id="ocupation"
              v-model="form.ocupation"
              :options="foods"
            ></b-form-select>
          </b-form-group>

          <b-form-group id="group-office" label="Alamat Kantor:"
            label-for="office_address">
            <b-form-textarea
              id="office_address"
              v-model="form.office_address"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="group-nationality" label="Kewarganegaraan:"
            label-for="nationality">
            <b-form-radio-group
              id="group-nationality"
              v-model="form.nationality"
              :options="nationalities"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
        <!-- Right Form -->
        <b-col md="6" s="12" xs="12">
          <b-form-group id="group-name" label="Nama Kasus:"
            label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-birth" label="Tanggal Lahir:"
            label-for="birth_date">
            <b-form-input
              id="birth_date"
              v-model="form.birth_date"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-age" label="Usia:"
            label-for="age">
            <b-form-input
              id="age"
              v-model="form.age"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="group-gender" label="Jenis Kelamin:"
            label-for="gender">
            <b-form-select
              id="gender"
              v-model="form.gender"
              :options="foods"
            ></b-form-select>
          </b-form-group>

          <b-form-group id="group-domicile" label="Alamat Tempat tinggal:"
            label-for="address_street">
            <b-form-textarea
              id="address_street"
              v-model="form.address_street"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="group-phone" label="Nomor Telepon :"
            label-for="phone_number">
            <b-form-input
              id="phone_number"
              v-model="form.phone_number"
              type="text"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>

    <b-col md="12">
        <b-button
          @click="submit"
          class="float-right"
          type="submit"
          variant="success">
            Lanjut
        </b-button>
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
        nationalities: [
          { text: 'WNI', value: 'WNI' },
          { text: 'WNA', value: 'WNA' }
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
      submit () {
        this.$emit('action', 'case', 2, this.form)
      }
    }
  }
</script>
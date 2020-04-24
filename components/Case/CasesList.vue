<template>
    <b-row>
      <b-col md="12" xs="12">
          <b-card>
            <b-card-text>
              
            <b-row>
              <b-col md="12" xs="12">
                <b-form-group>
                  <b-form-input
                    v-model="search"
                    placeholder="Search"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="3" xs="12">
                <b-form-group label="Hasil">
                  <b-form-select
                    v-model="form.result"
                    :options="results"
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col md="3" xs="12">
                <b-form-group label="Kabupaten/Kota">
                  <b-form-input
                    id="nik"
                    v-model="form.nik"
                    type="text"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="3" xs="12">
                <b-form-group label="Kecamatan">
                  <b-form-input
                    id="nik"
                    v-model="form.nik"
                    type="text"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="3" xs="12">
                <b-form-group label="Kelurahan">
                  <b-form-input
                    id="nik"
                    v-model="form.nik"
                    type="text"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- rows 3 -->
            <b-row>
              <b-col md="3" xs="12">
                <b-form-group label="Kriteria">
                  <b-form-select
                    v-model="form.result"
                    :options="results"
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col md="3" xs="12">
                <b-form-group label="Tanggal Penginputan">
                  <b-form-input
                    id="nik"
                    v-model="form.nik"
                    type="text"
                    placeholder="Tanggal Awal"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="3" xs="12">
                <b-form-group label="_">
                  <b-form-input
                    id="nik"
                    v-model="form.nik"
                    type="text"
                    placeholder="Tanggal Akhir"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="1" xs="12">
                <b-form-group label="_">
                  <b-button
                    class="float-right"
                    type="submit"
                    variant="success">
                      Reset
                  </b-button>
                </b-form-group>
              </b-col>

              <b-col md="1" xs="12">
                <b-form-group label="_">
                  <b-button
                    @click="get"
                    class="float-right"
                    type="submit"
                    variant="success">
                      Search
                  </b-button>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- tables -->
            <b-row>
              <b-col md="12" xs="12">
                <b-icon
                    :variant="'success'"
                    font-scale="1.3"
                    icon="person-check-fill">
                    </b-icon>
                <span>Data Kasus</span>
              </b-col>
              <b-col md="12" xs="12">
                <b-table hover
                  show-empty
                  :busy="state.processing"
                  :items="items"
                  :current-page="currentPage"
                  :per-page="0"
                  :fields="fields">

                  <template v-slot:table-busy>
                    <div class="text-center text-danger my-2">
                      <b-spinner class="align-middle"></b-spinner>
                      <strong>Loading...</strong>
                    </div>
                  </template>

                  <template v-slot:cell(num)="row">
                    {{row.item._num}}
                  </template>

                  <template v-slot:cell(name)="row">
                    {{row.item.name}}
                  </template>
                  
                  <template v-slot:cell(age)="row">
                    {{ row.item.age}}
                  </template>

                  <template v-slot:cell(gender)="row">
                    {{ row.item.gender}}
                  </template>
                  
                  <template v-slot:cell(status)="row">
                    <b-badge href="#" variant="primary">Primary</b-badge>
                  </template>

                  <template v-slot:cell(stage)="row">
                    {{ row.item.stage || '-'}}
                  </template>

                  <template v-slot:cell(result)="row">
                    {{ row.item.result || '- '}}
                  </template>

                  <template v-slot:cell(author)="row">
                    {{ row.item.author || '-'}}
                  </template>

                  <template v-slot:cell(actions)="row">
                    <b-dropdown class="mx-1 white-text" right text="Pilih Aksi">
                      <b-dropdown-item>Lihat Detail</b-dropdown-item>
                      <b-dropdown-item>Update Profil</b-dropdown-item>
                      <b-dropdown-item>Update Riwayat</b-dropdown-item>
                      <b-dropdown-item>Hapus Kasus</b-dropdown-item>
                    </b-dropdown>
                  </template>
                </b-table>
              </b-col>

              <b-col sm="12" md="4" class="my-1">
                <b-form-group
                  label="Per page"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="perPageSelect"
                  class="mb-0"
                >
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="12" md="8" class="my-1">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalItems"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </b-row>

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
        fields: [
          { key: 'num', label: '#'},
          { key: 'name', label: 'NAMA'},
          { key: 'age', label: 'USIA'},
          { key: 'gender', label: 'JENIS KELAMIN'},
          { key: 'status', label: 'STATUS'},
          { key: 'stage', label: 'TAHAPAN'},
          { key: 'result', label: 'HASIL'},
          { key: 'author', label: 'AUTHOR'},
          { key: 'actions', label: 'AKSI'}],
        items: [],
        results: [
          { text: 'Negatif', value: '0' },
          { text: 'Sembuh', value: '1' },
          { text: 'Meninggal', value: '2' }
        ],
        state: {
            processing: false
        },
        search: null,
        totalItems: 0,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
      }
    },
    methods: {
        get () {
            this.state.processing = true
            return this.$api.getCases({
                pagination: {
                  page: this.currentPage + 1,
                  size: this.perPage
                },
                search: this.search
            }).then((response) => {
              console.log(response)
                this.totalItems = parseInt(response.meta.total);
                // this.totalPages = response.totalPages;
                this.items = response.data
            }).catch((e) => {
              console.log(e)
            }).finally(() => {
                this.state.processing = false
            })
        }
    },
    mounted () {
      this.get()
    },
    watch: {
        items (newValue, oldValue) {
            var base = (this.currentPage - 1) * this.perPage;
            for (var i in this.items) {
                this.items[i]._num = base + parseInt(i) + 1;
            }
        },
        currentPage (newValue) {
          this.get()
        },
        perPage (newValue) {
          this.get()
        }
    },
  }
</script>

<style scoped>
.table {
    color: #2e2e2e;
    font-size: 0.88rem;
    font-weight: 100 !important;
}
.table thead th {
    /* font-weight: 100; */
}
</style>
<template>
  <div>
    <main-dialog @sendObjects="send"></main-dialog>
    <v-data-table
        :headers="headers"
        :items="objects"
        item-key="id"
        sort-by="id"
        group-by="object.name"
        class="elevation-1"
        show-group-by
    ></v-data-table>
  </div>
</template>

<script>
import MainDialog from '@/components/Dialog'

export default {
  name: "MainComponent",
  components: {
    MainDialog
  },
  data () {
    return {
      headers: [
        {
          text: 'Date start',
          align: 'start',
          value: 'dateStart',
          groupable: false,
        },
        {
          text: 'Date end',
          align: 'start',
          value: 'dateEnd',
          groupable: false,
        },
        { text: 'Object', value: 'object.name', align: 'right' },
      ]
    }
  },
  computed: {
    objects() {
      return this.$store.getters.objects
    }
  },
  mounted() {
    this.updateObjects()
  },
  methods: {
    send(data) {
      this.sendData(data,'create','Post', (data) => {
        this.updateObjects()
        console.log(data)
      })
    },
    updateObjects() {
      this.getData('windows', 'GET', (data) => { this.$store.dispatch('setObjects', data) })
    }
  }
}
</script>

<style scoped>

</style>

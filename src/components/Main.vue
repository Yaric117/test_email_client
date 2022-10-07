<template>
  <div>
    <main-dialog></main-dialog>
    <v-data-table
        :headers="headers"
        :items="desserts"
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
      ],
      desserts: [],
    }
  },
  mounted() {
    //this.sendData({'countObjects': '3', 'countWindows': '2'},'create','Post', (data)=>console.log(data))
    this.getData('windows', 'GET', (data) => {this.desserts = data})

  }
}
</script>

<style scoped>

</style>

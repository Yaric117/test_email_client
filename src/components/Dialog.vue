<template>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
              dark
              color="primary"
          >
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                  dark
                  text
                  @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list
              three-line
              subheader
          >
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Objects count</v-list-item-title>
                <v-text-field :rules="rules" type="number"></v-text-field>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Object`s windows count</v-list-item-title>
                <v-text-field :rules="rules" type="number"></v-text-field>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<script>
export default {
  name: "MainDialog",
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      rules: [
        value => !value || 'Required.',
        value => value > 0 || 'Min 1',
      ],
    }
  },
}
</script>

<style scoped>

</style>

<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            filled
            v-model="firstname"
            :rules="nameRules"
            :counter="30"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            filled
            v-model="lastname"
            :rules="nameRules"
            :counter="30"
            label="Apellido"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            filled
            v-model="email"
            :rules="emailRules"
            label="Correo Electrónico"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<template>

  <Cadastro>
    <template v-slot:action>
      <button @click="Validar()">Validar</button>
    </template>
  </Cadastro>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Cadastro, { usuarioComponentSchema } from '../views/Cadastro.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export default defineComponent({
  name: 'Home',
  components: {
    Cadastro
  },
  setup(){
    
    const form = useForm({
      validationSchema: usuarioComponentSchema
    });

    async function Validar(){
      const resp = await form.validate();

      if(resp.valid){
        alert("Usuário criado com sucesso !!!")
      }
    }

    return{
      Validar
    }
  }
});
</script>

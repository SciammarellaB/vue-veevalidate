<template>

  <Cadastro>
    <template v-slot:action>
      <div>
        <button @click="Reset()" class="button" style="margin-right: 20px;">Resetar</button>
        <button @click="Validar()" class="button">Validar</button>
      </div>      
    </template>
  </Cadastro>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Cadastro, { usuarioComponentSchema } from '../views/Cadastro.vue'
import { useForm } from 'vee-validate'

export default defineComponent({
  name: 'Home',
  components: {
    Cadastro
  },
  setup(){
    
    const form = useForm({
      validationSchema: usuarioComponentSchema
    });

    function Reset(){
      form.resetForm();
    }

    async function Validar(){
      const resp = await form.validate();

      if(resp.valid){
        alert("Usuário criado com sucesso !!!")
      }
    }

    return{
      Validar,
      Reset
    }
  }
});
</script>

<style>
  .button{
    width: 100px;
    height: 35px;
    border-radius: 10px;
  }
</style>
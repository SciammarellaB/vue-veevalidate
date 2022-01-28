<template>

  <div class="page">

    TESTE
    <!-- <div class="head">
      <img class="logo" src="../assets/logo.png">
      <span style="font-size: 26px"> Teste de Vee-Validation com VueJs 3 / VueJs 3 Vee-Validation Test</span>
    </div>

    <div class="content">
      <Cadastro/>
      <CadastroInterface/>
    </div>

    <div class="bottom">
      <button @click="Reset()" class="button" style="margin-right: 20px;">Resetar</button>
      <button @click="Validar()" class="button">Validar</button>
    </div>       -->

  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import Cadastro, { usuarioComponentSchema } from '../views/Cadastro.vue'
// import CadastroInterface, { usuarioInterfaceComponentSchema } from '../views/CadastroInterface.vue'
import { useForm } from 'vee-validate'
import { Usuario } from '../core/model/Usuario'

export default defineComponent({
  name: 'Home',
  components: {
    // Cadastro,
    // CadastroInterface
  },
  setup(){
    
    const form = useForm({
      // validationSchema: usuarioComponentSchema
    });

    function Reset(){
      form.resetForm();
    }

    async function Validar(){
      const resp = await form.validate();

      if(resp.valid){

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
  .page{
    margin: 10px 10px 10px 10px;
  }
  .button{
    width: 100px;
    height: 35px;
    border-radius: 10px;
  }
  .logo{
    width: 100px;
    height: 100px;
  }
  .head{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .content{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 20px;
  }
  .bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
</style>
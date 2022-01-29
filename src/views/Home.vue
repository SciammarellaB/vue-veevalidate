<template>

  <div class="page">

    <div class="head">
      <img class="logo" src="../assets/logo.png">
      <span style="font-size: 26px"> Teste de Vee-Validation com VueJs 3 / VueJs 3 Vee-Validation Test</span>
    </div>

    <div class="content">
      <Cadastro/>
    </div>

    <div class="bottom">
      <button @click="Reset()" class="button" style="margin-right: 20px;">Resetar / Reset</button>
      <button @click="Validar()" class="button">Validar / Validate</button>
    </div>    

    <div class="footer">
      <h1>Resultado Formulário / Form Result</h1>
      <span>Valor / Value: </span><span>{{resultado}}</span>
    </div>  

  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Cadastro, { usuarioComponentSchema } from '../views/Cadastro.vue'
import { useForm } from 'vee-validate'

export default defineComponent({
  name: 'Home',
  components: {
    Cadastro,
  },
  setup(){
    
    const form = useForm({
      validationSchema: usuarioComponentSchema
    });

    const resultado = ref<any>();

    function Reset(){
      form.resetForm();
    }

    async function Validar(){
      const resp = await form.validate();

      if(resp.valid){
        resultado.value = form.values.usuario
      }
    }

    return{
      resultado,
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
    width: 150px;
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
  .footer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
  }
</style>
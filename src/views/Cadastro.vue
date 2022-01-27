<template>
  <div class="page">

    <div class="head">
      <img class="logo" src="../assets/logo.png">
      <span style="font-size: 26px"> Teste de Vee-Validation com VueJs 3 </span>
    </div>

    <div class="body">

        <div style="display: flex; flex-direction: column" class="inputContentor">
            <span class="label" style="margin-left: 15px">Nome</span>
            <input id="nome" class="input" placeholder="Nome" v-model="nome">
            <span class="requiredField">{{errors['usuario.nome']}}</span>
        </div>

        <div style="display: flex; flex-direction: column" class="inputContentor">
            <span class="label" style="margin-left: 15px">E-mail</span>
            <input id="email" class="input" placeholder="E-mail" v-model="email">
            <span class="requiredField">{{errors['usuario.email']}}</span>
        </div>

        <div style="display: flex; flex-direction: column" class="inputContentor">
            <span class="label" style="margin-left: 15px">Telefone</span>
            <input id="telefone" class="input" placeholder="Telefone" v-model="telefone">
            <span class="requiredField">{{errors['usuario.telefone']}}</span>
        </div>

        <div style="display: flex; flex-direction: column" class="inputContentor">
            <span class="label" style="margin-left: 15px">Senha</span>
            <input id="senha" class="input" type="password" placeholder="Senha" v-model="senha">
            <span class="requiredField">{{errors['usuario.senha']}}</span>
        </div>

        <div class="action">
            <slot name="action"/>
        </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useField, useFormErrors } from 'vee-validate'
import * as yup from 'yup'

    export const usuarioComponentSchema = yup.object({
        usuario: yup.object({
            nome: yup.string().required("Nome é obrigatório"),
            email: yup.string().required("E-mail é obrigatório").email("E-mail não é válido!"),
            telefone: yup.string().required("Telefone é obrigatório"),
            senha: yup.string().required("Senha é obrigatório").min(8, "Senha deve ter no mínimo 8 caractéres."),
        })  
    })

    export default defineComponent({
        setup(){

            const { value: nome } = useField("usuario.nome");
            const { value: email } = useField("usuario.email");
            const { value: telefone } = useField("usuario.telefone");
            const { value: senha } = useField("usuario.senha");

            return{
                nome,
                email,
                telefone,
                senha,
                errors : useFormErrors() as any,                
            }
        }
    })
</script>



<style scoped>
  .logo{
    width: 100px;
    height: 100px;
  }
  .page{
    margin: 10px 10px 10px 10px;
  }
  .head{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .body{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
  .inputContentor{
    margin: 10px 0px 10px 0px;
  }
  .input{
    width: 350px;
    height: 30px;
    border-radius: 5px;
    margin: 2px 2px 2px 2px;
  }
  .requiredField{
    color: red;
    font-size: 14px;
    margin-left: 15px;
  }
  .action{
      margin-top: 20px;
  }
</style>
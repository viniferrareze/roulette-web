import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import rouletteImg from '../../assets/Roulette.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
   const formRef = useRef<FormHandles>(null);
   const handleSubmit = useCallback(async (data: object) => {
      try {
         formRef.current?.setErrors({});

         const schema = Yup.object().shape({
            email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
            password: Yup.string().min(6, 'No mínimo 6 caracteres'),
         });

         await schema.validate(data, { abortEarly: false });
      } catch (err) {
         const errors = getValidationErrors(err);

         formRef.current?.setErrors(errors);
      }
   }, []);

   return (
      <Container>
         <Content>
            <img src={rouletteImg} alt="Roulette" />
            <Form ref={formRef} onSubmit={handleSubmit}>
               <h1>Faça seu login</h1>

               <Input name="email" icon={FiMail} placeholder="E-mail" />
               <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

               <Button type="submit">Entrar</Button>
               {/* <a href="forgot">Esqueci minha senha</a> */}
            </Form>
            {/* <a href="signup">
            <FiLogIn />
            Criar conta
         </a> */}
         </Content>

         <Background />
      </Container>
   );
};

export default SignIn;

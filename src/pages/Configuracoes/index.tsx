import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Historic from '../../components/Historic';

import { RButton, RContainer, RCol, RForm, RInput, RRow, RTable, Tbody, Td, Th, Thead, Tr } from './styles';

const Dashboard: React.FC = () => {
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
      <RContainer>
         <Navbar />
         <Card title="Histórico de rounds">
            <Historic />
         </Card>
      </RContainer>
   );
};

export default Dashboard;

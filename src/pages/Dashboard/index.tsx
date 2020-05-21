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
         <RRow>
            <RCol className="mb-3" xl="6">
               <Card title="Novo jogo">
                  <RForm ref={formRef} onSubmit={handleSubmit}>
                     <RInput name="pedra" placeholder="Pedra sorteada" autoComplete="off" />
                     <RButton type="submit">MARCAR</RButton>
                  </RForm>
               </Card>
               <Card title="Histórico de rounds">
                  <Historic />
               </Card>
            </RCol>
            <RCol xl="6">
               <Card title="Sequências">
                  <RTable responsive>
                     <Thead>
                        <Tr>
                           <Th>Par</Th>
                           <Th>Preto</Th>
                           <Th>Pequenas</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        <Tr>
                           <Td>1</Td>
                           <Td>1</Td>
                           <Td>1</Td>
                        </Tr>
                     </Tbody>
                  </RTable>
                  <RTable responsive>
                     <Thead>
                        <Tr>
                           <Th>Impar</Th>
                           <Th>Vermelho</Th>
                           <Th>Grandes</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        <Tr>
                           <Td>1</Td>
                           <Td>1</Td>
                           <Td>1</Td>
                        </Tr>
                     </Tbody>
                  </RTable>
                  <RTable responsive>
                     <Thead>
                        <Tr>
                           <Th>Duzia 1</Th>
                           <Th>Duzia 2</Th>
                           <Th>Duzia 3</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        <Tr>
                           <Td>1</Td>
                           <Td>1</Td>
                           <Td>1</Td>
                        </Tr>
                     </Tbody>
                  </RTable>
                  <RTable responsive>
                     <Thead>
                        <Tr>
                           <Th>Coluna 1</Th>
                           <Th>Coluna 2</Th>
                           <Th>Coluna 3</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        <Tr>
                           <Td>1</Td>
                           <Td>1</Td>
                           <Td>1</Td>
                        </Tr>
                     </Tbody>
                  </RTable>
               </Card>
            </RCol>
         </RRow>
      </RContainer>
   );
};

export default Dashboard;

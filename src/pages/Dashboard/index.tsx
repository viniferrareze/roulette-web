import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import Marking from '../../components/Marking';
import Board from '../../components/Board';
import Historic from '../../components/Historic';
import Sequence from '../../components/Sequence';
import SequenceOnClick from '../../components/SequenceOnClick';

import { RCol, RContainer, RRow } from './styles';

const Dashboard: React.FC = () => {
   const [stone, setStone] = useState(50);

   return (
      <RContainer>
         <Navbar />
         <RRow>
            <RCol xl="12">
               <SequenceOnClick />
            </RCol>
         </RRow>
      </RContainer>
   );
};

export default Dashboard;

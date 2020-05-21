import React from 'react';
import { RCard, RCardBody, RCardFooter, RCardHeader, RCardH4 } from './styles';

interface CardProps {
   title: string;
   children: object;
   className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
   return (
      <RCard className={className}>
         <RCardHeader>
            <RCardH4>{title}</RCardH4>
         </RCardHeader>
         <RCardBody>{children}</RCardBody>
         <RCardFooter />
      </RCard>
   );
};

export default Card;

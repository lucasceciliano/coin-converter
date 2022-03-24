import React from 'react';
import { StatusBar } from 'react-native';
 
import {
   Container,
   Content,
   Title,
   TextInput,
   ToInvolveInput,
} from './styles';
 
export function Page(){
  return (

      <Container>
          <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor='transparent'
          />

        <Content>

        <Title>Converta um valor:</Title>

        <ToInvolveInput>
        <TextInput placeholder='Digite um valor'/>

        </ToInvolveInput>

        </Content>


      </Container>
  )
}
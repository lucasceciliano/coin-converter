import React, { useState } from 'react';
import { StatusBar } from 'react-native';
 
import {
   Container,
   Content,
   Title,
   TextInput,
   ToInvolveInput,
   Description,
   Price,
   ButtonConverter,
   Button,
   TextResult,
} from './styles';


 
export function Page(){

  
  const [value, setValue] = useState('')
  const [price, setPrice] = useState(4.31)

  //const totalDolar = 4.31

  function handleCalcValue(){

      const totalDolar = parseFloat(value) / price

      alert(totalDolar)
  }

  return (

      <Container>
          <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor='transparent'
          />

        <Content>

        <Title>Digite um valor:</Title>

        <ToInvolveInput>
        <TextInput placeholder='Digite um valor' keyboardType='numeric' onChangeText={setValue}  />
        <Price>1 Dólar = 4,83 reais </Price>
        </ToInvolveInput>

        <Description>De real para dollar</Description>
        
        <ButtonConverter>
        <Button
          title='Calcular'
          color='#24291c'
          onPress={handleCalcValue}
        />
        </ButtonConverter>

        
          <TextResult></TextResult>
       

        </Content>


      </Container>
  )
}
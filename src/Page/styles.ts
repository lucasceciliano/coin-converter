import styled from 'styled-components/native';
 
export const Container = styled.View`
  flex: 1;
  background-color: #24291c;

`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`;

export const Title   = styled.Text`
    font-size: 27px;
    font-weight: bold;
    color: #fff;
    
`;

export const ToInvolveInput = styled.View`
    padding: 30px;
    align-items: center;
    width: 100%;
    
`;

export const TextInput = styled.TextInput`
    width: 90%;

    background-color: #fff;
    border-radius: 10px;
    margin: 15px;
    padding: 10px;
    font-size: 23px;

    text-align: center;
`;

export const Price = styled.Text`
   color: gray;
    font-size: 18px; 
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;

    margin-top: 15px;
    
`;

export const ButtonConverter = styled.View`
    border-radius: 10px;
    background-color: #9ef170;
    margin-top: 15px;
    margin-bottom: 33px;
    padding: 15px;
    font-size: 23px;

    text-align: center;
    width: 70%;
`;

export const Button = styled.Button`
   
`;

export const TextResult = styled.Text`
    font-size: 25px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    color: #fff;
`;
import styled from 'styled-components/native';
 
export const Container = styled.View`
  flex: 1;
  background-color: #24291c;

`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
`;

export const Title   = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    
`;

export const ToInvolveInput = styled.View`
    padding: 30px;
    flex-direction: row;
    
`;

export const TextInput = styled.TextInput`
    width: 100%;

    background-color: #fff;
    border-radius: 30px;
    margin: 15px;
    padding: 10px;
    font-size: 23px;

    text-align: center;
`;
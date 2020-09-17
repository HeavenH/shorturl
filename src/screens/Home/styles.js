import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const UrlContainer = styled.View`
    margin-top: 120px;
    justify-content: center;
    align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #862623;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 28%;
  border-radius: 26px;
`;

export const SubmitButtonText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

export const LinkText = styled.Text`
  align-self: center;
  margin-top: 20px;
  color: #862623;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
  border: 1px solid #862623;
`;

export const LinkContainer = styled.View`
    flex-direction: row;
    background-color: rgba(41,67,89, 0.3);
    border-radius: 12px;
    margin: 8px;
    padding: 10px 15px;
    min-height: 120px;
    width: 120px;
    min-width: 120px;
    height: 120px;
`;

export const InfoFile = styled.View`
  flex-direction: row;
    margin-left: 20px;
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    background-color: rgba(41,67,89, 0.3);
    border-radius: 12px;
    margin: 8px;
    padding: 10px 15px;
`;
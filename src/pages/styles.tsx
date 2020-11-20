import styled from 'styled-components/native';

export const PushButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.8);
  align-items: center;
  justify-content: center;
  position: absolute;
  
`;
export const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
`;

export const Button = styled.TouchableHighlight`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  background-color: #131418;
  border-radius: 6px;
  position: absolute;
  bottom: 50px;
`;

export const LabelButton = styled.Text`
  font-size: 18px;
  color: #fff;
`;



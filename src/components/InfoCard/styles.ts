import styled from "styled-components/native";

export const InfoContainer = styled.View`
  padding: 24px 48px;
  width: 95%;
  background-color: #222222;
  border-radius: 16px;

  flex-direction: row;
  align-items: center;
  gap: 32px;
  margin: 12px auto;
`;

export const InfoContainerText = styled.Text`
  color: white;
  font-size: 24px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

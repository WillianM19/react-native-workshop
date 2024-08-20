import { styled } from "styled-components/native";
import { InfoContainer, InfoContainerText, Image } from "./styles";

interface InfoCardProps {
  name: string;
  imageUrl: string;
}

export default function InfoCard({ name, imageUrl }: InfoCardProps) {
  return (
    <InfoContainer>
      <Image
        source={{
          uri: imageUrl,
        }}
      />
      <InfoContainerText>{name}</InfoContainerText>
    </InfoContainer>
  );
}
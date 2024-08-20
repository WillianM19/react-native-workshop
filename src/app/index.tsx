import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { MainView, H1Title, Line } from './styles';
import InfoCard from '../components/InfoCard';
import styled from 'styled-components/native';
import { getCharacterData } from '../services/api';

export interface dataProps {
  name: string;
  imageUrl: string;
}

export default function App() {
  const [data, setData] = useState<dataProps[]>([])

  useEffect(() => {
    async function getData() {
      const data = await getCharacterData()
      setData(data)
    }
    getData()
  }, [])

  const renderItem = ({ item }: { item: dataProps }) => (
    <InfoCard name={item.name} imageUrl={item.imageUrl} />
  );

  return (
    <MainView>
      <H1Title>Rick Morty API</H1Title>
      <Text>Oficina - React Native</Text>
      <Line />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={{width: '100%'}}
      />
    </MainView>
  );
}

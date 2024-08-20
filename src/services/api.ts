import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/"
})


export async function getCharacterData() {
  try {
    const data = await api.get('character')
    
    const formatedData = data.data.results.map((item: any) => {return {name: item.name, imageUrl: item.image}})
    return formatedData
  } catch(_) {
    return []
  }
}
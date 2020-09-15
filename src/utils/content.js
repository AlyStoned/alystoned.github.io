import { fetchLocalData } from './local-data'


export default async function getContent() {
  const data = await fetchLocalData();
  return data
}

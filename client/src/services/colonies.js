import api from './apiConfig'

export const getAllColonies = async () => {
  const resp = await api.get('/colonies');
  return resp.data;
}

export const getOneColony = async (id) => {
  const resp = await api.get(`/colonies/${id}`);
  return resp.data;
}

export const postColony = async (colonyData) => {
  const resp = await api.post('/colonies', colonyData);
  return resp.data;
}

export const putColony = async (id, colonyData) => {
  const resp = await api.put(`/colonies/${id}`, colonyData);
  return resp.data;
}

export const deleteColony = async (id) => {
  const resp = await api.delete(`/colonies/${id}`);
  return resp.data;
}
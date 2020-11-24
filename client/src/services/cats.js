import api from './apiConfig'

export const getAllCats = async () => {
  const resp = await api.get('/cats');
  return resp.data;
}

export const getOneCat = async (id) => {
  const resp = await api.get(`/cats/${id}`);
  return resp.data;
}

export const postCat = async (catData) => {
  const resp = await api.post('/cats', catData);
  return resp.data;
}

export const putCat = async (id, catData) => {
  const resp = await api.put(`/cats/${id}`, catData);
  // console.log(resp.data)
  return resp.data;
}

export const deleteCat = async (id) => {
  const resp = await api.delete(`/cats/${id}`);
  return resp.data;
}
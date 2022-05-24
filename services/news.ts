import request from 'lib/axios';
import { getLocalStorage } from './localstorage';

export const getNews = (params: {
  limit?: Number;
  offer?: Number;
  city?: String;
  district?: String;
  ward?: String;
}) => request.get(`/news/get`, { params });

export const getNewsById = (id: string) => request.get(`/news/get/${id}`);

export const addNews = (data: Record<string, any>) => {
  const bodyData = new FormData();

  for (const key in data) {
    if (key === 'images') {
      data?.images.forEach((element: File) => {
        bodyData.append('images', element);
      });
    } else {
      bodyData.append(key, data[key]);
    }
  }

  return request.post('/news/add', bodyData, {
    headers: {
      Authorization: 'Bearer ' + getLocalStorage('accessToken'),
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const editNews = (data: Record<string, any>, id: string) => {
  const bodyData = new FormData();

  for (const key in data) {
    if (key === 'images') {
      data?.images.forEach((element: File) => {
        bodyData.append('images', element);
      });
    } else {
      bodyData.append(key, data[key]);
    }
  }

  return request.put(`/news/edit/${id}`, bodyData, {
    headers: {
      Authorization: 'Bearer ' + getLocalStorage('accessToken'),
      'Content-Type': 'multipart/form-data',
    },
  });
};

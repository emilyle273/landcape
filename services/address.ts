import request from 'lib/axios';

export const getDistricts = () =>
  request.get(`/provinces?code=48`);

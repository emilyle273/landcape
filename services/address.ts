import request from 'lib/axios'

export const getDistricts = (params: {code?: String}) => request.get(`/provinces`, { params })
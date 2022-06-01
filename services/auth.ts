import request from 'lib/axios';
import { User } from 'types';

export const login = (data: User) => request.post(`/auth/login`, data);

export const register = (data: User) => request.post(`/auth/register`, data);

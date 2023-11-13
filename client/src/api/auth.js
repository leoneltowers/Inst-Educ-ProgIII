import axios from "./axios"
import { API_URL } from "../config";
//const API_URL = "http://localhost:3000/api";

export const registerRequest = async (user) => axios.post(`register`, user);

export const loginRequest = async (user) => axios.post(`login`, user);

export const verifyTokenRequest = async () => axios.get(`verify`);

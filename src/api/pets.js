import axios from "axios";
import instance from ".";
import PetList from "../components/PetList";

export const list = async () => {
  const response = await instance.get("/pets");
  return response.data;
};
export const onepet = async () => {
  const response = await instance.get(`/pets/:id`);
  return response.data;
};

export const addpet = async () => {
  const response = await instance.post(`/pets`);
  return response.data;
};
export const dpet = async () => {
  const response = await instance.delete(`/pets/`);
  return response.data;
};

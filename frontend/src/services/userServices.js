import axios from "axios";

const baseURL = "http://localhost:3000";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar:
      "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    background:
      "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
  };
  const response = axios.post(`${baseURL}/create`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);
  return response;
}

function generateUserName(name) {
    const nameLowerCasewithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCasewithoutSpaces}${randomNumber}`;
}
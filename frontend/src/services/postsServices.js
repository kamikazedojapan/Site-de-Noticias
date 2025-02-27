import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export function getAllPosts() {
    const response = axios.get(`${baseUrl}/news/find`)
    return response;
}

export function getTopPost() {
    const response = axios.get(`${baseUrl}/news/top`)
    return response;
}

export function searchPosts(title) {
    const response = axios.get(`${baseUrl}/news/search?title=${title}`)
    return response;
}
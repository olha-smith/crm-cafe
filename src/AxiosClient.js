import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1"
const MENU_ITEMS = "/menu-items"
const TIMEOUT = 2000

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: TIMEOUT
});

export async function getMenuItems() {
    const response = await axiosClient.get(`${MENU_ITEMS}`);
    return response.data;
}

export function getMenuItem(id) {
    return axiosClient.get(`${MENU_ITEMS}/${id}`).then(response => response.data);
}

export function addMenuItem() {
    return axiosClient.post(`${MENU_ITEMS}`).then(response => response.data);
}

export function deleteMenuItem(id) {
    return axiosClient.delete(`${MENU_ITEMS}/${id}`);
}

export function patchMenuItem(id, data) {
    return axiosClient.patch(`${MENU_ITEMS}/${id}`, data).then(response => response.data);
}

export {axiosClient};
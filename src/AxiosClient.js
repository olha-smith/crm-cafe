import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1"
export const MENU_ITEMS = "/menu-items"
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

export async function getMenuItem(id) {
    const response = await axiosClient.get(`${MENU_ITEMS}/${id}`);
    return response.data;
}

export async function createMenuItem() {
    const response = await axiosClient.post(`${MENU_ITEMS}`);
    return response.data;
}

export async function deleteMenuItem(id) {
    await axiosClient.delete(`${MENU_ITEMS}/${id}`);
}

export async function patchMenuItem(id, data) {
    const response = await axiosClient.patch(`${MENU_ITEMS}/${id}`, data);
    return response.data;
}

export {axiosClient};

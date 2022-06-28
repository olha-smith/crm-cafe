import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: 2000
});

const MENU_ITEMS = "/menu-items"

export function getMenuItems() {
    return axiosClient.get(`${MENU_ITEMS}`).then(response => response.data);
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
    return axiosClient.patch(`${MENU_ITEMS}/${id}`, {data}).then(response => response.data);
}

export {axiosClient};
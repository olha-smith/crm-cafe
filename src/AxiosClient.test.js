import {BASE_URL, MENU_ITEMS} from "./AxiosClient";
import {getMenuItems, patchMenuItem, deleteMenuItem, createMenuItem, getMenuItem} from "./AxiosClient";
import nock from 'nock';
import {testMenuItem} from "./TestObjectFactory.test";

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
}

it('getMenu - success', async () => {
    const expectedResponse = [testMenuItem()]

    nock(BASE_URL).get(MENU_ITEMS).reply(200, expectedResponse, headers);

    const response = await getMenuItems();

    expect(response).toStrictEqual(expectedResponse);
});

it('createMenuItem - success', async () => {
    const itemId = 345;
    const expectedResponse = { id: itemId };

    nock(BASE_URL).post(MENU_ITEMS).reply(201, expectedResponse, headers);

    const response = await createMenuItem();

    expect(response).toStrictEqual(expectedResponse);
});

it('getMenuItem - success', async () => {
    const expectedResponse = testMenuItem()

    nock(BASE_URL).get(`${MENU_ITEMS}/${expectedResponse.id}`).reply(200, expectedResponse, headers);

    const response = await getMenuItem(expectedResponse.id);

    expect(response).toStrictEqual(expectedResponse)
});

it('deleteMenuItem - success', async () => {
    const itemId = 34;

    nock(BASE_URL).options(`${MENU_ITEMS}/${itemId}`).reply(200, null, headers);
    nock(BASE_URL).delete(`${MENU_ITEMS}/${itemId}`).reply(204, null, headers);

    await deleteMenuItem(itemId);
});

it('patchMenuItem - success', async () => {
    const itemId = 34;
    const newMenuItem = {
        name: "Pizza",
        weight: 220,
        isAvailable: false
    };
    const updatedMenuItem = testMenuItem();
    updatedMenuItem.name = newMenuItem.name;
    updatedMenuItem.weight = newMenuItem.weight;
    updatedMenuItem.isAvailable = newMenuItem.isAvailable;

    nock(BASE_URL).options(`${MENU_ITEMS}/${itemId}`).reply(200, null, headers);
    nock(BASE_URL)
        .patch(`${MENU_ITEMS}/${itemId}`, newMenuItem)
        .reply(200, updatedMenuItem, headers);

    const response = await patchMenuItem(itemId, newMenuItem);

    expect(response).toStrictEqual(updatedMenuItem);
});


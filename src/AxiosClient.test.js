import {BASE_URL} from "./AxiosClient";
import {getMenuItems} from "./AxiosClient";
import nock from 'nock';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
}

it('getMenu - success', async () => {
    const expectedResponse = [{
        id: 3,
        name: "string",
        category: "string",
        ingredients: "string",
        weight: 0,
        price: 0,
        image: "string",
        isAvailable: true
    }]

    nock(BASE_URL)
        .get('/menu-items')
        .reply(200, expectedResponse, headers);

    const response = await getMenuItems();

    expect(response).toStrictEqual(expectedResponse);
});

const { test, expect } = require(`@playwright/test`);

test(`has response`, async ({ request }) => {
	const response = await request.get(`/api/v1/project/sviatlana_tumilevich_personal`);
	expect(response).toBeOK();
});

test(`GET dashboard`, async ({ request }) => {
	const response = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const body = await response.json();
	expect(body.content[0].owner).toBe(`sviatlana_tumilevich`);
	expect(body.content[0].name).toBe(`Dashboard First`);
});

test(`POST dashboard`, async ({ request }) => {
	const response = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const body = await response.json();
	const elementsNumber = body.page.totalElements;
	await request.post(`/api/v1/sviatlana_tumilevich_personal/dashboard`, {
		data: {
			name: `newName`
		}
	});
	const newResponse = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const newBody = await newResponse.json();
	const newElementsNumber = newBody.page.totalElements;
	expect(newElementsNumber).not.toEqual(elementsNumber);
});

test(`PUT dashboard`, async ({ request }) => {
	const postResponse = await request.post(`/api/v1/sviatlana_tumilevich_personal/dashboard`, {
		data: {
			name: `newName2`
		}
	});
	expect(postResponse).toBeOK();
	const response = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const body = await response.json();
	const elementsNumber = body.page.totalElements;
	const elementId = body.content[elementsNumber - 1].id;
	const elementName = body.content[elementsNumber - 1].name;
	const putResponse = await request.put(`/api/v1/sviatlana_tumilevich_personal/dashboard/${elementId}`, {
		data: {
			name: `newName3`
		}
	});
	expect(putResponse).toBeOK();
	const newResponse = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const newBody = await newResponse.json();
	const newElementName = newBody.content[elementsNumber - 1].name;
	expect(elementName).not.toEqual(newElementName);
	await request.delete(`/api/v1/sviatlana_tumilevich_personal/dashboard/${newBody.content[elementsNumber - 1].id}`);
});

test(`DELETE dashboards`, async ({ request }) => {
	const response = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const body = await response.json();
	const elementsNumber = body.page.totalElements;
	await request.delete(`/api/v1/sviatlana_tumilevich_personal/dashboard/${body.content[elementsNumber - 1].id}`);
	const newResponse = await request.get(`/api/v1/sviatlana_tumilevich_personal/dashboard`);
	const newBody = await newResponse.json();
	expect(newBody.page.totalElements).toEqual(elementsNumber - 1);
});
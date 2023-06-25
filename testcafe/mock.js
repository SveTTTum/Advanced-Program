const { Selector, RequestMock } = require(`testcafe`);

const mock = RequestMock()
	.onRequestTo(`/localhost:8080/ui/#login/`)
	.respond(``, 404);

fixture`RequestMock`
	.page`https://localhost:8080/`
	.requestHooks(mock);

test(`Should mock requests`, async t => {
	await t.wait(3000);
	const body = Selector(`body`);
	const bodyText = await body.innerText;
	await t.expect(bodyText).contains(`404 page not found`);
});
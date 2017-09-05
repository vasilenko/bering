import nightmare from 'nightmare';

describe('Homepage', () => {
  it('contains project name', async () => {
    const page = nightmare().goto('http://localhost:3000');
    const text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Bering & Aleut');
  });
});

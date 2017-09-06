import nightmare from 'nightmare';

const ROOT = 'http://localhost:3000';

describe('Homepage', () => {
  it('contains project name', async () => {
    const page = nightmare().goto(ROOT);
    const text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Bering & Aleut');
  });
});

describe('Like Button', () => {
  it('increments like count', async () => {
    const url = `${ROOT}/posts/1`;
    const button = '.extra .item:last-child .button';

    const getValue = () => (
      parseInt(
        document
          .querySelector('.extra .item:last-child .button .label')
          .textContent
      )
    );

    const initialValue = await
      nightmare()
        .goto(url)
        .evaluate(getValue)
        .end();

    const updatedValue = await
      nightmare()
        .goto(url)
        .click(button)
        .wait(100) // ?
        .evaluate(getValue)
        .end();

    expect(updatedValue).toEqual(initialValue + 1);
  });
});

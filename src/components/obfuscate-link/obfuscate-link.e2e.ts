import { newE2EPage } from '@stencil/core/testing';

describe('obfuscate-link', () => {
  it('email', async () => {
    const page = await newE2EPage();
    await page.setContent('<obfuscate-link email="aXZvQGxvY2FsLmRldg=="></obfuscate-link>');
    const element = await page.find('obfuscate-link');
    expect(element).toHaveClass('hydrated');
    expect((await element.find('span')).textContent).toEqual('Not for the bots');
    await element.click();
    expect((await element.find('a')).textContent).toEqual('ivo@local.dev');
    expect((await element.find('a')).getAttribute('href')).toEqual('mailto:ivo@local.dev');
  });
    it('href', async () => {
    const page = await newE2EPage();
    await page.setContent('<obfuscate-link tel="aXZvQGxvY2FsLmRldg==">link text</obfuscate-link>');
    const element = await page.find('obfuscate-link');
    expect(element).toHaveClass('hydrated');
    expect((await element.find('span')).textContent).toEqual('Not for the bots');
    await element.click();
    expect((await element.find('a')).textContent).toEqual('link text');
    expect((await element.find('a')).getAttribute('href')).toEqual('tel:ivo@local.dev');
  });
  it('tel', async () => {
    const page = await newE2EPage();
    await page.setContent('<obfuscate-link tel="aXZvQGxvY2FsLmRldg=="></obfuscate-link>');
    const element = await page.find('obfuscate-link');
    expect(element).toHaveClass('hydrated');
    expect((await element.find('span')).textContent).toEqual('Not for the bots');
    await element.click();
    expect((await element.find('a')).textContent).toEqual('ivo@local.dev');
    expect((await element.find('a')).getAttribute('href')).toEqual('tel:ivo@local.dev');
  });
  it('sms', async () => {
    const page = await newE2EPage();
    await page.setContent('<obfuscate-link sms="aXZvQGxvY2FsLmRldg=="></obfuscate-link>');
    const element = await page.find('obfuscate-link');
    expect(element).toHaveClass('hydrated');
    expect((await element.find('span')).textContent).toEqual('Not for the bots');
    await element.click();
    expect((await element.find('a')).textContent).toEqual('ivo@local.dev');
    expect((await element.find('a')).getAttribute('href')).toEqual('sms:ivo@local.dev');
  });
  it('facetime', async () => {
    const page = await newE2EPage();
    await page.setContent('<obfuscate-link facetime="aXZvQGxvY2FsLmRldg=="></obfuscate-link>');
    const element = await page.find('obfuscate-link');
    expect(element).toHaveClass('hydrated');
    expect((await element.find('span')).textContent).toEqual('Not for the bots');
    await element.click();
    expect((await element.find('a')).textContent).toEqual('ivo@local.dev');
    expect((await element.find('a')).getAttribute('href')).toEqual('facetime:ivo@local.dev');
  });
  it('href', async () => {
    const page = await newE2EPage();
    await page.setContent('<obfuscate-link href="aXZvQGxvY2FsLmRldg=="></obfuscate-link>');
    const element = await page.find('obfuscate-link');
    expect(element).toHaveClass('hydrated');
    expect((await element.find('span')).textContent).toEqual('Not for the bots');
    await element.click();
    expect((await element.find('a')).textContent).toEqual('ivo@local.dev');
    expect((await element.find('a')).getAttribute('href')).toEqual('ivo@local.dev');
  });
});

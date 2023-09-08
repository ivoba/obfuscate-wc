import { newSpecPage } from '@stencil/core/testing';
import { ObfuscateLink } from './obfuscate-link';

describe('obfuscate-link', () => {
  it('email', async () => {
    const { root } = await newSpecPage({
      components: [ObfuscateLink],
      html: '<obfuscate-link email="aXZvQGxvY2FsLmRldg==" />',
    });
    expect(root).toEqualHtml(`
        <obfuscate-link email="aXZvQGxvY2FsLmRldg=="><span>Not for the bots</span></obfuscate>
    `);
  });
  it('tel', async () => {
    const { root } = await newSpecPage({
      components: [ObfuscateLink],
      html: '<obfuscate-link tel="aXZvQGxvY2FsLmRldg==" />',
    });
    expect(root).toEqualHtml(`
        <obfuscate-link tel="aXZvQGxvY2FsLmRldg=="><span>Not for the bots</span></obfuscate>
    `);
  });
  it('sms', async () => {
    const { root } = await newSpecPage({
      components: [ObfuscateLink],
      html: '<obfuscate-link sms="aXZvQGxvY2FsLmRldg==" />',
    });
    expect(root).toEqualHtml(`
        <obfuscate-link sms="aXZvQGxvY2FsLmRldg=="><span>Not for the bots</span></obfuscate>
    `);
  });
  it('facetime', async () => {
    const { root } = await newSpecPage({
      components: [ObfuscateLink],
      html: '<obfuscate-link facetime="aXZvQGxvY2FsLmRldg==" />',
    });
    expect(root).toEqualHtml(`
        <obfuscate-link facetime="aXZvQGxvY2FsLmRldg=="><span>Not for the bots</span></obfuscate>
    `);
  });
  it('href', async () => {
    const { root } = await newSpecPage({
      components: [ObfuscateLink],
      html: '<obfuscate-link href="aXZvQGxvY2FsLmRldg==" />',
    });
    expect(root).toEqualHtml(`
        <obfuscate-link href="aXZvQGxvY2FsLmRldg=="><span>Not for the bots</span></obfuscate>
    `);
  });
});

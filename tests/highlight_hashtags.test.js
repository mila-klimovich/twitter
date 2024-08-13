import { assert } from 'chai';
import { describe, it } from 'mocha';
import highlightHashtags from '../public/assets/highlight_hashtags.js';

describe('The function to find and highlight hashtags in a string', () => {
  it('no hashtags', () => {
    const expected = 'Who else is learning nothing?';
    const result = highlightHashtags('Who else is learning nothing?');
    assert.equal(expected, result);
  });

  it('one hashtag', () => {
    const expected = 'Who else is learning <a href="/search?tag=javascript" >#javascript</a> ?';
    const result = highlightHashtags('Who else is learning #javascript ?');
    assert.equal(expected, result);
  });

  it('two hashtags', () => {
    const expected = 'Who else is learning <a href="/search?tag=javascript" >#javascript</a> and <a href="/search?tag=python" >#python</a> ?';
    const result = highlightHashtags('Who else is learning #javascript and #python ?');
    assert.equal(expected, result);
  });

  it('three hashtags', () => {
    const expected = 'Who else is learning <a href="/search?tag=javascript" >#javascript</a> , <a href="/search?tag=python" >#python</a> and <a href="/search?tag=go" >#go</a> ?';
    const result = highlightHashtags('Who else is learning #javascript , #python and #go ?');
    assert.equal(expected, result);
  });

  it('four hashtags', () => {
    const expected = '<a href="/search?tag=heyyall" >#heyyall</a> Who else is learning <a href="/search?tag=javascript" >#javascript</a> , <a href="/search?tag=python" >#python</a> and <a href="/search?tag=go" >#go</a> ?';
    const result = highlightHashtags('#heyyall Who else is learning #javascript , #python and #go ?');
    assert.equal(expected, result);
  });

  it('five hashtags', () => {
    const expected = '<a href="/search?tag=heyyall" >#heyyall</a> Who else is learning <a href="/search?tag=javascript" >#javascript</a> , <a href="/search?tag=python" >#python</a> , <a href="/search?tag=go" >#go</a> and <a href="/search?tag=swift" >#swift</a> ?';
    const result = highlightHashtags('#heyyall Who else is learning #javascript , #python , #go and #swift ?');
    assert.equal(expected, result);
  });

  it('six hashtags', () => {
    const expected = '<a href="/search?tag=heyyall" >#heyyall</a> Who else of yall <a href="/search?tag=nerds" >#nerds</a> is learning <a href="/search?tag=javascript" >#javascript</a> , <a href="/search?tag=python" >#python</a> , <a href="/search?tag=go" >#go</a> and <a href="/search?tag=swift" >#swift</a> ?';
    const result = highlightHashtags('#heyyall Who else of yall #nerds is learning #javascript , #python , #go and #swift ?');
    assert.equal(expected, result);
  });
});

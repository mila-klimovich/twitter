import { assert } from 'chai';
import { describe, it } from 'mocha';
import changeLinks from '../public/assets/change_links.js';

describe('The function to wrap a link into an HTML tag', () => {
  it('with one link https protocol', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a>";
    const result = changeLinks('My github: https://github.com/mila-klimovich');
    assert.equal(expectedResult, result);
  });

  it('with two links https protocol', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a> and my linkedin: <a href='<https://linkedin.com/mila-klimovich>'linkedin.com/mila-klimovich</a>";
    const result = changeLinks(
      'My github: https://github.com/mila-klimovich and my linkedin: https://linkedin.com/mila-klimovich',
    );
    assert.equal(expectedResult, result);
  });

  it('with tree links different protocols', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a> and my linkedin: <a href='<https://linkedin.com/mila-klimovich>'linkedin.com/mila-klimovich</a> and my facebook: <a href='<https://facebook.com/mila-klimovich>'facebook.com/mila-klimovich</a>";
    const result = changeLinks(
      'My github: https://github.com/mila-klimovich and my linkedin: https://linkedin.com/mila-klimovich and my facebook: http://facebook.com/mila-klimovich',
    );
    assert.equal(expectedResult, result);
  });

  it('multiple links with and without protocols', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a> and my linkedin: <a href='<https://linkedin.com/mila-klimovich>'linkedin.com/mila-klimovich</a> and my facebook: <a href='<https://facebook.com/mila-klimovich>'facebook.com/mila-klimovich</a> and my vk: <a href='<https://vk.com/mila-klimovich>'vk.com/mila-klimovich</a>";
    const result = changeLinks(
      'My github: https://github.com/mila-klimovich and my linkedin: https://linkedin.com/mila-klimovich and my facebook: http://facebook.com/mila-klimovich and my vk: vk.com/mila-klimovich',
    );
    assert.equal(expectedResult, result);
  });

  it('multiple links with and without protocols, with and without subdomain', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a> and my linkedin: <a href='<https://linkedin.com/mila-klimovich>'linkedin.com/mila-klimovich</a> and my facebook: <a href='<https://facebook.com/mila-klimovich>'facebook.com/mila-klimovich</a> and my vk: <a href='<https://vk.com/mila-klimovich>'vk.com/mila-klimovich</a> also search me on <a href='<https://odnoklassniki.ru>'odnoklassniki.ru</a>";
    const result = changeLinks(
      'My github: https://github.com/mila-klimovich and my linkedin: https://linkedin.com/mila-klimovich and my facebook: http://facebook.com/mila-klimovich and my vk: vk.com/mila-klimovich also search me on https://odnoklassniki.ru',
    );
    assert.equal(expectedResult, result);
  });

  it('more multiple links', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a> and my linkedin: <a href='<https://linkedin.com/mila-klimovich>'linkedin.com/mila-klimovich</a> and my facebook: <a href='<https://facebook.com/mila-klimovich>'facebook.com/mila-klimovich</a> and my vk: <a href='<https://vk.com/mila-klimovich>'vk.com/mila-klimovich</a> also search me on <a href='<https://odnoklassniki.ru>'odnoklassniki.ru</a> and if you're very old school try this: <a href='<https://myspace.com/mila-klimovich>'myspace.com/mila-klimovich</a>";
    const result = changeLinks(
      "My github: https://github.com/mila-klimovich and my linkedin: https://linkedin.com/mila-klimovich and my facebook: http://facebook.com/mila-klimovich and my vk: vk.com/mila-klimovich also search me on https://odnoklassniki.ru and if you're very old school try this: https://myspace.com/mila-klimovich",
    );
    assert.equal(expectedResult, result);
  });

  it('lots of links', () => {
    const expectedResult = "My github: <a href='<https://github.com/mila-klimovich>'github.com/mila-klimovich</a> and my linkedin: <a href='<https://linkedin.com/mila-klimovich>'linkedin.com/mila-klimovich</a> and my facebook: <a href='<https://facebook.com/mila-klimovich>'facebook.com/mila-klimovich</a> and my vk: <a href='<https://vk.com/mila-klimovich>'vk.com/mila-klimovich</a> also search me on <a href='<https://odnoklassniki.ru>'odnoklassniki.ru</a> and if you're very old school try this: <a href='<https://myspace.com/mila-klimovich>'myspace.com/mila-klimovich</a> finally if you're korean try <a href='<https://naver.com/mila-klimovich>'naver.com/mila-klimovich</a>";
    const result = changeLinks(
      "My github: https://github.com/mila-klimovich and my linkedin: https://linkedin.com/mila-klimovich and my facebook: http://facebook.com/mila-klimovich and my vk: vk.com/mila-klimovich also search me on https://odnoklassniki.ru and if you're very old school try this: https://myspace.com/mila-klimovich finally if you're korean try naver.com/mila-klimovich",
    );
    assert.equal(expectedResult, result);
  });
});

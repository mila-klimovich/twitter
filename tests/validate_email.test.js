import { assert } from 'chai';
import { describe, it } from 'mocha';
import validateEmail from '../public/assets/validate_email.js';

describe('The function to check if the email is valid', () => {
  it('regular valid email', () => {
    const expectedResult = true;
    const result = validateEmail('example@example.com');
    assert.equal(expectedResult, result);
  });

  it('email without @', () => {
    const expectedResult = false;
    const result = validateEmail('example.com');
    assert.equal(expectedResult, result);
  });

  it('email with two @', () => {
    const expectedResult = false;
    const result = validateEmail('exa@mple@example.com');
    assert.equal(expectedResult, result);
  });

  it('email with no domain', () => {
    const expectedResult = false;
    const result = validateEmail('example@.com');
    assert.equal(expectedResult, result);
  });

  it('email with more than one dot', () => {
    const expectedResult = true;
    const result = validateEmail('example.name@example.com');
    assert.equal(expectedResult, result);
  });

  it('email without dots', () => {
    const expectedResult = false;
    const result = validateEmail('example@com');
    assert.equal(expectedResult, result);
  });

  it('email without letters', () => {
    const expectedResult = false;
    const result = validateEmail('example');
    assert.equal(expectedResult, result);
  });
});

import { assert } from 'chai';
import { describe, it } from 'mocha';
import convertTime from '../public/assets/convert_time.js';

describe('The function to calculate time since the publication', () => {
  it('one minute ago', () => {
    const expected = '1 minute ago';
    const result = convertTime(
      new Date('2024-06-30T18:24:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });

  it('59 minutes ago', () => {
    const expected = '59 minutes ago';
    const result = convertTime(
      new Date('2024-06-30T17:26:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });

  it('1 hour ago', () => {
    const expected = '1 hour ago';
    const result = convertTime(
      new Date('2024-06-30T17:25:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });

  it('1 day ago', () => {
    const expected = '1 day ago';
    const result = convertTime(
      new Date('2024-06-29T17:25:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });

  it('5 days ago', () => {
    const expected = '5 days ago';
    const result = convertTime(
      new Date('2024-06-25T17:25:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });

  it('1 year ago', () => {
    const expected = '1 year ago';
    const result = convertTime(
      new Date('2023-06-30T17:25:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });

  it('4 years ago', () => {
    const expected = '4 years ago';
    const result = convertTime(
      new Date('2020-06-30T17:25:00Z'),
      new Date('2024-06-30T18:25:00Z'),
    );
    assert.equal(expected, result);
  });
});

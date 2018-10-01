/**
 * @file tests for the project
 * @author Ian Johnson <ianprime0509@gmail.com>
 * @copyright 2018 Ian Johnson
 * @license MIT
 */
import { expect } from 'chai';
import 'mocha';

import { isValid, validate } from './index';

import germanPotatoSalad from '../examples/valid/german-potato-salad.json';

import empty from '../examples/invalid/empty.json';

describe('isValid', () => {
  it('returns true when given a valid recipe', () => {
    expect(isValid(germanPotatoSalad)).to.be.true;
  });

  it('returns false when given an empty recipe object', () => {
    expect(isValid(empty)).to.be.false;
  });
});

describe('validate', () => {
  it('returns an empty array when given a valid recipe', () => {
    expect(validate(germanPotatoSalad)).to.be.an('array').that.is.empty;
  });

  it('returns a non-empty array when given an empty recipe object', () => {
    expect(validate(empty)).to.be.an('array').that.is.not.empty;
  });
});

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
import spacedIngredientQuantities from '../examples/valid/spaced-ingredient-quantities.json';

import badIngredientSpacing2 from '../examples/invalid/bad-ingredient-spacing-2.json';
import badIngredientSpacing from '../examples/invalid/bad-ingredient-spacing.json';
import badIngredientString2 from '../examples/invalid/bad-ingredient-string-2.json';
import badIngredientString from '../examples/invalid/bad-ingredient-string.json';
import empty from '../examples/invalid/empty.json';

describe('isValid', () => {
  it('returns true when given a valid recipe', () => {
    expect(isValid(germanPotatoSalad)).to.be.true;
  });

  it('returns true when given a valid recipe with spacing in quantity fractions', () => {
    expect(isValid(spacedIngredientQuantities)).to.be.true;
  });

  it('returns false when given an empty recipe object', () => {
    expect(isValid(empty)).to.be.false;
  });

  it('returns false when given a recipe with a bad ingredient string', () => {
    expect(isValid(badIngredientString)).to.be.false;
    expect(isValid(badIngredientString2)).to.be.false;
  });

  it('returns false when given a recipe with bad spacing in ingredient strings', () => {
    expect(isValid(badIngredientSpacing)).to.be.false;
    expect(isValid(badIngredientSpacing2)).to.be.false;
  });
});

describe('validate', () => {
  it('returns an empty array when given a valid recipe', () => {
    expect(validate(germanPotatoSalad)).to.be.an('array').that.is.empty;
  });

  it('returns an empty array when given a valid recipe with spacing in quantity fractions', () => {
    expect(validate(spacedIngredientQuantities)).to.be.an('array').that.is
      .empty;
  });

  it('returns a non-empty array when given an empty recipe object', () => {
    expect(validate(empty)).to.be.an('array').that.is.not.empty;
  });

  it('returns a non-empty array when given a recipe with a bad ingredient string', () => {
    expect(validate(badIngredientString)).to.be.an('array').that.is.not.empty;
    expect(validate(badIngredientString2)).to.be.an('array').that.is.not.empty;
  });

  it('returns a non-empty array when given a recipe with bad spacing in ingredient strings', () => {
    expect(validate(badIngredientSpacing)).to.be.an('array').that.is.not.empty;
    expect(validate(badIngredientSpacing2)).to.be.an('array').that.is.not.empty;
  });
});

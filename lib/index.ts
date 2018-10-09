/**
 * @file
 * @author Ian Johnson <ianprime0509@gmail.com>
 * @copyright 2018 Ian Johnson
 * @license MIT
 */
export * from './schema';

import Ajv from 'ajv';
import jsonSchemaDraft04 from 'ajv/lib/refs/json-schema-draft-04.json';

import schema from '../recipe.schema.json';
import { JSONRecipe } from './schema';

const ajv = new Ajv({ schemaId: 'id' });
ajv.addMetaSchema(jsonSchemaDraft04);
const validator = ajv.compile(schema);

/**
 * Checks whether the given object is a valid JSON Recipe. This function does
 * not return any error information (for that, see {@link validate}), and is
 * best used as a simple type guard.
 *
 * @param data the data to validate as a JSON Recipe
 * @returns whether the given object is a valid JSON Recipe
 */
export function isValid(data: any): data is JSONRecipe {
  return validator(data) as boolean;
}

/**
 * Checks whether the given object is a valid JSON Recipe, returning validation
 * errors on failure.
 *
 * @param data the object to check
 * @returns any errors encountered during validation, or an empty array if valid
 */
export function validate(data: any): string[] {
  if (!validator(data) && validator.errors) {
    return validator.errors.map(
      e => `${e.dataPath}: ${e.message ? e.message : e.keyword}`,
    );
  }
  return [];
}

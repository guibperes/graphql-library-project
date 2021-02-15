import { resolve } from 'path';
import { readFileSync } from 'fs';
import {
  buildSchema as graphqlBuildSchema,
  Source,
  BuildSchemaOptions,
  ParseOptions,
} from 'graphql';

const getFile = (path: string[]) => {
  const filePath = resolve(...path);
  const file = readFileSync(filePath);

  return file.toString();
};

const buildSchema = (
  path: string[],
  options: BuildSchemaOptions & ParseOptions = {}
) => {
  const file = getFile(path);
  const source = new Source(file);

  return graphqlBuildSchema(source, options);
};

export const GraphQL = { buildSchema };

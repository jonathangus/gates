export type CommandContext = any;

export type FieldMetadata = {
  logo: string;
};

export type FieldFormField = {
  type: 'string' | 'int';
  name: string;
  description?: string;
};

export type Condition = {
  name: string;
  key: string;
  fields: FieldFormField[];
};

export type Fields = {
  id: string;
  metadata: FieldMetadata;
  conditions: Record<string, Condition>;
};

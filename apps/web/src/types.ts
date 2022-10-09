export type CommandContext = { wallet: string; userData: UserData };

export type SourceMetadata = {
  logo: string;
};

export type Field = {
  type: 'string' | 'int';
  name: string;
  description?: string;
  title?: string;
};

export type Condition = {
  name: string;
  key: string;
  fields: Field[];
  description?: string;
  disabled?: boolean;
  method: (args: any, ctx: CommandContext) => Promise<boolean>;
};

export type Source = {
  id: string;
  metadata: SourceMetadata;
  conditions: Condition[];
};

export type UserData = {
  githubToken: string;
  twitterToken: string; // this is worldcoin id
};

export type ASTNode = {
  type: string;
  body?: ASTNode | ASTNode[];
  expressions?: ASTNode[];
  expression?: ASTNode;
  operator?: string;
  name?: string;
  left?: ASTNode;
  right?: ASTNode;
  value?: string | number | null;
  id?: ASTNode;
  init?: ASTNode | null;
  declarations?: ASTNode[];
  declaration?: ASTNode;
  test?: ASTNode;
  consequent?: ASTNode;
  alternate?: ASTNode[];
  args?: ASTNode[];
};

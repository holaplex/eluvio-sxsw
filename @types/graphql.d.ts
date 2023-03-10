
declare module '*/customer.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CreateCustomer: DocumentNode;
export const CreateCustomerWallet: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/drop.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const MintNft: DocumentNode;
export const GetDrop: DocumentNode;
export const GetProjectDrops: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/key.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ForgeKey: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/hello.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const SayHello: DocumentNode;

  export default defaultDocument;
}
    
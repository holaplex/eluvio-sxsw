import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: any;
  /** A scalar that can represent any JSON value. */
  JSON: any;
  /**
   * ISO 8601 combined date and time without timezone.
   *
   * # Examples
   *
   * * `2015-07-01T08:59:60.123`,
   */
  NaiveDateTime: any;
  /**
   * A UUID is a unique 128-bit number, stored as 16 octets. UUIDs are parsed as
   * Strings within GraphQL. UUIDs are used to assign unique identifiers to
   * entities without requiring a central allocating authority.
   *
   * # References
   *
   * * [Wikipedia: Universally Unique Identifier](http://en.wikipedia.org/wiki/Universally_unique_identifier)
   * * [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](http://tools.ietf.org/html/rfc4122)
   */
  UUID: any;
};

export type AcceptInviteInput = {
  invite: Scalars['UUID'];
};

export type AcceptInvitePayload = {
  __typename?: 'AcceptInvitePayload';
  invite: Invite;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresAt: Scalars['NaiveDateTime'];
  tokenType: Scalars['String'];
};

export type Affiliation = Member | Owner;

export enum AssetType {
  Eth = 'ETH',
  EthTest = 'ETH_TEST',
  Matic = 'MATIC',
  MaticTest = 'MATIC_TEST',
  Sol = 'SOL',
  SolTest = 'SOL_TEST'
}

export enum Blockchain {
  Ethereum = 'ETHEREUM',
  Polygon = 'POLYGON',
  Solana = 'SOLANA'
}

export type Collection = {
  __typename?: 'Collection';
  address?: Maybe<Scalars['String']>;
  blockchain: Blockchain;
  creationStatus: CreationStatus;
  creators?: Maybe<Array<CollectionCreator>>;
  holders?: Maybe<Array<Holder>>;
  id: Scalars['UUID'];
  metadataJson?: Maybe<MetadataJson>;
  mints?: Maybe<Array<CollectionMint>>;
  supply?: Maybe<Scalars['Int']>;
  totalMints: Scalars['Int'];
};

export type CollectionCreator = {
  __typename?: 'CollectionCreator';
  address: Scalars['String'];
  collectionId: Scalars['UUID'];
  share: Scalars['Int'];
  verified: Scalars['Boolean'];
};

export type CollectionCreatorInput = {
  address: Scalars['String'];
  share: Scalars['Int'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type CollectionMint = {
  __typename?: 'CollectionMint';
  address: Scalars['String'];
  collection?: Maybe<Collection>;
  collectionId: Scalars['UUID'];
  createdAt: Scalars['NaiveDateTime'];
  createdBy: Scalars['UUID'];
  creationStatus: CreationStatus;
  id: Scalars['UUID'];
  owner: Scalars['String'];
};

export type CreateCredentialInput = {
  name: Scalars['String'];
  organization: Scalars['UUID'];
  projects: Array<Scalars['UUID']>;
  scopes: Array<Scalars['String']>;
};

export type CreateCredentialPayload = {
  __typename?: 'CreateCredentialPayload';
  accessToken: AccessToken;
  credential: Credential;
};

export type CreateCustomerInput = {
  project: Scalars['UUID'];
};

export type CreateCustomerPayload = {
  __typename?: 'CreateCustomerPayload';
  customer: Customer;
};

export type CreateCustomerWalletInput = {
  assetType: AssetType;
  customer: Scalars['UUID'];
};

export type CreateCustomerWalletPayload = {
  __typename?: 'CreateCustomerWalletPayload';
  wallet: Wallet;
};

export type CreateDropInput = {
  blockchain: Blockchain;
  creators: Array<CollectionCreatorInput>;
  endTime?: InputMaybe<Scalars['DateTime']>;
  metadataJson: MetadataJsonInput;
  price?: InputMaybe<Scalars['Int']>;
  project: Scalars['UUID'];
  sellerFeeBasisPoints?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  supply?: InputMaybe<Scalars['Int']>;
};

export type CreateDropPayload = {
  __typename?: 'CreateDropPayload';
  drop: Drop;
};

export type CreateOrganizationInput = {
  name: Scalars['String'];
  profileImageUrl?: InputMaybe<Scalars['String']>;
};

export type CreateOrganizationPayload = {
  __typename?: 'CreateOrganizationPayload';
  organization: Organization;
};

export type CreateProjectInput = {
  name: Scalars['String'];
  organization: Scalars['UUID'];
  profileImageUrl?: InputMaybe<Scalars['String']>;
};

export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  project: Project;
};

export type CreateWebhookInput = {
  description: Scalars['String'];
  endpoint: Scalars['String'];
  filterTypes: Array<FilterType>;
  organization: Scalars['UUID'];
  projects: Array<Scalars['UUID']>;
};

export type CreateWebhookPayload = {
  __typename?: 'CreateWebhookPayload';
  secret: Scalars['String'];
  webhook: Webhook;
};

export enum CreationStatus {
  Created = 'CREATED',
  Pending = 'PENDING'
}

export type Credential = {
  __typename?: 'Credential';
  audiences: Array<Scalars['String']>;
  clientId: Scalars['String'];
  createdAt: Scalars['NaiveDateTime'];
  createdBy?: Maybe<User>;
  createdById: Scalars['UUID'];
  name: Scalars['String'];
  organizationId: Scalars['UUID'];
  projects: Array<Project>;
  scopes: Array<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  createdAt: Scalars['NaiveDateTime'];
  id: Scalars['UUID'];
  projectId: Scalars['UUID'];
  treasury?: Maybe<Treasury>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type DeleteWebhookInput = {
  webhook: Scalars['UUID'];
};

export type DeleteWebhookPayload = {
  __typename?: 'DeleteWebhookPayload';
  webhook: Scalars['UUID'];
};

export type Drop = {
  __typename?: 'Drop';
  collection: Collection;
  createdAt: Scalars['NaiveDateTime'];
  createdById: Scalars['UUID'];
  creationStatus: CreationStatus;
  endTime?: Maybe<Scalars['NaiveDateTime']>;
  id: Scalars['UUID'];
  price: Scalars['Int'];
  projectId: Scalars['UUID'];
  startTime?: Maybe<Scalars['NaiveDateTime']>;
  status: DropStatus;
};

export enum DropStatus {
  Creating = 'CREATING',
  Expired = 'EXPIRED',
  Minted = 'MINTED',
  Minting = 'MINTING',
  Scheduled = 'SCHEDULED'
}

export type EventType = {
  __typename?: 'EventType';
  archived?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  schemas: Scalars['JSON'];
  updatedAt: Scalars['String'];
};

export enum FilterType {
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerTreasuryCreated = 'CUSTOMER_TREASURY_CREATED',
  CustomerWalletCreated = 'CUSTOMER_WALLET_CREATED',
  DropCreated = 'DROP_CREATED',
  DropMinted = 'DROP_MINTED',
  ProjectCreated = 'PROJECT_CREATED',
  ProjectWalletCreated = 'PROJECT_WALLET_CREATED'
}

export type Holder = {
  __typename?: 'Holder';
  address: Scalars['String'];
  collectionId: Scalars['UUID'];
  mints: Array<Scalars['String']>;
  owns: Scalars['Int'];
};

export type Invite = {
  __typename?: 'Invite';
  createdAt: Scalars['NaiveDateTime'];
  createdBy: Scalars['UUID'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  member?: Maybe<Member>;
  organization?: Maybe<Organization>;
  organizationId: Scalars['UUID'];
  status: InviteStatus;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type InviteMemberInput = {
  email: Scalars['String'];
  organization: Scalars['UUID'];
};

export enum InviteStatus {
  Accepted = 'ACCEPTED',
  Revoked = 'REVOKED',
  Sent = 'SENT'
}

export type Member = {
  __typename?: 'Member';
  createdAt: Scalars['NaiveDateTime'];
  id: Scalars['UUID'];
  invite?: Maybe<Invite>;
  inviteId: Scalars['UUID'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['UUID'];
  revokedAt?: Maybe<Scalars['NaiveDateTime']>;
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

export type MetadataJson = {
  __typename?: 'MetadataJson';
  animationUrl?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<MetadataJsonAttribute>>;
  collectionId: Scalars['UUID'];
  description: Scalars['String'];
  externalUrl?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  uri: Scalars['String'];
};

export type MetadataJsonAttribute = {
  __typename?: 'MetadataJsonAttribute';
  collectionId: Scalars['UUID'];
  id: Scalars['UUID'];
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type MetadataJsonAttributeInput = {
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type MetadataJsonCollectionInput = {
  family?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MetadataJsonFileInput = {
  fileType?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type MetadataJsonInput = {
  animationUrl?: InputMaybe<Scalars['String']>;
  attributes: Array<MetadataJsonAttributeInput>;
  collection?: InputMaybe<MetadataJsonCollectionInput>;
  description: Scalars['String'];
  externalUrl?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  properties?: InputMaybe<MetadataJsonPropertyInput>;
  symbol: Scalars['String'];
};

export type MetadataJsonPropertyInput = {
  category?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<MetadataJsonFileInput>>;
};

export type MintDropInput = {
  drop: Scalars['UUID'];
  recipient: Scalars['String'];
};

export type MintEditionPayload = {
  __typename?: 'MintEditionPayload';
  collectionMint: Model;
};

export type Model = {
  __typename?: 'Model';
  address: Scalars['String'];
  collectionId: Scalars['UUID'];
  createdAt: Scalars['NaiveDateTime'];
  createdBy: Scalars['UUID'];
  creationStatus: CreationStatus;
  id: Scalars['UUID'];
  owner: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  acceptInvite: AcceptInvitePayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  createCredential: CreateCredentialPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  createCustomer: CreateCustomerPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  createCustomerWallet: CreateCustomerWalletPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  createDrop: CreateDropPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if unable to save organization to the database
   */
  createOrganization: CreateOrganizationPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  createProject: CreateProjectPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  createWebhook: CreateWebhookPayload;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  deleteWebhook: DeleteWebhookPayload;
  forgeKey?: Maybe<Scalars['String']>;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  inviteMember: Invite;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  mintEdition: MintEditionPayload;
};


export type MutationAcceptInviteArgs = {
  input: AcceptInviteInput;
};


export type MutationCreateCredentialArgs = {
  input: CreateCredentialInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateCustomerWalletArgs = {
  input: CreateCustomerWalletInput;
};


export type MutationCreateDropArgs = {
  input: CreateDropInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateWebhookArgs = {
  input: CreateWebhookInput;
};


export type MutationDeleteWebhookArgs = {
  input: DeleteWebhookInput;
};


export type MutationForgeKeyArgs = {
  key: Scalars['ID'];
};


export type MutationInviteMemberArgs = {
  input: InviteMemberInput;
};


export type MutationMintEditionArgs = {
  input: MintDropInput;
};

export type Organization = {
  __typename?: 'Organization';
  createdAt: Scalars['NaiveDateTime'];
  credential: Credential;
  credentials: Array<Credential>;
  deactivatedAt?: Maybe<Scalars['NaiveDateTime']>;
  id: Scalars['UUID'];
  invites: Array<Invite>;
  members?: Maybe<Array<Member>>;
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  profileImageUrl?: Maybe<Scalars['String']>;
  projects: Array<Project>;
  webhook?: Maybe<Webhook>;
  webhooks?: Maybe<Array<Webhook>>;
};


export type OrganizationCredentialArgs = {
  clientId: Scalars['String'];
};


export type OrganizationCredentialsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type OrganizationInvitesArgs = {
  status?: InputMaybe<InviteStatus>;
};


export type OrganizationWebhookArgs = {
  id: Scalars['UUID'];
};

export type Owner = {
  __typename?: 'Owner';
  createdAt: Scalars['NaiveDateTime'];
  id: Scalars['UUID'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['UUID'];
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['NaiveDateTime'];
  customer?: Maybe<Customer>;
  customers?: Maybe<Array<Customer>>;
  deactivatedAt?: Maybe<Scalars['NaiveDateTime']>;
  drop?: Maybe<Drop>;
  drops?: Maybe<Array<Drop>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['UUID'];
  profileImageUrl?: Maybe<Scalars['String']>;
  treasury?: Maybe<Treasury>;
};


export type ProjectCustomerArgs = {
  id: Scalars['UUID'];
};


export type ProjectDropArgs = {
  id: Scalars['UUID'];
};

export type Query = {
  __typename?: 'Query';
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  eventTypes: Array<EventType>;
  hello?: Maybe<Scalars['String']>;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  invite?: Maybe<Invite>;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  organization?: Maybe<Organization>;
  /**
   * Res
   *
   * # Errors
   * This function fails if ...
   */
  project?: Maybe<Project>;
  user?: Maybe<User>;
};


export type QueryInviteArgs = {
  id: Scalars['UUID'];
};


export type QueryOrganizationArgs = {
  id: Scalars['UUID'];
};


export type QueryProjectArgs = {
  id: Scalars['UUID'];
};


export type QueryUserArgs = {
  id: Scalars['UUID'];
};

export type Treasury = {
  __typename?: 'Treasury';
  createdAt: Scalars['NaiveDateTime'];
  id: Scalars['UUID'];
  vaultId: Scalars['String'];
  wallet?: Maybe<Wallet>;
  wallets?: Maybe<Array<Wallet>>;
};


export type TreasuryWalletArgs = {
  assetType: AssetType;
};

export type User = {
  __typename?: 'User';
  affiliations: Array<Affiliation>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  assetId: AssetType;
  createdAt: Scalars['NaiveDateTime'];
  createdBy: Scalars['UUID'];
  legacyAddress: Scalars['String'];
  mints?: Maybe<Array<CollectionMint>>;
  removedAt?: Maybe<Scalars['NaiveDateTime']>;
  tag: Scalars['String'];
  treasuryId: Scalars['UUID'];
};

export type Webhook = {
  __typename?: 'Webhook';
  channels: Array<Scalars['String']>;
  createdAt: Scalars['NaiveDateTime'];
  createdBy?: Maybe<User>;
  createdById: Scalars['UUID'];
  description: Scalars['String'];
  endpointId: Scalars['String'];
  events: Array<Scalars['String']>;
  id: Scalars['UUID'];
  organizationId: Scalars['UUID'];
  projects: Array<Project>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
  url: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  Affiliation: ( Member ) | ( Owner );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AcceptInviteInput: AcceptInviteInput;
  AcceptInvitePayload: ResolverTypeWrapper<AcceptInvitePayload>;
  AccessToken: ResolverTypeWrapper<AccessToken>;
  Affiliation: ResolverTypeWrapper<ResolversUnionTypes['Affiliation']>;
  AssetType: AssetType;
  Blockchain: Blockchain;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionCreator: ResolverTypeWrapper<CollectionCreator>;
  CollectionCreatorInput: CollectionCreatorInput;
  CollectionMint: ResolverTypeWrapper<CollectionMint>;
  CreateCredentialInput: CreateCredentialInput;
  CreateCredentialPayload: ResolverTypeWrapper<CreateCredentialPayload>;
  CreateCustomerInput: CreateCustomerInput;
  CreateCustomerPayload: ResolverTypeWrapper<CreateCustomerPayload>;
  CreateCustomerWalletInput: CreateCustomerWalletInput;
  CreateCustomerWalletPayload: ResolverTypeWrapper<CreateCustomerWalletPayload>;
  CreateDropInput: CreateDropInput;
  CreateDropPayload: ResolverTypeWrapper<CreateDropPayload>;
  CreateOrganizationInput: CreateOrganizationInput;
  CreateOrganizationPayload: ResolverTypeWrapper<CreateOrganizationPayload>;
  CreateProjectInput: CreateProjectInput;
  CreateProjectPayload: ResolverTypeWrapper<CreateProjectPayload>;
  CreateWebhookInput: CreateWebhookInput;
  CreateWebhookPayload: ResolverTypeWrapper<CreateWebhookPayload>;
  CreationStatus: CreationStatus;
  Credential: ResolverTypeWrapper<Credential>;
  Customer: ResolverTypeWrapper<Customer>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteWebhookInput: DeleteWebhookInput;
  DeleteWebhookPayload: ResolverTypeWrapper<DeleteWebhookPayload>;
  Drop: ResolverTypeWrapper<Drop>;
  DropStatus: DropStatus;
  EventType: ResolverTypeWrapper<EventType>;
  FilterType: FilterType;
  Holder: ResolverTypeWrapper<Holder>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Invite: ResolverTypeWrapper<Invite>;
  InviteMemberInput: InviteMemberInput;
  InviteStatus: InviteStatus;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Member: ResolverTypeWrapper<Member>;
  MetadataJson: ResolverTypeWrapper<MetadataJson>;
  MetadataJsonAttribute: ResolverTypeWrapper<MetadataJsonAttribute>;
  MetadataJsonAttributeInput: MetadataJsonAttributeInput;
  MetadataJsonCollectionInput: MetadataJsonCollectionInput;
  MetadataJsonFileInput: MetadataJsonFileInput;
  MetadataJsonInput: MetadataJsonInput;
  MetadataJsonPropertyInput: MetadataJsonPropertyInput;
  MintDropInput: MintDropInput;
  MintEditionPayload: ResolverTypeWrapper<MintEditionPayload>;
  Model: ResolverTypeWrapper<Model>;
  Mutation: ResolverTypeWrapper<{}>;
  NaiveDateTime: ResolverTypeWrapper<Scalars['NaiveDateTime']>;
  Organization: ResolverTypeWrapper<Organization>;
  Owner: ResolverTypeWrapper<Owner>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Treasury: ResolverTypeWrapper<Treasury>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  User: ResolverTypeWrapper<Omit<User, 'affiliations'> & { affiliations: Array<ResolversTypes['Affiliation']> }>;
  Wallet: ResolverTypeWrapper<Wallet>;
  Webhook: ResolverTypeWrapper<Webhook>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AcceptInviteInput: AcceptInviteInput;
  AcceptInvitePayload: AcceptInvitePayload;
  AccessToken: AccessToken;
  Affiliation: ResolversUnionTypes['Affiliation'];
  Boolean: Scalars['Boolean'];
  Collection: Collection;
  CollectionCreator: CollectionCreator;
  CollectionCreatorInput: CollectionCreatorInput;
  CollectionMint: CollectionMint;
  CreateCredentialInput: CreateCredentialInput;
  CreateCredentialPayload: CreateCredentialPayload;
  CreateCustomerInput: CreateCustomerInput;
  CreateCustomerPayload: CreateCustomerPayload;
  CreateCustomerWalletInput: CreateCustomerWalletInput;
  CreateCustomerWalletPayload: CreateCustomerWalletPayload;
  CreateDropInput: CreateDropInput;
  CreateDropPayload: CreateDropPayload;
  CreateOrganizationInput: CreateOrganizationInput;
  CreateOrganizationPayload: CreateOrganizationPayload;
  CreateProjectInput: CreateProjectInput;
  CreateProjectPayload: CreateProjectPayload;
  CreateWebhookInput: CreateWebhookInput;
  CreateWebhookPayload: CreateWebhookPayload;
  Credential: Credential;
  Customer: Customer;
  DateTime: Scalars['DateTime'];
  DeleteWebhookInput: DeleteWebhookInput;
  DeleteWebhookPayload: DeleteWebhookPayload;
  Drop: Drop;
  EventType: EventType;
  Holder: Holder;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Invite: Invite;
  InviteMemberInput: InviteMemberInput;
  JSON: Scalars['JSON'];
  Member: Member;
  MetadataJson: MetadataJson;
  MetadataJsonAttribute: MetadataJsonAttribute;
  MetadataJsonAttributeInput: MetadataJsonAttributeInput;
  MetadataJsonCollectionInput: MetadataJsonCollectionInput;
  MetadataJsonFileInput: MetadataJsonFileInput;
  MetadataJsonInput: MetadataJsonInput;
  MetadataJsonPropertyInput: MetadataJsonPropertyInput;
  MintDropInput: MintDropInput;
  MintEditionPayload: MintEditionPayload;
  Model: Model;
  Mutation: {};
  NaiveDateTime: Scalars['NaiveDateTime'];
  Organization: Organization;
  Owner: Owner;
  Project: Project;
  Query: {};
  String: Scalars['String'];
  Treasury: Treasury;
  UUID: Scalars['UUID'];
  User: Omit<User, 'affiliations'> & { affiliations: Array<ResolversParentTypes['Affiliation']> };
  Wallet: Wallet;
  Webhook: Webhook;
};

export type DeferDirectiveArgs = {
  if?: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
};

export type DeferDirectiveResolver<Result, Parent, ContextType = any, Args = DeferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AcceptInvitePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AcceptInvitePayload'] = ResolversParentTypes['AcceptInvitePayload']> = {
  invite?: Resolver<ResolversTypes['Invite'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessToken'] = ResolversParentTypes['AccessToken']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  tokenType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Affiliation'] = ResolversParentTypes['Affiliation']> = {
  __resolveType: TypeResolveFn<'Member' | 'Owner', ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockchain?: Resolver<ResolversTypes['Blockchain'], ParentType, ContextType>;
  creationStatus?: Resolver<ResolversTypes['CreationStatus'], ParentType, ContextType>;
  creators?: Resolver<Maybe<Array<ResolversTypes['CollectionCreator']>>, ParentType, ContextType>;
  holders?: Resolver<Maybe<Array<ResolversTypes['Holder']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  metadataJson?: Resolver<Maybe<ResolversTypes['MetadataJson']>, ParentType, ContextType>;
  mints?: Resolver<Maybe<Array<ResolversTypes['CollectionMint']>>, ParentType, ContextType>;
  supply?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalMints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionCreatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionCreator'] = ResolversParentTypes['CollectionCreator']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  share?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionMintResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionMint'] = ResolversParentTypes['CollectionMint']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  creationStatus?: Resolver<ResolversTypes['CreationStatus'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCredentialPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCredentialPayload'] = ResolversParentTypes['CreateCredentialPayload']> = {
  accessToken?: Resolver<ResolversTypes['AccessToken'], ParentType, ContextType>;
  credential?: Resolver<ResolversTypes['Credential'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCustomerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCustomerPayload'] = ResolversParentTypes['CreateCustomerPayload']> = {
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCustomerWalletPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCustomerWalletPayload'] = ResolversParentTypes['CreateCustomerWalletPayload']> = {
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDropPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateDropPayload'] = ResolversParentTypes['CreateDropPayload']> = {
  drop?: Resolver<ResolversTypes['Drop'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganizationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrganizationPayload'] = ResolversParentTypes['CreateOrganizationPayload']> = {
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProjectPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProjectPayload'] = ResolversParentTypes['CreateProjectPayload']> = {
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateWebhookPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateWebhookPayload'] = ResolversParentTypes['CreateWebhookPayload']> = {
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  webhook?: Resolver<ResolversTypes['Webhook'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CredentialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Credential'] = ResolversParentTypes['Credential']> = {
  audiences?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  clientId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdById?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  scopes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  treasury?: Resolver<Maybe<ResolversTypes['Treasury']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteWebhookPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteWebhookPayload'] = ResolversParentTypes['DeleteWebhookPayload']> = {
  webhook?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DropResolvers<ContextType = any, ParentType extends ResolversParentTypes['Drop'] = ResolversParentTypes['Drop']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdById?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  creationStatus?: Resolver<ResolversTypes['CreationStatus'], ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DropStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventType'] = ResolversParentTypes['EventType']> = {
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemas?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Holder'] = ResolversParentTypes['Holder']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  mints?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  owns?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InviteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invite'] = ResolversParentTypes['Invite']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['InviteStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType>;
  inviteId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  revokedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataJsonResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataJson'] = ResolversParentTypes['MetadataJson']> = {
  animationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['MetadataJsonAttribute']>>, ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataJsonAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataJsonAttribute'] = ResolversParentTypes['MetadataJsonAttribute']> = {
  collectionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  traitType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintEditionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MintEditionPayload'] = ResolversParentTypes['MintEditionPayload']> = {
  collectionMint?: Resolver<ResolversTypes['Model'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  creationStatus?: Resolver<ResolversTypes['CreationStatus'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  acceptInvite?: Resolver<ResolversTypes['AcceptInvitePayload'], ParentType, ContextType, RequireFields<MutationAcceptInviteArgs, 'input'>>;
  createCredential?: Resolver<ResolversTypes['CreateCredentialPayload'], ParentType, ContextType, RequireFields<MutationCreateCredentialArgs, 'input'>>;
  createCustomer?: Resolver<ResolversTypes['CreateCustomerPayload'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createCustomerWallet?: Resolver<ResolversTypes['CreateCustomerWalletPayload'], ParentType, ContextType, RequireFields<MutationCreateCustomerWalletArgs, 'input'>>;
  createDrop?: Resolver<ResolversTypes['CreateDropPayload'], ParentType, ContextType, RequireFields<MutationCreateDropArgs, 'input'>>;
  createOrganization?: Resolver<ResolversTypes['CreateOrganizationPayload'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'input'>>;
  createProject?: Resolver<ResolversTypes['CreateProjectPayload'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'input'>>;
  createWebhook?: Resolver<ResolversTypes['CreateWebhookPayload'], ParentType, ContextType, RequireFields<MutationCreateWebhookArgs, 'input'>>;
  deleteWebhook?: Resolver<ResolversTypes['DeleteWebhookPayload'], ParentType, ContextType, RequireFields<MutationDeleteWebhookArgs, 'input'>>;
  forgeKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationForgeKeyArgs, 'key'>>;
  inviteMember?: Resolver<ResolversTypes['Invite'], ParentType, ContextType, RequireFields<MutationInviteMemberArgs, 'input'>>;
  mintEdition?: Resolver<ResolversTypes['MintEditionPayload'], ParentType, ContextType, RequireFields<MutationMintEditionArgs, 'input'>>;
};

export interface NaiveDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NaiveDateTime'], any> {
  name: 'NaiveDateTime';
}

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  credential?: Resolver<ResolversTypes['Credential'], ParentType, ContextType, RequireFields<OrganizationCredentialArgs, 'clientId'>>;
  credentials?: Resolver<Array<ResolversTypes['Credential']>, ParentType, ContextType, Partial<OrganizationCredentialsArgs>>;
  deactivatedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  invites?: Resolver<Array<ResolversTypes['Invite']>, ParentType, ContextType, Partial<OrganizationInvitesArgs>>;
  members?: Resolver<Maybe<Array<ResolversTypes['Member']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  profileImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  webhook?: Resolver<Maybe<ResolversTypes['Webhook']>, ParentType, ContextType, RequireFields<OrganizationWebhookArgs, 'id'>>;
  webhooks?: Resolver<Maybe<Array<ResolversTypes['Webhook']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<ProjectCustomerArgs, 'id'>>;
  customers?: Resolver<Maybe<Array<ResolversTypes['Customer']>>, ParentType, ContextType>;
  deactivatedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  drop?: Resolver<Maybe<ResolversTypes['Drop']>, ParentType, ContextType, RequireFields<ProjectDropArgs, 'id'>>;
  drops?: Resolver<Maybe<Array<ResolversTypes['Drop']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  profileImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  treasury?: Resolver<Maybe<ResolversTypes['Treasury']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  eventTypes?: Resolver<Array<ResolversTypes['EventType']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<QueryInviteArgs, 'id'>>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
};

export type TreasuryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Treasury'] = ResolversParentTypes['Treasury']> = {
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  vaultId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType, RequireFields<TreasuryWalletArgs, 'assetType'>>;
  wallets?: Resolver<Maybe<Array<ResolversTypes['Wallet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  affiliations?: Resolver<Array<ResolversTypes['Affiliation']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  assetId?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  legacyAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mints?: Resolver<Maybe<Array<ResolversTypes['CollectionMint']>>, ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treasuryId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebhookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Webhook'] = ResolversParentTypes['Webhook']> = {
  channels?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['NaiveDateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdById?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endpointId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['NaiveDateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AcceptInvitePayload?: AcceptInvitePayloadResolvers<ContextType>;
  AccessToken?: AccessTokenResolvers<ContextType>;
  Affiliation?: AffiliationResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionCreator?: CollectionCreatorResolvers<ContextType>;
  CollectionMint?: CollectionMintResolvers<ContextType>;
  CreateCredentialPayload?: CreateCredentialPayloadResolvers<ContextType>;
  CreateCustomerPayload?: CreateCustomerPayloadResolvers<ContextType>;
  CreateCustomerWalletPayload?: CreateCustomerWalletPayloadResolvers<ContextType>;
  CreateDropPayload?: CreateDropPayloadResolvers<ContextType>;
  CreateOrganizationPayload?: CreateOrganizationPayloadResolvers<ContextType>;
  CreateProjectPayload?: CreateProjectPayloadResolvers<ContextType>;
  CreateWebhookPayload?: CreateWebhookPayloadResolvers<ContextType>;
  Credential?: CredentialResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteWebhookPayload?: DeleteWebhookPayloadResolvers<ContextType>;
  Drop?: DropResolvers<ContextType>;
  EventType?: EventTypeResolvers<ContextType>;
  Holder?: HolderResolvers<ContextType>;
  Invite?: InviteResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Member?: MemberResolvers<ContextType>;
  MetadataJson?: MetadataJsonResolvers<ContextType>;
  MetadataJsonAttribute?: MetadataJsonAttributeResolvers<ContextType>;
  MintEditionPayload?: MintEditionPayloadResolvers<ContextType>;
  Model?: ModelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NaiveDateTime?: GraphQLScalarType;
  Organization?: OrganizationResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Treasury?: TreasuryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
  Webhook?: WebhookResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  defer?: DeferDirectiveResolver<any, any, ContextType>;
};

module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMemory {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Memory {
  id: ID!
  title: String!
  quote: String!
  imageUrl: String!
  authorName: String!
}

type MemoryConnection {
  pageInfo: PageInfo!
  edges: [MemoryEdge]!
  aggregate: AggregateMemory!
}

input MemoryCreateInput {
  id: ID
  title: String!
  quote: String!
  imageUrl: String!
  authorName: String!
}

type MemoryEdge {
  node: Memory!
  cursor: String!
}

enum MemoryOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  quote_ASC
  quote_DESC
  imageUrl_ASC
  imageUrl_DESC
  authorName_ASC
  authorName_DESC
}

type MemoryPreviousValues {
  id: ID!
  title: String!
  quote: String!
  imageUrl: String!
  authorName: String!
}

type MemorySubscriptionPayload {
  mutation: MutationType!
  node: Memory
  updatedFields: [String!]
  previousValues: MemoryPreviousValues
}

input MemorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemoryWhereInput
  AND: [MemorySubscriptionWhereInput!]
  OR: [MemorySubscriptionWhereInput!]
  NOT: [MemorySubscriptionWhereInput!]
}

input MemoryUpdateInput {
  title: String
  quote: String
  imageUrl: String
  authorName: String
}

input MemoryUpdateManyMutationInput {
  title: String
  quote: String
  imageUrl: String
  authorName: String
}

input MemoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  quote: String
  quote_not: String
  quote_in: [String!]
  quote_not_in: [String!]
  quote_lt: String
  quote_lte: String
  quote_gt: String
  quote_gte: String
  quote_contains: String
  quote_not_contains: String
  quote_starts_with: String
  quote_not_starts_with: String
  quote_ends_with: String
  quote_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  authorName: String
  authorName_not: String
  authorName_in: [String!]
  authorName_not_in: [String!]
  authorName_lt: String
  authorName_lte: String
  authorName_gt: String
  authorName_gte: String
  authorName_contains: String
  authorName_not_contains: String
  authorName_starts_with: String
  authorName_not_starts_with: String
  authorName_ends_with: String
  authorName_not_ends_with: String
  AND: [MemoryWhereInput!]
  OR: [MemoryWhereInput!]
  NOT: [MemoryWhereInput!]
}

input MemoryWhereUniqueInput {
  id: ID
}

type Mutation {
  createMemory(data: MemoryCreateInput!): Memory!
  updateMemory(data: MemoryUpdateInput!, where: MemoryWhereUniqueInput!): Memory
  updateManyMemories(data: MemoryUpdateManyMutationInput!, where: MemoryWhereInput): BatchPayload!
  upsertMemory(where: MemoryWhereUniqueInput!, create: MemoryCreateInput!, update: MemoryUpdateInput!): Memory!
  deleteMemory(where: MemoryWhereUniqueInput!): Memory
  deleteManyMemories(where: MemoryWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  memory(where: MemoryWhereUniqueInput!): Memory
  memories(where: MemoryWhereInput, orderBy: MemoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Memory]!
  memoriesConnection(where: MemoryWhereInput, orderBy: MemoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemoryConnection!
  node(id: ID!): Node
}

type Subscription {
  memory(where: MemorySubscriptionWhereInput): MemorySubscriptionPayload
}
`
      }
    
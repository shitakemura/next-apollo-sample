## Next Apollo Sample App

#### graphql フォルダ

- graphql
  - dist
    - generated-client.ts -> GraphQL codegen で生成した Client 用の型定義
    - generated-server.ts -> GraphQL codegen で生成した Server 用の型定義
  - codegen-client.yaml -> GraphQL codegen Client 用の設定
  - codegen-server.yaml -> GraphQL codegen Server 用の設定
  - mutation.graphql -> Client から呼び出す Mutation の定義
  - query.graphql -> Client から呼び出す Query の定義
  - schema.graphql -> GraphQL スキーマ定義

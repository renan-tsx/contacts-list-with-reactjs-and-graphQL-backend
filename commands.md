# Commands

```
yarn init -y
yarn add apollo-server graphql
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier -D
yarn add sucrase -D
yarn add nodemon -D
yarn add json-server
```

# json-server

Resources
http://localhost:3000/users
http://localhost:3000/phones
http://localhost:3000/contactType

Filters

Filter for ID
http://localhost:3000/users/101

Ordenation
http://localhost:3000/users/?sort=indexRef&order=asc
http://localhost:3000/users/?sort=indexRef&order=desc

Pagination
http://localhost:3000/users/?start=0&limit=1

Embad
http://localhost:3000/users/?embed=phones

Expand
http://localhost:3000/Phones/?\_expand=user

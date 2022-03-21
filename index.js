const init = require('./tracer')
init('graphql-service')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const { USERS_JSON, LOCATIONS_JSON } = require('./data')
const app = express()
class Users {
  constructor(user) {
    Object.assign(this, user)
    this.location = this.location
  }

  location() {
    return LOCATIONS_JSON[this.pincode]
  }
}

const schema = buildSchema(`
  type Query{
    userById(id:Int!):Users,
  }

  type Users {
    id: Int,
    email: String,
    name: String,
    pincode: Int,
    location: Location
  }
  type Location{
    city: String,
    area: String
  }
`)

const root = {
  userById: (args, { ...rest }) => {
    let data = USERS_JSON.find((item) => item.id === args.id)
    return new Users(data)
  },
}
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

app.listen(4000)

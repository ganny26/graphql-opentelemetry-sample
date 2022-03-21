const USERS_JSON = [
  {
    id: 1,
    email: 'arun@signoz.io',
    name: 'arun',
    pincode: 560034,
  },
  {
    id: 2,
    email: 'selva@signoz.io',
    name: 'selva',
    pincode: 560068,
  },
  {
    id: 3,
    email: 'ashu@signoz.io',
    name: 'ashu',
    pincode: 560022,
  },
]

const LOCATIONS_JSON = {
  560034: {
    city: 'Banglore',
    area: 'Koramangla',
  },
  560068: {
    city: 'Banglore',
    area: 'BTM Layout',
  },
  560022: {
    city: 'Banglore',
    area: 'Yeswanthpur',
  },
}

module.exports = {
  LOCATIONS_JSON,
  USERS_JSON,
}

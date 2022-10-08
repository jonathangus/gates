# Steps

0. `composedb composite:create gates.graphql --output=gates-composite.json --did-private-key=b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921 -c http://0.0.0.0:7007`

1. `composedb composite:deploy gates-composite.json --did-private-key=b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921 -c http://0.0.0.0:7007`

2. `composedb composite:compile gates-composite.json runtime-composite.json --did-private-key=b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921 -c http://0.0.0.0:7007`

3. `composedb graphql:server --graphiql --port=5001 runtime-composite.json --did-private-key=b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921 -c http://0.0.0.0:7007`
from graphqlclient import GraphQLClient
import json
# Crea una instancia de GraphQLClient y configura la URL del servidor GraphQL
client = GraphQLClient('http://localhost:2000/')
# Define la consulta GraphQL utilizando la clase gql
query = '''
  query {
    heroes {
      name
      archenemy {
        name
      }
    }
  }
'''
# Envía la consulta al servidor GraphQL utilizando el cliente GraphQL
result = client.execute(query)

# Muestra la respuesta del servidor
print( json.loads(result))



# Muestra el resultadoprint(hero_dat)

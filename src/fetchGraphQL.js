// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://key-grizzly-59.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': ${HASURA_ADMIN_SECRET},
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
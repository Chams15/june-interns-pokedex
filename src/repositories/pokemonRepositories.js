// Example repository function
async function getPokemonByNameOrId(nameOrId) {
  // Make HTTP request to PokeAPI
  const response = await axios.get(`${BASE_URL}/pokemon/${nameOrId}`);
  return response.data;
}
const { get, create } = require("../../dataAccessLayer/users/users.dal");

async function getUsers() {
  return await get();
}

async function createUser(data) {
  const userCreated = await create(data);
  return userCreated;
}
module.exports = { getUsers, createUser };

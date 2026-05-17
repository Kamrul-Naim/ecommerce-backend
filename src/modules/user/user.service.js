import User from "./user.model.js";

const createUserIntoDB = async (payload) => {
   const user = await User.create(payload);

   return user;
};

export default {
   createUserIntoDB,
};
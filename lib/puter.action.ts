import puter from "@heyputer/puter.js";

export const signIn = async () => await puter.auth.signIn();

export const signOut = async () => puter.auth.signOut();

export const getCurrentUser = async () => {
  try {
    return await puter.auth.getUser();
  } catch {
    return null;
  }
};

// import puter from "@heyputer/puter.js";

// export const signIn = async () => {
//   if (typeof window === "undefined") return null;
//   return await puter.auth.signIn();
// };

// export const signOut = async () => {
//   if (typeof window === "undefined") return;
//   return await puter.auth.signOut(); // ← added await
// };

// export const getCurrentUser = async () => {
//   if (typeof window === "undefined") return null;
//   try {
//     return await puter.auth.getUser();
//   } catch {
//     return null;
//   }
// };

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const getUserByEmail = async (email) => {
  const data = await axios.get(
    `https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/user/${email}`
  );
  return data.data;
};
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.AUTH_KEY,
  callbacks: {
    async signIn({ user, profile }) {
      const userAPI = await getUserByEmail(profile.email);

      if (userAPI !== null) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session }) {
      const userAPI = await getUserByEmail(session.user.email);
      const newSessionData = { ...session, ...userAPI };
      return newSessionData;
    },
  },
});

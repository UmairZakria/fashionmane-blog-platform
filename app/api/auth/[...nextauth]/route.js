import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/User";
import connectMongo from "@/lib/connectMongo";
import bcrypt from 'bcryptjs';


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongo();

        // Find user by email
        const user = await User.findOne({ email: credentials.email });
        console.log(user)
        console.log('------------------')
        console.log(credentials)
        if (!user) {
          throw new Error("Invalid email");
        }

        const pass = credentials.password === user.password
        if (!pass) {
          throw new Error("Invalid password");
        }

        return { id: user._id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/Login",  
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: 'Rathat4321',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { addUser } from "@/service/user";
export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
		}),
		// ...add more providers here
	],
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async signIn({ user: { name, id, email, image } }) {
			if (!email) {
				return false; //이메일 없으면 로그인하지마
			}
			addUser({
				id,
				email,
				name: name || "",
				image,
				username: email.split("@")[0] || "",
			});
			return true;
		},
		async session({ session }) {
			const user = session?.user;
			if (user) {
				session.user = {
					...user,
					username: user.email?.split("@")[0] || "",
				};
			}
			return session; // The return type will match the one returned in `useSession()`
		},
	},
};
export default NextAuth(authOptions);

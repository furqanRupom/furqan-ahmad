import { db } from "@/server/db";
import { User } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import bcrypt from "bcrypt"



export const options: NextAuthOptions = {
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials: {

            },
            async authorize(credentials, req): Promise<User | null> {
                const { email, password } = credentials as {
                    email: string,
                    password: string
                };
                
                try {
                    const user = await db.user.findUnique({
                        where: {
                            email
                        },
                    });

                 

                    if (!user) {
                        return null
                    }

                    const matchedPassword = await bcrypt.compare(password, user.password);
                    if (!matchedPassword) {
                        throw new Error("Password did not matched !");
                    }
                        console.log(user)
                    return user;

                } catch (error) {
                    return null;
                }
            },


        }),

    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login",
        signOut: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET as string,

}
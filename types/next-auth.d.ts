import NextAuth, { DefaultSession, DefaultUser, DefaultJWT } from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        refreshToken?: string;
        expiresAt?: number;
    }

    interface User extends DefaultUser {
        accessToken?: string;
        refreshToken?: string;
        expiresIn?: number;
        email?: string
    }

    interface JWT extends DefaultJWT {
        accessToken?: string;
        refreshToken?: string;
        expiresAt?: number;
    }
}

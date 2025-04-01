import CognitoProvider from "next-auth/providers/cognito";
export const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CognitoProvider({
            name: "LetterNest",
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
            style: { logo: '', bg: '#fff', text: '#006400' },
            authorization: {
              params: {
                scope: "openid https://14eh7n1b70.execute-api.us-east-1.amazonaws.com/dev/api.access",
              },
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 5
    },
    callbacks: {
        async jwt({account, token}){
            // console.log("This is the account", account)
            // console.log("this is token", token)
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.expiresAt = account.expires_at
            }
            if (Date.now() >= token.expiresAt * 1000) {
                console.log("TOKEN IS NOT CHILLING, Refreshing....");
                const response = await refreshAccessToken(token);
                if (!response.accessToken){
                    console.log(response.error);
                    return null;
                }
                token.accessToken = response.accessToken;
                token.expiresAt = response.expiresAt;
            }
            return token;

        },
        async session({ session, token }) {
    
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.expiresAt = token.expiresAt;

            return session;
        }
    }
}


async function refreshAccessToken(token) {
    try {
        console.log("this is token", token)

        const url = `${process.env.COGNITO_DOMAIN}/oauth2/token`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                'refresh_token': token.refreshToken,
                'client_secret': process.env.COGNITO_CLIENT_SECRET,
                'client_id': process.env.COGNITO_CLIENT_ID
            }),
        });

        const refreshedTokens = await response.json()
        console.log("Here is our response, ", refreshedTokens)

        if (!response.ok || !refreshedTokens || !('access_token' in refreshedTokens)) {
            console.error('Failed to refresh access token.', refreshedTokens);
            throw refreshedTokens
        }

        const newAccessToken = refreshedTokens['access_token'];
        if(!newAccessToken){
            console.error("Failed to get a new access token.");
        }

        let newRToken = refreshedTokens.refresh_token;

        return {
            'accessToken': newAccessToken,
            'expiresAt': Date.now() + refreshedTokens.expires_in * 1000,
            'refreshToken': newRToken, // Fall back to old refresh token
        }
    } catch (error) {
        console.error('RefreshAccessTokenError', error)

        return {
            ...token,
            error: 'RefreshAccessTokenError',
        }
    }
}

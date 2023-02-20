import { signInWithEmailAndPassword, UserCredential, User, signOut as signOutUser } from "firebase/auth"
import { auth } from "../.."

const authServiceDef = () => {
    const signIn = async (email: string, password: string): Promise<User | null> => {
        try {
            const authResponse: UserCredential = await signInWithEmailAndPassword(auth, email, password)
            return authResponse.user;
        } catch (error) {
            console.log(error);
            return null
        }
    }

    const signOut = async () => {
        try {
            await signOutUser(auth)
            return 
        } catch (error) {
            console.log(error)
        }
    }

    return {
        signIn,
        signOut
    }
}

export const authService = authServiceDef()
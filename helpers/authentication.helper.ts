import STATIC_USERS from '@/mocks/static-users';
import type {AuthenticatedUser, User} from "~/types/User.type";
class AuthenticationHelper {
	
	public static getUserByCredentials(email: string, password?: string): User | AuthenticatedUser | undefined {
		try {
			console.log('getUserByCredentials', email, password);
		
			const user: User | null = STATIC_USERS.find(u => u.email === email) ?? null;
		
			if (!user) return undefined;
			
			if (!password) {
				return {
					email: user.email,
					name: user.name,
				} as User;
			}
			
			return user;
		} catch (e) {
			console.log('error', e);
			return undefined;
		}
	}
	
}

export default AuthenticationHelper;

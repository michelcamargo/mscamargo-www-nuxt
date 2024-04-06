import STATIC_USERS from '@/mocks/static-users';

const greetingsPlugin = (userId: string) => {
	const userInformation = STATIC_USERS.find(u => u.id === userId)
	
	console.log(`Olá, ${userInformation ? userInformation.name : 'visitante'}!`);
}

export default defineNuxtPlugin(appContext => {
	return {
		provide: {
			greetings: greetingsPlugin,
		}
	}
});

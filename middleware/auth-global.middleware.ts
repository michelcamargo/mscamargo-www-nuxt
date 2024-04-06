import STATIC_USERS from "~/mocks/static-users";
import authGlobal from "~/helpers/auth-global.helper";

export default defineNuxtRouteMiddleware((to, from) => {
	const user = STATIC_USERS[1];
	
	if (!user) {
		return navigateTo('/login');
		// redirect to login
	}
	
	const userMatchRouteRequisites = authGlobal.matchRouteRequisites(user, to);
	
	if (!userMatchRouteRequisites) {
		return navigateTo('/login');
	}
})

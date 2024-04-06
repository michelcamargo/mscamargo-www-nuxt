export default defineNuxtPlugin((appContext) => {
	appContext.vueApp.directive('focus', {
		mounted (el) {
			el.focus()
		},
		getSSRProps (binding, vnode) {
			return {}
		}
	})
})

export type User = {
	name: string,
	email: string,
}

export type AuthFormUser = User & {
  secret?: string,
}

export type AuthenticatedUser = User & {
	id: string,
	perm: number[],
	token: string,
}

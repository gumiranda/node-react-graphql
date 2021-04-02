import { LoadUsersRepository } from '@/data/contracts';

import { users } from '@/infra/data-sources';

export class FakeUserRepository implements LoadUsersRepository {
	async loadUsers(name: string): Promise<any[]> {
		const appendedNameQuery = name.toUpperCase().split(' ');
		const usersFiltered = users.filter((user) => {
			const appendedNameUser = user?.name
				?.replace(/[^A-Za-z0-9_'-]/gi, '')
				.toUpperCase();
			if (appendedNameQuery.some((v) => appendedNameUser.includes(v))) {
				return user;
			}
		});
		return usersFiltered;
	}
}

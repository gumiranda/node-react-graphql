import { LoadUsersRepository } from '@/data/contracts';

import { user } from '@/infra/data-sources';

export class FakeUserRepository implements LoadUsersRepository {
	async loadUsers(): Promise<any[]> {
		return user;
	}
}

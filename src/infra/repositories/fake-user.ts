import { LoadUsersRepository } from '@/data/contracts';

import { ranking } from '@/infra/data-sources';

export class FakeRankingRepository implements LoadUsersRepository {
	async loadUsers(): Promise<any[]> {
		return ranking;
	}
}

import { LoadLastRankingRepository } from '@/data/contracts';

import { ranking } from '@/infra/data-sources';

export class FakeRankingRepository implements LoadLastRankingRepository {
	async loadLastRanking(): Promise<any[]> {
		return ranking;
	}
}

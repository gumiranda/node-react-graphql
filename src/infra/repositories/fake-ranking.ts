import { LoadLastRankingRepository } from '@/data/contracts';
import { RankingScoreModel } from '@/data/models';
import { ranking } from '@/infra/data-sources';

export class FakeRankingRepository implements LoadLastRankingRepository {
	async loadLastRanking(): Promise<RankingScoreModel[]> {}
}

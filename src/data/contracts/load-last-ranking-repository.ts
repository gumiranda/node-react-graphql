import { RankingScoreModel } from '@/data/models/ranking-score';

export interface LoadLastRankingRepository {
	loadLastRanking: () => Promise<RankingScoreModel[]>;
}

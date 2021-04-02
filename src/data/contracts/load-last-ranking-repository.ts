import { RankingScoreModel } from '@/data/models';

export interface LoadUsersRepository {
	loadUsers: () => Promise<RankingScoreModel[]>;
}

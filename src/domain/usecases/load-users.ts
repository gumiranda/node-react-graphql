import { RankingScore } from '@/domain/entities';

export interface LoadUsers {
	load: () => Promise<RankingScore[]>;
}

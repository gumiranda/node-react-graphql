import { LoadLastRankingController } from '@/presentation/controllers';
import { LastRankingLoaderService } from '@/data/services';
import { FakeRankingRepository } from '@/infra/repositories';
import { Controller } from '@/presentation/contracts';

export const makeLoadLastRankingController = (): Controller => {
	const repo = new FakeRankingRepository();
	const loader = new LastRankingLoaderService(repo);
	const controller = new LoadLastRankingController(loader);
	return controller;
};

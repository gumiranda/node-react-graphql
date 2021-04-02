import {
	Controller,
	HttpResponse,
	serverError,
	ok,
} from '@/presentation/contracts';
import { LastRankingLoader } from '@/domain/usecases';
import { RankingScore } from '../../domain/entities/ranking-score';

export class LoadLastRankingController implements Controller {
	constructor(private readonly lastRankingLoader: LastRankingLoader) {}

	async handle(): Promise<HttpResponse<RankingScore[]>> {
		try {
			const ranking = await this.lastRankingLoader.load();
			return ok(ranking);
		} catch (error) {
			return serverError(error);
		}
	}
}

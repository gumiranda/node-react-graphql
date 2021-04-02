import { adaptResolver } from '@/main/adapters';
import { makeLoadUsersController } from '@/main/factories';

export default {
	Query: {
		lastRanking: async (): Promise<any> =>
			adaptResolver(makeLoadUsersController()),
	},
};

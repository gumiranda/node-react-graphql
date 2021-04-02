import { adaptResolver } from '@/main/adapters';
import { makeLoadUsersController } from '@/main/factories';

export default {
	Query: {
		lastUser: async (): Promise<any> =>
			adaptResolver(makeLoadUsersController()),
	},
};

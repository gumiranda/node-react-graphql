import { adaptResolver } from '@/main/adapters';
import { makeLoadUsersController } from '@/main/factories';

export default {
	Query: {
		listUser: async (): Promise<any> =>
			adaptResolver(makeLoadUsersController()),
	},
};

import { adaptResolver } from '@/main/adapters';
import { makeLoadUsersController } from '@/main/factories';

export default {
	Query: {
		list: async (): Promise<any> => {
			adaptResolver(makeLoadUsersController(''));
		},
	},
	// User: {
	// 	id: (user) => user._id,
	// },
};

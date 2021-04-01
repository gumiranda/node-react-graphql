import { adaptResolver } from '@/main/adapters';
import { makeLoadUsersController } from '@/main/factories';

export default {
	Query: {
		list: async (_, args): Promise<any> => {
			const { name } = await args;
			adaptResolver(makeLoadUsersController(name));
		},
	},
	User: {
		id: (user) => user._id,
	},
};

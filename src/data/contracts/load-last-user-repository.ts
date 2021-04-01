import { UserModel } from '@/data/models';

export interface LoadLastUserRepository {
	loadLastUser: () => Promise<UserModel[]>;
}

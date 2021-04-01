import { UserModel } from '@/data/models';

export interface LoadUsersRepository {
	loadUsers: () => Promise<UserModel[]>;
}

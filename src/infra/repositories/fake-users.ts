import { LoadUsersRepository } from '@/data/contracts';
import { UserModel } from '@/data/models';
import { users } from '@/infra/data-sources';

export class FakeUsersRepository implements LoadUsersRepository {
	async loadUsers(): Promise<any[]> {
		return users;
		// return users.map((item) => ({
		// 	...item,
		// 	friends: item.friends.map((friend) => ({
		// 		...friend,
		// 		friends: [{ ...friend, greeting }],
		// 		greeting: 'a',
		// 	})),
		// }));
	}
}

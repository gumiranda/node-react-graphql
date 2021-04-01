import { User } from '@/domain/entities';
import { LoadUsers } from '@/domain/usecases';
import { UserUnavailableError } from '@/domain/errors';
import { LoadUsersRepository } from '@/data/contracts';

export class LoadUsersService implements LoadUsers {
	constructor(private readonly loadUsersRepository: LoadUsersRepository) {}

	async load(): Promise<User[]> {
		const users = this.loadUsersRepository.loadUsers();
		if (!users) {
			throw new UserUnavailableError();
		}
		return users;
	}
}

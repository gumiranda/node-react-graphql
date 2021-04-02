import { User } from '@/domain/entities';
import { LoadUsers } from '@/domain/usecases';
import { UserUnavailableError } from '@/domain/errors';
import { LoadUsersRepository } from '@/data/contracts';

export class LoadUsersService implements LoadUsers {
	constructor(private readonly loadUsersRepository: LoadUsersRepository) {}

	async load(): Promise<User[]> {
		if (new Date().getHours() > 22) {
			throw new UserUnavailableError();
		}
		return this.loadUsersRepository.loadUsers();
	}
}

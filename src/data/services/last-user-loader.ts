import { User } from '@/domain/entities';
import { LastUserLoader } from '@/domain/usecases';
import { UserUnavailableError } from '@/domain/errors';
import { LoadLastUserRepository } from '@/data/contracts';

export class LastUserLoaderService implements LastUserLoader {
	constructor(
		private readonly loadLastUserRepository: LoadLastUserRepository,
	) {}

	async load(): Promise<User[]> {
		if (new Date().getHours() > 22) {
			throw new UserUnavailableError();
		}
		return this.loadLastUserRepository.loadLastUser();
	}
}

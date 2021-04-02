import {
	Controller,
	HttpResponse,
	serverError,
	ok,
} from '@/presentation/contracts';
import { LoadUsers } from '@/domain/usecases';
import { User } from '../../domain/entities/user';

export class LoadUsersController implements Controller {
	constructor(private readonly loadUsers: LoadUsers) {}

	async handle(): Promise<HttpResponse<User[]>> {
		try {
			const ranking = await this.loadUsers.load();
			return ok(ranking);
		} catch (error) {
			return serverError(error);
		}
	}
}

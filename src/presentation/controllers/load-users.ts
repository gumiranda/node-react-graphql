import {
	Controller,
	HttpResponse,
	serverError,
	ok,
} from '@/presentation/contracts';
import { LoadUsers } from '@/domain/usecases';
import { User } from '@/domain/entities';

export class LoadUsersController implements Controller {
	constructor(private readonly loadUsers: LoadUsers) {}

	async handle(): Promise<HttpResponse<User[]>> {
		try {
			const users = await this.loadUsers.load();
			return ok(users);
		} catch (error) {
			return serverError(error);
		}
	}
}

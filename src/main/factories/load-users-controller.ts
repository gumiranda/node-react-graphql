import { LoadUsersController } from '@/presentation/controllers';
import { LoadUsersService } from '@/data/services';
import { FakeUsersRepository } from '@/infra/repositories';
import { Controller } from '@/presentation/contracts';

export const makeLoadUsersController = (name: string): Controller => {
	const repo = new FakeUsersRepository();
	const loadUsersService = new LoadUsersService(repo);
	const controller = new LoadUsersController(loadUsersService);
	return controller;
};

import { User } from '@/domain/entities';

export interface LastUserLoader {
	load: () => Promise<User[]>;
}

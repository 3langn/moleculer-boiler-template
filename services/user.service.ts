import { Action, Service } from 'moleculer-decorators';
import MoleculerDb from 'moleculer-db';
import * as moleculer from 'moleculer';
import { User } from '../models/user';
import { TypeOrmDb } from '../mixins/typeorm';
import { Repository } from 'typeorm';
@Service({
	name: 'users',
	settings: {
		repo: {
			userRepository: User,
		},
	},
	mixins: [TypeOrmDb],
})
export default class UserService extends moleculer.Service {
	userRepository: Repository<User>;

	@Action({ rest: 'GET /' })
	public async find(ctx: moleculer.Context) {
		return await this.userRepository.find({});
	}
}

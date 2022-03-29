import { Action, Service } from 'moleculer-decorators';
import MoleculerDb, { MemoryAdapter } from 'moleculer-db';
import { Post } from '../models/post';
import * as moleculer from 'moleculer';
import { User } from '../models/user';
import { getConnection, getRepository, Repository } from 'typeorm';
import { TypeOrmDb } from '../mixins/typeorm';

@Service({
	name: 'posts',
	mixins: [TypeOrmDb],
	settings: {
		repo: {
			postRepository: Post,
			userRepository: User,
		},
	},
})
export default class PostService extends moleculer.Service {
	postRepository: Repository<Post>;
	userRepository: Repository<User>;
	@Action({
		params: {
			title: 'string',
			content: 'string',
		},
		rest: 'POST /',
	})
	public async create(ctx: moleculer.Context) {
		const { title, content } = ctx.params as any;
		const author = await this.userRepository.findOne({ where: { id: 'c91c59dd-ba30-427e-981d-a612472b2301' } });

		return await this.postRepository.save(this.postRepository.create({ title, content, author }));
	}

	@Action({ rest: 'GET /' })
	public async find(ctx: moleculer.Context) {
		// return this.repository.find();
	}
}

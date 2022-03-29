import { getConnection, getRepository } from 'typeorm';
// implement settings for SOLID principles
export const TypeOrmDb = {
	settings: {},
	async started() {},
	async created() {
		if (!this.settings.repo) throw new Error(`Service ${this.schema.name}: Repo is not defined`);
		// else this.repository = getConnection().getRepository(this.schema.model);
		else {
			this.connection = getConnection();
			for (let key in this.settings.repo) {
				this[key] = getRepository(this.settings.repo[key]);
			}
		}
	},
};

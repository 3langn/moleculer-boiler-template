import { createConnection, Connection, getConnection } from 'typeorm';
console.log(__dirname.replace('/services', '/models') + '/*');

export default async (): Promise<Connection | undefined> => {
	try {
		await createConnection({
			database: 'moleculer',
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'saota1278',
			entities: [__dirname + '/*'],
			synchronize: true,
		});
		console.log('Connected to database');
	} catch (error) {
		return undefined;
	}
};

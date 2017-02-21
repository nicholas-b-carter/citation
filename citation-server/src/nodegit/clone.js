import {Cred, Clone} from 'nodegit';
import winston from 'winston';

// import {securityOptions} from './wrapper';

const logger = winston.loggers.get('NodeGit');

export default async function clone(repositoryUrl, repositoryPath) {
	try {
		return await Clone(repositoryUrl, repositoryPath, { // eslint-disable-line new-cap
			fetchOpts: {
				callbacks: {
					credentials(url, userName) {
						return Cred.sshKeyFromAgent(userName);
					},
					certificateCheck() {
						return 1;
					}
				}
			}
		});
	} catch (error) {
		logger.error(`Nodegit clone error ${error}`);
		throw error;
	}
};

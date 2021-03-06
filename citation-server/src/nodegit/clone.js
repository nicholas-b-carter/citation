import {Clone} from 'nodegit';
import winston from 'winston';

import {securityOptions} from './security';

const logger = winston.loggers.get('NodeGit');

export default async function clone(repositoryUrl, repositoryPath) {
	try {
		return await Clone(repositoryUrl, repositoryPath, { // eslint-disable-line new-cap
			fetchOpts: securityOptions
		});
	} catch (error) {
		logger.error(`Nodegit clone error ${error}`);
		throw error;
	}
};

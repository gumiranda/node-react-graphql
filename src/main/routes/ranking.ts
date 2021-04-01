import { Router } from 'express';
import { adaptRoute } from '@/main/adapters/express-router';
import { makeLoadLastRankingController } from '@/main/factories';

export default (router: Router) => {
	router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()));
};

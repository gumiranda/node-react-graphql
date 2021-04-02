import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		lastRanking: [RankingScore!]
	}
	type RankingScore {
		_id: String
		index: Int
		picture: String
		age: Int
		eyeColor: String
		name: String
		company: String
		email: String
		phone: String
		friends: [RankingScore]
		greeting: String
	}
`;

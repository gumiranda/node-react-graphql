type Friend = {
	_id: string;
	index: number;
	picture: string;
	age: number;
	eyeColor: string;
	name: string;
	company: string;
	email: string;
	phone: string;
};

export type User = {
	_id: string;
	index: number;
	picture: string;
	age: number;
	eyeColor: string;
	name: string;
	company: string;
	email: string;
	phone: string;
	friends: Friend[];
	greeting: string;
};
// 39:45 https://www.youtube.com/watch?v=P0gpCCA8ZPs&ab_channel=RodrigoBranas

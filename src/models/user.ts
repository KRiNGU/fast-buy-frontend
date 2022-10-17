export type UserId = number;

export enum Role {
	BUYER,
	SALESMAN,
	MODERATOR,
	ADMIN,
}

export type CreateUserDto = {
	name: string;
	lastName: string;
	patronymic?: string;
	role: Role;
};

export type UpdateUserDto = {
	name: string;
	lastName: string;
	patronymic?: string;
};

export type User = CreateUserDto & {
	createdAt: Date;
};

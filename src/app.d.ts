declare global {
	type Session = {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		expiresAt: Date;
		token: string;
		ipAddress?: string | null | undefined | undefined;
		userAgent?: string | null | undefined | undefined;
	};

	type SessionUser = {
		id: string;
		name: string;
		email: string;
		emailVerified: boolean;
		createdAt: Date;
		updatedAt: Date;
		image?: string | null | undefined | undefined;
	};

	namespace App {
		interface Locals {
			session: { session: Session; user: SessionUser } | null;
		}
	}
}

export { Locals };

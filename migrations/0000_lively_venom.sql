CREATE TABLE `post` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text(256) NOT NULL,
	`author` text(128) NOT NULL,
	`body` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`deleted_at` text
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `post` (`title`);
-- AlterTable
ALTER TABLE `generalannouncement` ADD COLUMN `ends` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `starts` BOOLEAN NOT NULL DEFAULT false;

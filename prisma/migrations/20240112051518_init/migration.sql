/*
  Warnings:

  - Added the required column `endsOn` to the `GeneralAnnouncement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsOn` to the `GeneralAnnouncement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `generalannouncement` ADD COLUMN `endsOn` DATETIME(3) NOT NULL,
    ADD COLUMN `startsOn` DATETIME(3) NOT NULL;

/*
  Warnings:

  - Added the required column `alliance_id` to the `AllianceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alliancerequest` ADD COLUMN `alliance_id` VARCHAR(191) NOT NULL;

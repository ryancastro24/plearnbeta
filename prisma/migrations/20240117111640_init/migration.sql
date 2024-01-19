/*
  Warnings:

  - You are about to drop the column `userId` on the `alliancemembers` table. All the data in the column will be lost.
  - Added the required column `UserId` to the `AllianceMembers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `alliancemembers` DROP FOREIGN KEY `AllianceMembers_userId_fkey`;

-- AlterTable
ALTER TABLE `alliancemembers` DROP COLUMN `userId`,
    ADD COLUMN `UserId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `alliance` VARCHAR(191) NULL;

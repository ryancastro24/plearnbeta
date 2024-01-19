/*
  Warnings:

  - You are about to drop the column `alliance` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `alliancemembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `alliancemembers` DROP FOREIGN KEY `AllianceMembers_allianceId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `alliance`,
    ADD COLUMN `allianceId` VARCHAR(191) NULL,
    ADD COLUMN `alliancePosition` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `alliancemembers`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_allianceId_fkey` FOREIGN KEY (`allianceId`) REFERENCES `Alliance`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

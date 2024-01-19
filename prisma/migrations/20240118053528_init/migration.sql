/*
  Warnings:

  - Added the required column `alliangce_image` to the `Alliance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alliance` ADD COLUMN `alliangce_image` VARCHAR(191) NOT NULL;

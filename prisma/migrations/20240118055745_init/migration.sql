/*
  Warnings:

  - You are about to drop the column `alliangce_image` on the `alliance` table. All the data in the column will be lost.
  - Added the required column `alliance_image` to the `Alliance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alliance` DROP COLUMN `alliangce_image`,
    ADD COLUMN `alliance_image` VARCHAR(191) NOT NULL;

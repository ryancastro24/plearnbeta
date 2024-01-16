/*
  Warnings:

  - Added the required column `topic` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activity` ADD COLUMN `topic` VARCHAR(191) NOT NULL;

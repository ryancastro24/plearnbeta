/*
  Warnings:

  - Added the required column `choiceText` to the `Choice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `choice` ADD COLUMN `choiceText` VARCHAR(191) NOT NULL;

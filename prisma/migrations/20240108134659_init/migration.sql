/*
  Warnings:

  - Made the column `levelIdicator` on table `levelpass` required. This step will fail if there are existing NULL values in that column.
  - Made the column `progress` on table `levelpass` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `levelpass` MODIFY `levelIdicator` INTEGER NOT NULL DEFAULT 0,
    MODIFY `progress` INTEGER NOT NULL DEFAULT 0;

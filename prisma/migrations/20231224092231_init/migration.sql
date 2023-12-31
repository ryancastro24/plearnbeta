/*
  Warnings:

  - You are about to drop the `_user_subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_user_subject` DROP FOREIGN KEY `_user_subject_A_fkey`;

-- DropForeignKey
ALTER TABLE `_user_subject` DROP FOREIGN KEY `_user_subject_B_fkey`;

-- DropTable
DROP TABLE `_user_subject`;

-- CreateTable
CREATE TABLE `_user_section` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `_user_section_AB_unique`(`A`, `B`),
    INDEX `_user_section_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_user_section` ADD CONSTRAINT `_user_section_A_fkey` FOREIGN KEY (`A`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_section` ADD CONSTRAINT `_user_section_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

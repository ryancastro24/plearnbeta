-- CreateTable
CREATE TABLE `_user_subject` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `_user_subject_AB_unique`(`A`, `B`),
    INDEX `_user_subject_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_user_subject` ADD CONSTRAINT `_user_subject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_user_subject` ADD CONSTRAINT `_user_subject_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

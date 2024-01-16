-- CreateTable
CREATE TABLE `_LevelPassItemToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `_LevelPassItemToUser_AB_unique`(`A`, `B`),
    INDEX `_LevelPassItemToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_LevelPassItemToUser` ADD CONSTRAINT `_LevelPassItemToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `LevelPassItem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LevelPassItemToUser` ADD CONSTRAINT `_LevelPassItemToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

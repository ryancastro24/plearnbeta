-- AlterTable
ALTER TABLE `user` ADD COLUMN `levelPassId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `LevelPass` (
    `id` VARCHAR(191) NOT NULL,
    `levelIdicator` INTEGER NULL,
    `progress` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `purchased` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LevelPassItem` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `achieved` BOOLEAN NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `levelPassId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_levelPassId_fkey` FOREIGN KEY (`levelPassId`) REFERENCES `LevelPass`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LevelPassItem` ADD CONSTRAINT `LevelPassItem_levelPassId_fkey` FOREIGN KEY (`levelPassId`) REFERENCES `LevelPass`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

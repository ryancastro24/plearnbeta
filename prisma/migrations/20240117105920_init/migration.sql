-- CreateTable
CREATE TABLE `Alliance` (
    `id` VARCHAR(191) NOT NULL,
    `alliance_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AllianceMembers` (
    `id` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(36) NOT NULL,
    `allianceId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AllianceMembers` ADD CONSTRAINT `AllianceMembers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AllianceMembers` ADD CONSTRAINT `AllianceMembers_allianceId_fkey` FOREIGN KEY (`allianceId`) REFERENCES `Alliance`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

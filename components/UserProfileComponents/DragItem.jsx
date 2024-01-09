    // DragItem.js
    import React, { useState } from 'react';
    import Image from 'next/image';

    const DragItem = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [itemsInContainer, setItemsInContainer] = useState([]);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleContainerDrop = (newImageSrc) => {
        // If an image is already in the container, remove it and return it to its place
        if (itemsInContainer.length > 0) {
        const existingImage = itemsInContainer[0];
        existingImage.isImageInContainer = false;
        setItemsInContainer([]);
        }

        // Add the new image to the items in the container
        setItemsInContainer([{ src: newImageSrc, id: Date.now(), isImageInContainer: true }]);
    };

    const handleItemClick = () => {
        // Remove the item from the container and return it to its place
        const existingImage = itemsInContainer[0];
        existingImage.isImageInContainer = false;
        setItemsInContainer([]);
    };

    return (
        <div>
        <h2>Drag and Drop Item</h2>
        <div
            style={{
            width: '100px',
            height: '100px',
            border: '2px dashed #aaa',
            position: 'relative',
            }}
            onDrop={(e) => handleContainerDrop(e.dataTransfer.getData('text/plain'))}
            onDragOver={(e) => e.preventDefault()}
        >
            {itemsInContainer.map((item, index) => (
            <div
                key={item.id}
                style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                }}
                onClick={handleItemClick}
            >
                <Image
                src={item.src}
                alt={`Item ${index + 1}`}
                height={50}
                width={50}
                />
            </div>
            ))}
        </div>

        {!itemsInContainer.some((item) => item.isImageInContainer) && (
            <div
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', '/itemsAssets/coffee2.jpg');
                handleDragStart();
            }}
            onDragEnd={handleDragEnd}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#7cb305',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'grab',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}
            >
            <Image
                src="/itemsAssets/coffee2.jpg"
                alt="Draggable Item"
                style={{ marginBottom: '10px' }}
                height={50}
                width={50}
            />
            </div>
        )}

        {!itemsInContainer.some((item) => item.isImageInContainer) && (
            <div
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', '/itemsAssets/cake.jpg');
                handleDragStart();
            }}
            onDragEnd={handleDragEnd}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#7cb305',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'grab',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}
            >
            <Image
                src="/itemsAssets/cake.jpg"
                alt="Draggable Item"
                style={{ marginBottom: '10px' }}
                height={50}
                width={50}
            />
            </div>
        )}
        </div>
    );
    };

    export default DragItem;

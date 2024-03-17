import React, { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import IconHeart from './IconHeart'
import Badge from 'react-bootstrap/Badge'

const LikedPhotos = () => {
    const { photos, setPhotos } = useContext(PhotosContext)

    const removeLiked = (id) => {
        const newPhotos = photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, isLiked: false }
            }
            return photo;
        });
        setPhotos(newPhotos);
    };

    return (
        <div className='gallery grid-columns-5 p-3'>
            {photos.map((photo) => (
                photo.isLiked && (
                    <div
                        className='photo'
                        key={photo.id}
                        onClick={() => removeLiked(photo.id)}
                        style={{ backgroundImage: `url(${photo.src.medium})` }}
                    >
                        <IconHeart filled={photo.isLiked} />
                        <section>
                            <p>{photo.alt}</p>
                            <h6>
                                <Badge bg='dark'>{photo.photographer}</Badge>
                            </h6>
                        </section>
                    </div>
                )
            ))}
        </div>
    );
};

export default LikedPhotos;

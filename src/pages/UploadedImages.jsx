import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

function UploadedImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(collection(db, 'uploads'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const imageList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setImages(imageList);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="page" style={{ padding: '20px', direction: 'ltr' }}>
      <h2>🖼️ Uploaded Images Gallery</h2>
      {loading ? (
        <p>⏳ Loading images...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {images.map((img) => (
            <div key={img.id}>
              <img
                src={img.imageUrl}
                alt="Uploaded"
                style={{ width: '200px', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadedImages;

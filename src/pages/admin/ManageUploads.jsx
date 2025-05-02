import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

function ManageUploads() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    const q = query(collection(db, 'uploads'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setImages(list);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this image?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, 'uploads', id));
      setImages(images.filter((img) => img.id !== id));
      alert('✅ Image deleted from database.');
    } catch (err) {
      console.error('Delete error:', err);
      alert('❌ Failed to delete.');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="page" style={{ padding: '20px', direction: 'ltr' }}>
      <h2>🖼️ Manage Uploaded Images</h2>
      {loading ? (
        <p>⏳ Loading images...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {images.map((img) => (
            <div key={img.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
              <img src={img.imageUrl} alt="Uploaded" style={{ width: '200px' }} />
              <button
                onClick={() => handleDelete(img.id)}
                style={{
                  marginTop: '10px',
                  background: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageUploads;

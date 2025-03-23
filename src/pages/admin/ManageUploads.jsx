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
    const confirm = window.confirm("هل أنت متأكد من حذف الصورة؟");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, 'uploads', id));
      setImages(images.filter((img) => img.id !== id));
      alert('✅ تم حذف الصورة من قاعدة البيانات.');
    } catch (err) {
      console.error('خطأ في الحذف:', err);
      alert('❌ فشل في الحذف.');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="page" style={{ padding: '20px', direction: 'rtl' }}>
      <h2>🖼️ إدارة الصور المرفوعة</h2>
      {loading ? (
        <p>⏳ جاري تحميل الصور...</p>
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
                🗑️ حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageUploads;

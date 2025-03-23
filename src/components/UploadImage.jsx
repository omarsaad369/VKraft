import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function UploadImage() {
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset");
    formData.append("cloud_name", "dvkh86tte");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dvkh86tte/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const imageUrl = data.secure_url;
      setUrl(imageUrl);

      // ✅ تخزين الرابط في Firestore
      await addDoc(collection(db, "uploads"), {
        imageUrl,
        createdAt: Timestamp.now(),
      });

      alert("📥 تم رفع الصورة وتخزين الرابط في Firestore");

    } catch (err) {
      alert("فشل في الرفع أو التخزين: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="page" style={{ padding: '20px', direction: 'rtl' }}>
      <h2>📸 رفع صورة وتخزينها في Firestore</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {uploading && <p>🚀 جاري رفع الصورة...</p>}
      {url && (
        <div style={{ marginTop: '20px' }}>
          <p>✅ رابط الصورة:</p>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          <br />
          <img src={url} alt="Uploaded" style={{ maxWidth: '300px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
}

export default UploadImage;

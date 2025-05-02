import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/ManageProducts.css";

const placeholderProducts = [
  { id: 1, name: "T-Shirt", image: "https://th.bing.com/th/id/OIP.Em9qbu1RD8hQZDVJnSoUPwHaJo?rs=1&pid=ImgDetMain", category: "clothing" },
  { id: 7, name: "Casual Dress", image: "https://jameelaat.com/wp-content/uploads/2020/03/%D9%81%D8%B3%D8%AA%D8%A7%D9%86-%D9%83%D8%A7%D8%AC%D9%88%D8%A7%D9%84-%D9%85%D8%AD%D8%AC%D8%A8%D8%A7%D8%AA-2020.jpg", category: "clothing" },
  { id: 8, name: "Jeans Pants", image: "https://www.bing.com/th?id=OIP.m59O0zvt4x5fY2pesOmsbQHaLW", category: "clothing" },
  { id: 9, name: "Plain Scarf", image: "https://cdn.johrh.com/wp-content/uploads/2022/01/08161722/4314-1.jpg", category: "clothing" },
  { id: 10, name: "Sports Pants", image: "https://jomla.ae/_next/image/?url=https:%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2023%2F09%2FGK8995-S-3.jpg&w=640&q=75", category: "clothing" },
  { id: 11, name: "Fabric Pants", image: "https://th.bing.com/th/id/OIF.5rtfnMfwsuQcLqO9kCsbLg?rs=1&pid=ImgDetMain", category: "clothing" },
  { id: 12, name: "Cartoon Character", image: "https://s.alicdn.com/@sc04/kf/Hf398d3f401df4525adf2b01a68e7abcda.jpg_720x720q50.jpg", category: "3d" },
  { id: 13, name: "Vase", image: "https://cdn.globalso.com/merlin-living/Merlin-Living-3D-Printing-Vase-Irregular-Shape-Nordic-Home-Decor-2.jpg", category: "3d" },
  { id: 14, name: "Keychain", image: "https://m.media-amazon.com/images/I/416VbromkTL.AC_SY580.jpg", category: "accessories" },
  { id: 15, name: "Printed Mug", image: "https://cdn.salla.sa/SGjESIfizKf1gizkCglmgZs7vGyjOIkhtSIG4MAj.jpeg", category: "accessories" },
  { id: 16, name: "Sports Suit", image: "https://i.pinimg.com/originals/52/30/44/523044f4a11ac43e9cdcf2a4a11e7556.jpg", category: "clothing" },
  { id: 17, name: "Casual Jacket", image: "https://th.bing.com/th/id/OIP.-HrUOG62M5Da_uk5z4ritQHaHa?rs=1&pid=ImgDetMain", category: "clothing" },
  { id: 18, name: "Women's Sports Suit", image: "https://cdn.shopify.com/s/files/1/0681/7408/6457/files/6_737042c7-00b7-4b6f-8ab5-cbb18cfd9ea8_jpg_1024x1024.webp?v=1708172600", category: "clothing" },
  { id: 19, name: "Sports Shoes", image: "https://th.bing.com/th/id/OIP.vpGyFMRjy52gz6I26QXVEQHaHa?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", category: "clothing" },
  { id: 20, name: "Evening Dress", image: "https://physicaltherapy-clinic.com/suitanddress/wp-content/uploads/2024/01/%D9%81%D8%B3%D8%A7%D8%AA%D9%8A%D9%86-%D8%B3%D9%88%D8%A7%D8%B1%D9%8A%D8%A9-%D8%B3%D8%AA%D8%A7%D9%86-%D8%B4%D8%AA%D9%88%D9%8A-%D9%85%D8%AD%D8%AC%D8%A8%D8%A7%D8%AA-%D8%A7%D8%B7%D9%81%D8%A7%D9%84-30-%D8%B5%D9%88%D8%B1%D8%A9-%D9%81%D8%B3%D8%AA%D8%A7%D9%86-%D9%85%D8%AE%D8%AA%D9%84%D9%81-1-882x1024.jpg", category: "clothing" },
  { id: 21, name: "Bracelet", image: "https://th.bing.com/th/id/OIP.hoovTPdnT7aslhQYzOX3eAAAAA?rs=1&pid=ImgDetMain", category: "accessories" },
  { id: 22, name: "Ring", image: "https://th.bing.com/th/id/OIP.BsClBsMADXrHs4mbBq2iyQHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7", category: "accessories" },
  { id: 23, name: "Earrings", image: "https://th.bing.com/th/id/OIP.QA4Y4Wi8jTdK-KGj9QuNiQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7", category: "accessories" },
  { id: 24, name: "Necklace", image: "https://th.bing.com/th/id/R.c22a6516b39c135989c4875291669d04?rik=loknEIb2Cwrw8Q&pid=ImgRaw&r=0", category: "accessories" },
  { id: 25, name: "Phone Cover", image: "https://th.bing.com/th/id/R.8ef6e6e3a396ec13230567690644caab?rik=EbhvPNJy7J%2bwAA&pid=ImgRaw&r=0", category: "accessories" },
  { id: 30, name: "Handbag", image: "https://th.bing.com/th/id/OIP.k-O-pgL37SlC7imXLddPuwHaJ4?rs=1&pid=ImgDetMain", category: "accessories" },
  { id: 31, name: "Heels", image: "https://upload.3dlat.com/uploads/3dlat.com_10_19_831f_86787aaad69d1.jpg", category: "clothing" },
  { id: 32, name: "Ballerina Flats", image: "https://th.bing.com/th/id/OIP.xJ9XCLaEnqpVIwHPJA-VswHaJQ?w=736&h=920&rs=1&pid=ImgDetMain", category: "clothing" },
  { id: 33, name: "Custom Face-Shaped Eyeglass Holder", image: "https://i.etsystatic.com/13698436/r/il/33b69d/2491981020/il_570xN.2491981020_ja62.jpg", category: "3d" },
  { id: 34, name: "Futuristic Geometric Mask", image: "https://ai-previews.123rf.com/ai-txt2img/600nwm/f8d15a69-2efd-4a4a-9fe1-9b5c13fe93c9.jpg", category: "3d" },
  { id: 35, name: "Custom Office Accessories", image: "https://www.personalizationmall.com/cat_image/16519-191028151411-TB.jpg", category: "3d" },
  { id: 36, name: "Custom Miniature Statues", image: "https://i.etsystatic.com/37699897/r/il/508874/6370949249/il_570xN.6370949249_kb0l.jpg", category: "3d" },
  { id: 37, name: "Modern 3D Wall Clock", image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/2021/04/10/e594d76dd70d476b807297872a0270f6.jpg", category: "3d" },
  { id: 38, name: "Landmark Decorative Models", image: "https://classysculptures.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/07022650/3068-e29073.jpg", category: "3d" },
  { id: 40, name: "Animal-Shaped Earphone Holder", image: "https://i.etsystatic.com/22083758/r/il/df044f/6163343452/il_1080xN.6163343452_9g5v.jpg", category: "3d" },
  { id: 42, name: "3D Company Logo Model", image: "https://img-new.cgtrader.com/items/2792118/d5c7e0d599/large/letter-v-3d-model-max-obj-fbx-stl.jpg", category: "3d" },
  { id: 44, name: "Abstract Art Model", image: "https://media.cgtrader.com/variants/NgVEJ4VxQ4oMnLcdETLWYnVz/c4dfab5c8344acd5afd54555808fa611d594931395cc672cd1ed830a80a8f66c/core-tq-c2-3d-model-animated-max-obj-mtl-fbx.jpg", category: "3d" },
  { id: 46, name: "Custom Desk Nameplate", image: "https://www.masterplaques.com/wp-content/uploads/2005/12/products-Deluxe-Desk-Nameplate.webp", category: "3d" },
  { id: 47, name: "Decorative Piece from Sketch", image: "https://i.etsystatic.com/40919154/c/1034/1034/165/43/il/74b4be/5909993341/il_300x300.5909993341_a94m.jpg", category: "3d" },
  { id: 49, name: "Custom Pen Holder", image: "https://cdn3.successories.com/products/6688137r-751975C-pen-cups-custom-pen-holder.jpg", category: "3d" },
  { id: 50, name: "Attachable Clothing Accessory", image: "https://s.alicdn.com/@sc04/kf/Ha0c07705514b45229f1633fe88b3f8b26.jpg_720x720q50.jpg", category: "3d" },
  { id: 56, name: "Business Card Holder", image: "https://enchantedmemoriesbranson.com/cdn/shop/products/Engraved-Marble-Business-Card-Holder-For-Desk-Corporate-Logo-Etched-with-Name-and-Title-Wedge.jpg?v=1593731729&width=1445", category: "3d" },
  { id: 57, name: "Custom Phone Stand", image: "https://i.etsystatic.com/27728656/r/il/35e3b5/3921571655/il_570xN.3921571655_5wbt.jpg", category: "3d" },
  { id: 59, name: "Small Tools Organizer", image: "https://www.cobrafoaminserts.com/cdn/shop/collections/tools_cropped-680x300_1350x760.jpg?v=1693818986", category: "3d" },
];


const ManageProducts = () => {
  const navigate = useNavigate();
  const productsFromStore = useSelector((state) => state.products.items);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productsFromStore || productsFromStore.length === 0) {
      setProducts(placeholderProducts);
    } else {
      setProducts(productsFromStore);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [productsFromStore]);

  const handleEdit = (product) => {
    alert(`📝 Edit: ${product.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("❌ Are you sure you want to delete this product?")) {
      alert(`🗑️ Product deleted (ID: ${id})`);
    }
  };

  if (loading) {
    return (
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
      </div>
    );
  }

  return (
    <div className="manage-products-container">
      <h2>🛒 Manage Products</h2>

      <button
        className="add-product-btn"
        onClick={() => navigate("/add-product")}
      >
        ➕ Add New Product
      </button>

      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>📸 Image</th>
            <th>📝 Name</th>
            <th>📂 Category</th>
            <th>⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id || index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={product.image || "/fallback.jpg"}
                  alt={product.name}
                  className="product-img"
                />
              </td>
              <td>{product.name || "Unnamed"}</td>
              <td>{product.category || "Unspecified"}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(product)}>✏️ Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(product.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;

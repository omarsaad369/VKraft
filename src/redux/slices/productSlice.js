// استيراد createSlice من Redux Toolkit لإنشاء slice خاص بالمنتجات
import { createSlice } from "@reduxjs/toolkit";  

// الحالة الأولية (Initial State) التي تحتوي على قائمة المنتجات
const initialState = {  
  products: [  
    { id: 1, name: "تيشيرت", image: "https://th.bing.com/th/id/OIP.Em9qbu1RD8hQZDVJnSoUPwHaJo?rs=1&pid=ImgDetMain",category: "clothing" },
    { id: 2, name: "هودي ", image: "https://th.bing.com/th/id/R.38458003b7a5e5f7a7c3f0b353d48d51?rik=5t0NaSToGk%2fPhw&riu=http%3a%2f%2fimg.alicdn.com%2fimgextra%2fi3%2f2207705385756%2fO1CN01lWvhVP1sOIXKQisYf_!!2207705385756.jpg&ehk=9CizKbErWqhzpY7vS1h51tKV2IpP72gKCJ6WmAB%2bujk%3d&risl=&pid=ImgRaw&r=0" }, 
    { id: 3, name: "بلوفر", image:"https://298e68f4688824edaa69-48b82022aff0431e5824bfa9679e8c80.ssl.cf2.rackcdn.com/product-dynamicrect-753809-54020-1471856465-47f6298b8a2ba89eb2a23357464ae50f.471856466_type_dynamicrect_nid_753809_uid_54020_0", category: "clothing" }, 
    { id: 4, name: "سويت شيرت", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fog-1631653626.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*", category: "clothing"},  
    { id: 5, name: "قميص ", image: "https://th.bing.com/th/id/OIP.nj4fXsXmTBOia3JM5jvQtQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3", category: "clothing"},
    { id: 6, name: "جاكت رياضى", image: "https://cms-cdn.thesolesupplier.co.uk/2022/06/adidas-track-jacket-black-logo_w672_h672.jpg.webp", category: "clothing" },  
    { id: 7, name: "فستان كاجوال ", image: "https://jameelaat.com/wp-content/uploads/2020/03/%D9%81%D8%B3%D8%AA%D8%A7%D9%86-%D9%83%D8%A7%D8%AC%D9%88%D8%A7%D9%84-%D9%85%D8%AD%D8%AC%D8%A8%D8%A7%D8%AA-2020.jpg", category: "clothing" }, 
    { id: 8, name: "بنطلون جينز", image: "https://www.bing.com/th?id=OIP.m59O0zvt4x5fY2pesOmsbQHaLW", category: "clothing"}, 
    { id: 9, name: "طرحه ساده", image:"https://cdn.johrh.com/wp-content/uploads/2022/01/08161722/4314-1.jpg", category: "clothing"}, 
    { id: 10, name: "طرحه منقوشه",  image: "https://th.bing.com/th/id/OIP.fQXDczHIt5bPhSqP4UZWlQHaLG?rs=1&pid=ImgDetMain", category: "clothing"},  
    { id: 11, name: "بنطلون قماش", image:"https://th.bing.com/th/id/OIF.5rtfnMfwsuQcLqO9kCsbLg?rs=1&pid=ImgDetMain", category: "clothing"}, 
    { id: 12, name: "شخصية كرتونية", image:"https://s.alicdn.com/@sc04/kf/Hf398d3f401df4525adf2b01a68e7abcda.jpg_720x720q50.jpg", category: "3d"}, 
    { id: 12, name: "مزهرية ", image:"https://cdn.globalso.com/merlin-living/Merlin-Living-3D-Printing-Vase-Irregular-Shape-Nordic-Home-Decor-2.jpg", category: "3d"}, 
    {id: 12, name: "ميدالية مفاتيح", image: "https://m.media-amazon.com/images/I/416VbromkTL._AC_SY580_.jpg", category: "accessories"},
    { id: 13, name: "كوب مطبوع", image: "https://cdn.salla.sa/SGjESIfizKf1gizkCglmgZs7vGyjOIkhtSIG4MAj.jpeg", category: "accessories"}
    ]}


// إنشاء Slice جديد لإدارة المنتجات باستخدام createSlice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

// ✅ إضافة فلتر منتجات 3D
export const select3DProducts = (state) =>
  state.products.products.filter((product) => product.category === "3d");

export default productSlice.reducer;
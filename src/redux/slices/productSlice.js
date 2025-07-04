
import { createSlice } from "@reduxjs/toolkit";  


const initialState = {  
  products: [  
    { id: 1, name: "T-shirt", image: "https://th.bing.com/th/id/OIP.Em9qbu1RD8hQZDVJnSoUPwHaJo?rs=1&pid=ImgDetMain", category: "clothing" },
    { id: 2, name: "Hoodie", image: "https://th.bing.com/th/id/R.38458003b7a5e5f7a7c3f0b353d48d51?rik=5t0NaSToGk%2fPhw&riu=http%3a%2f%2fimg.alicdn.com%2fimgextra%2fi3%2f2207705385756%2fO1CN01lWvhVP1sOIXKQisYf_!!2207705385756.jpg&ehk=9CizKbErWqhzpY7vS1h51tKV2IpP72gKCJ6WmAB%2bujk%3d&risl=&pid=ImgRaw&r=0", category: "clothing" },
    { id: 3, name: "Pullover", image: "https://298e68f4688824edaa69-48b82022aff0431e5824bfa9679e8c80.ssl.cf2.rackcdn.com/product-dynamicrect-753809-54020-1471856465-47f6298b8a2ba89eb2a23357464ae50f.471856466_type_dynamicrect_nid_753809_uid_54020_0", category: "clothing" },
    { id: 4, name: "Sweatshirt", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fog-1631653626.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*", category: "clothing" },
    { id: 5, name: "Shirt", image: "https://th.bing.com/th/id/OIP.nj4fXsXmTBOia3JM5jvQtQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3", category: "clothing" },
    { id: 6, name: "Sports Jacket", image: "https://cms-cdn.thesolesupplier.co.uk/2022/06/adidas-track-jacket-black-logo_w672_h672.jpg.webp", category: "clothing" },
    { id: 7, name: "Casual Dress", image: "https://jameelaat.com/wp-content/uploads/2020/03/%D9%81%D8%B3%D8%AA%D8%A7%D9%86-%D9%83%D8%A7%D8%AC%D9%88%D8%A7%D9%84-%D9%85%D8%AD%D8%AC%D8%A8%D8%A7%D8%AA-2020.jpg", category: "clothing" },
    { id: 8, name: "Jeans", image: "https://www.bing.com/th?id=OIP.m59O0zvt4x5fY2pesOmsbQHaLW", category: "clothing" },
    { id: 9, name: "Plain Scarf", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_9F8_q9iWo6nGDj3SOiJNQ1hvux467H_yC7W67kQ0qfOSn23IY_Tt66JuLedc9AHkpOsO_zuEeOtmsRZc08ElpBvP1Eg0vysdI_4aKHSqzJbSGUQ2z34ArKzhqBSiL4KxzS9ofQ&usqp=CAc", category: "clothing" },
    { id: 10, name: "Sports Pants", image: "https://jomla.ae/_next/image/?url=https:%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2023%2F09%2FGK8995-S-3.jpg&w=640&q=75", category: "clothing" },
    { id: 11, name: "Fabric Pants", image: "https://static2.goldengoose.com/public/Style/ECOMM/GWP01894.P001609-60528.jpg", category: "clothing" },
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
    { id: 25, name: "Mobile Cover", image: "https://th.bing.com/th/id/R.8ef6e6e3a396ec13230567690644caab?rik=EbhvPNJy7J%2bwAA&pid=ImgRaw&r=0", category: "accessories" },
    { id: 26, name: "Wrist Watch", image: "https://th.bing.com/th/id/OIP._dM8HRAJ8qHPUjLKkYyGxgAAAA?rs=1&pid=ImgDetMain", category: "accessories" },
    { id: 27, name: "Wallet", image: "https://th.bing.com/th/id/R.79dddd9b646f6f198805732f41bd9d54?rik=%2fNkEpE3eV6g8Kw&pid=ImgRaw&r=0", category: "accessories" },
    { id: 28, name: "Crossbody Bag", image: "https://th.bing.com/th/id/OIP.NjLa7PCCLvMO0EWyr4_4wgHaHa?rs=1&pid=ImgDetMain", category: "accessories" },
    { id: 29, name: "Backpack", image: "https://knomo.com/cdn/shop/products/Knomo_Berlin_womens_laptop_backpack_black_front.jpg?v=1615872318", category: "accessories" },
    { id: 30, name: "Handbag", image: "https://th.bing.com/th/id/OIP.k-O-pgL37SlC7imXLddPuwHaJ4?rs=1&pid=ImgDetMain", category: "accessories" },
    { id: 31, name: "Heels", image: "https://upload.3dlat.com/uploads/3dlat.com_10_19_831f_86787aaad69d1.jpg", category: "clothing" },
    { id: 32, name: "Ballerina Shoes", image: "https://th.bing.com/th/id/OIP.xJ9XCLaEnqpVIwHPJA-VswHaJQ?w=736&h=920&rs=1&pid=ImgDetMain", category: "clothing" },
    { id: 33, name: "Eyeglass holder shaped like a face", image: "https://i.etsystatic.com/13698436/r/il/33b69d/2491981020/il_570xN.2491981020_ja62.jpg", category: "3d" },
    { id: 34, name: "Futuristic geometric mask", image: "https://ai-previews.123rf.com/ai-txt2img/600nwm/f8d15a69-2efd-4a4a-9fe1-9b5c13fe93c9.jpg", category: "3d" },
    { id: 35, name: "Personalized office accessories", image: "https://www.personalizationmall.com/cat_image/16519-191028151411-TB.jpg", category: "3d" },
    { id: 36, name: "Custom miniature figurines", image: "https://i.etsystatic.com/37699897/r/il/508874/6370949249/il_570xN.6370949249_kb0l.jpg", category: "3d" },
    { id: 37, name: "3D wall clock with modern design", image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/2021/04/10/e594d76dd70d476b807297872a0270f6.jpg", category: "3d" },
    { id: 38, name: "Decorative models of towers or landmarks", image: "https://classysculptures.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/07022650/3068-e29073.jpg", category: "3d" },
    { id: 39, name: "Spoon holder tool for pots during cooking", image: "https://www.octopus.gr/images/detailed/19/stirigma-koutalas-kai-kapakiou-katsarolas-rock-hand-mags-vertrieb-17038-(1).jpg?t=1697105255", category: "3d" },
    { id: 40, name: "Earbud holder shaped like a favorite animal", image: "https://i.etsystatic.com/22083758/r/il/df044f/6163343452/il_1080xN.6163343452_9g5v.jpg", category: "3d" },
    { id: 41, name: "Key holder with name or logo", image: "https://m.media-amazon.com/images/I/6145Tq9ggfL.jpg", category: "3d" },
    { id: 42, name: "3D company logo model", image: "https://img-new.cgtrader.com/items/2792118/d5c7e0d599/large/letter-v-3d-model-max-obj-fbx-stl.jpg", category: "3d" },
    { id: 43, name: "Prototype product model", image: "https://www.ponoko.com/blog/wp-content/uploads/2018/05/How-To-Make-A-Product-Prototype-5-Low-Fidelity-Prototype-1024x577.jpg", category: "3d" },
    { id: 44, name: "Abstract art model", image: "https://media.cgtrader.com/variants/NgVEJ4VxQ4oMnLcdETLWYnVz/c4dfab5c8344acd5afd54555808fa611d594931395cc672cd1ed830a80a8f66c/core-tq-c2-3d-model-animated-max-obj-mtl-fbx.jpg", category: "3d" },
    { id: 45, name: "3D model of a pet", image: "https://facfox.com/news/wp-content/uploads/2021/01/Pasted-into-How-to-Print-a-3D-Model-of-My-Dog.png", category: "3d" },
    { id: 46, name: "Custom desk nameplate", image: "https://www.masterplaques.com/wp-content/uploads/2005/12/products-Deluxe-Desk-Nameplate.webp", category: "3d" },
    { id: 47, name: "Decor piece based on a drawing", image: "https://i.etsystatic.com/40919154/c/1034/1034/165/43/il/74b4be/5909993341/il_300x300.5909993341_a94m.jpg", category: "3d" },
    { id: 48, name: "Jewelry box", image: "https://i5.walmartimages.com/asr/8abdc486-9e14-4644-b17b-897832efe2a5.86771eff5a97880552ee0ddc1a66d227.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", category: "3d" },
    { id: 49, name: "Custom pen holder", image: "https://cdn3.successories.com/products/6688137r-751975C-pen-cups-custom-pen-holder.jpg", category: "3d" },
    { id: 50, name: "Accessory piece attachable to clothes", image: "https://s.alicdn.com/@sc04/kf/Ha0c07705514b45229f1633fe88b3f8b26.jpg_720x720q50.jpg", category: "3d" },
    { id: 51, name: "Special cover for electronic device", image: "https://m.media-amazon.com/images/I/61+QmYoo1sL.AC_UF894,1000_QL80.jpg", category: "3d" },
    { id: 52, name: "Unique cup holder design", image: "https://i.etsystatic.com/49320772/r/il/7641f6/6145012853/il_fullxfull.6145012853_ayjx.jpg", category: "3d" },
    { id: 53, name: "3D model of a movie scene", image: "https://cdn.staticcrate.com/wp-content/uploads/2022/07/Free_3D_Models_SciFi_Kit-1030x579.jpg", category: "3d" },
    { id: 54, name: "Miniature model of an architectural project", image: "https://www.blueprintmodels.com/wp-content/uploads/2022/08/House-with-Swimming-Pool-Architectural-model.jpg", category: "3d" },
    { id: 55, name: "Car model frame design", image: "https://www.alldiecast.co.uk/images/images_miniatures_500/matrix-jaguar-xjr-xj40-dunkelgrun-1991-1-43-1.jpg", category: "3d" },
    { id: 56, name: "Business card holder", image: "https://enchantedmemoriesbranson.com/cdn/shop/products/Engraved-Marble-Business-Card-Holder-For-Desk-Corporate-Logo-Etched-with-Name-and-Title-Wedge.jpg?v=1593731729&width=1445", category: "3d" },
    { id: 57, name: "Custom phone stand base", image: "https://i.etsystatic.com/27728656/r/il/35e3b5/3921571655/il_570xN.3921571655_5wbt.jpg", category: "3d" },
    { id: 58, name: "Miniature human statue", image: "https://p.turbosquid.com/ts-thumb/dM/isna93/PL/the_thinker_statue_marble_360/jpg/1654074888/1920x1080/turn_fit_q99/e35cb7d8bca22fd8ed22b93fb4ae271c17b8e903/the_thinker_statue_marble_360-1.jpg", category: "3d" },
    { id: 59, name: "Small tool case", image: "https://www.cobrafoaminserts.com/cdn/shop/collections/tools_cropped-680x300_1350x760.jpg?v=1693818986", category: "3d" },
    { id: 60, name: "Tourist landmark model", image: "https://media.cgtrader.com/variants/vWKNHFZVuvbfSuYfSmER8Eb8/c4dfab5c8344acd5afd54555808fa611d594931395cc672cd1ed830a80a8f66c/Preview%20%282%29.jpg", category: "3d" }
  ]}
    



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


export const select3DProducts = (state) =>
  state.products.products.filter((product) => product.category === "3d");

export default productSlice.reducer;
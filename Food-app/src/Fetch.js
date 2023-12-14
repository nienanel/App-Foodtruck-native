// import React, { useState, useEffect, useCallback } from 'react'
// import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
// import { firebase } from "../firebaseConfig";

// import ItemDetailModal from '../components/ItemDetailModal';

// const FetchFiltered = ({ selectedCategory }) => {
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [selectedItem, setSelectedItem] = useState(null)

//     const dataRef = useCallback(() => {
//         return firebase.firestore().collection('Menu');
//     }, []);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let query = dataRef();
//                 if (selectedCategory) {
//                     query = query.where('category', '==', selectedCategory);
//                 }
//                 const querySnapshot = await query.get()
//                 const items = querySnapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     ...doc.data(),
//                     category: doc.data().category,
//                 }));
//                 setData(items)
//                 setLoading(false)
//             } catch (error) {
//                 console.error("error en el fetch de la data", error);
//             }
//         }
//         fetchData()
//     }, [selectedCategory, dataRef])

//     if (loading) {
//         return (
//             <View>
//                 <Text>Loading...</Text>
//             </View>
//         )
//     }

//     const handlePressItem = (item) => {
//         setSelectedItem(item)
//     }

//     return (
//         <ScrollView 
//             contentContainerStyle={{
//                 paddingHorizontal: 15,
//                 paddingTop: 20,
//                 paddingBottom: 30,
//                 gap: 10
//             }}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//         >
        
//                 {data.map((item) => (
//                     <TouchableOpacity key={item.id} onPress={() => handlePressItem(item)}>
//                         <View className="shadow-md shadow-black rounded-lg overflow-hidden">
//                             <View className="bg-red-600 p-2">
//                                 <Text className="text-lg font-semibold text-center">{item.name}</Text>
//                             </View>
//                             <View className="p-3 bg-red-400">
//                                 <Image
//                                     source={{ uri: item.img }}
//                                     style={{ width: "100", height: 150, objectFit: "cover", borderRadius: 8, resizeMode: "cover" }}
//                                 />
//                                 <Text className="text-gray-700 my-3 text-center">{item.description}</Text>
//                                 <View className="flex justify-between items-center">
//                                     <Text className="text-red-500 font-semibold mb-2">{"$" + item.price}</Text>
//                                     <TouchableOpacity className="bg-black px-4 py-2 rounded">
//                                         <Text className="text-white">Add to cart</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                 ))}
        
//             {selectedItem && <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
//         </ScrollView>
//     )
// }

// export default FetchFiltered

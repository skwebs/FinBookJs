// import React from 'react';
// import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// import UserImage from '../../../assets/images/user.png';


// const CustomerCard = ({ item, onPress, onLongPress }) => {

//   return (
//     <Pressable onPress={() => onPress(item.id)} onLongPress={() => onLongPress(item.id)}>
//       {({ pressed }) => (
//         <View style={[styles.pressedBtn, { backgroundColor: pressed ? '#fafafa' : 'white', padding: 5 }]}>

//           <View>
//             <View style={{ display: 'flex', flexDirection: 'row' }}>

//               <View style={{ borderRadius: '100%', backgroundColor: '#eee', padding: 10, margin: 5 }}>
//                 <Image
//                   source={UserImage}
//                   style={styles.image}
//                 />
//               </View>

//               <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//                 <View>
//                   <Text>{item.name}</Text>
//                 </View>
//                 <View>
//                   <Text style={{ fontSize: 11 }}>Last transaction date and amount</Text>
//                 </View>
//               </View>

//               <View style={{ padding: 5 }}>
//                 <Text style={{ textAlign: 'right', fontWeight: 700 }}>88,88,888</Text>
//               </View>

//             </View>
//           </View>

//         </View>
//       )}

//     </Pressable>
//   );
// };
// export default CustomerCard;
// const styles = StyleSheet.create({
//   pressedBtn: {
//     display: 'flex',
//     flex: 1,
//     justifyContent: 'space-between',
//     borderTopColor: '#efefef',
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     // iOS Shadow
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     // Android Shadow
//     // elevation: 10,
//   },
//   contentWrapper: {
//     display: 'flex',
//     flex: 1,
//     flexDirection: 'row',
//   },
//   image: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//     borderRadius: 10,
//   },
// });
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserImage from '../../../assets/images/user.png';

const CustomerCard = ({ item, onPress, onLongPress }) => {

  return (
    <Pressable onPress={() => onPress(item.id)} onLongPress={() => onLongPress(item.id)}>
      {({ pressed }) => (
        <View style={[styles.cardContainer, pressed ? styles.cardOnPressedBg : styles.cardNormalBg]}>
          <View style={styles.cardContent}>
            <View style={styles.rowContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={UserImage}
                  style={styles.image}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.transactionInfo}>Last transaction date and amount</Text>
              </View>

              <View style={styles.amountContainer}>
                <Text style={styles.amountText}>88,88,888</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default CustomerCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between',
    borderTopColor: '#efefef',
    backgroundColor: 'white',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  cardOnPressedBg: {
    backgroundColor: '#fafafa',
  },
  cardNormalBg: {
    backgroundColor: '#fff',
  },
  imageWrapper: {
    borderRadius: 50,
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
  },
  image: {
    width: 24,
    height: 24,
    tintColor: 'white',
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionInfo: {
    fontSize: 11,
    color: '#555',
  },
  amountContainer: {
    padding: 5,
  },
  amountText: {
    textAlign: 'right',
    fontWeight: '700',
  },
});

// export { auth } from './init';

// export const countLikes = (objNote) => {
//   const user = firebase.auth().currentUser;
//   firebase.firestore().collection('notes').doc(objNote.id).update({
//     likes: firebase.firestore.FieldValue.increment(1),
//     likers: objNote.likers.concat([
//       {
//         user: user.displayName,
//         uid: user.uid,
//       },
//     ]),
//   });
// };

// export const dislike = (objNote) => {
//   const user = firebase.auth().currentUser;
//   firebase.firestore().collection('notes').doc(objNote.id).update({
//     likes: firebase.firestore.FieldValue.increment(-1),
//     likers: objNote.likers.filter(element => element.uid !== user.uid),
//   });
// };

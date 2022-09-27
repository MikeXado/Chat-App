import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import {
  getClickedUserUid,
  changeOpened,
} from "../../../redux/slices/chatSlice";
export default function RegisteredUsers() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("timeStamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((user) => {
        users.push({ ...user.data(), id: user.id });
      });
      setUsers(users);
    });
    return () => unsubscribe();
  }, []);

  const addChat = async (user) => {
    const combinedUid =
      auth.currentUser?.uid > user.uid
        ? auth.currentUser?.uid + user.uid
        : user.uid + auth.currentUser?.uid;
    dispatch(getClickedUserUid({ uid: combinedUid }));
    const res = await getDoc(doc(db, "chats", combinedUid));
    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedUid), { messages: [] });
    }
  };

  return (
    <div className="registered-users">
      {users.map((user) =>
        user.uid !== auth.currentUser?.uid ? (
          <div
            key={user.id}
            className="registered-user"
            onClick={() => {
              addChat(user);
              dispatch(changeOpened());
            }}
          >
            <img
              className="avatar"
              src={user?.icon}
              alt="avatar"
              referrerPolicy="no-referrer"
            />
            <div className="registered-user__info">
              <div className="registered-user__name">{user.displayName}</div>
              <div className="registered-user__email">{user.email}</div>
            </div>
          </div>
        ) : (
          <div key={user.id}></div>
        )
      )}
    </div>
  );
}

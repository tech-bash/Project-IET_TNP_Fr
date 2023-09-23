import React from "react";
import styled from "styled-components";


const ProfileView = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
      // Fetch user profile data from the API
      fetch("http://127.0.0.1:8000/api/account/profile/")
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching profile:", error));
    }, []);

  if (!userData) {
      return <div>Loading...</div>;
    }

  return (
    <ProfileContainer>
      <ProfileHeader>User Profile</ProfileHeader>
      <ProfileInfo>
        <ProfileLabel>Username:</ProfileLabel>
        <ProfileValue>{user.username}</ProfileValue>
      </ProfileInfo>
      <ProfileInfo>
        <ProfileLabel>Email:</ProfileLabel>
        <ProfileValue>{user.email}</ProfileValue>
      </ProfileInfo>
      <ProfileInfo>
        <ProfileLabel>Full Name:</ProfileLabel>
        <ProfileValue>{user.fullName}</ProfileValue>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default ProfileView;
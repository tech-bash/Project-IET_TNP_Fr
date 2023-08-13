import React from "react";
import styled from "styled-components";


const ProfileView = () => {
  // Sample user data, replace with actual user data from your API or state
  const user = {
    username: "john_doe",
    email: "john@example.com",
    fullName: "John Doe",
    // Add more profile data as needed
  };

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
      {/* Add more profile information here */}
    </ProfileContainer>
  );
};

export default ProfileView;
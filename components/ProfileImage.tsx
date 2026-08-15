'use client';

export default function ProfileImage() {
  return (
    <img
      src="/profile.png"
      alt="Gaurav Garwa"
      className="profile-img"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}

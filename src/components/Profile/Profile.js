import { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Vu',
    lastName: 'Duc Anh',
  });

  useEffect(() => {
    console.log(1);
  }, [profile.lastName]);

  return (
    <div>
      <input
        className="border-spacing-y-5"
        type="text"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
    </div>
  );
};

export default Profile;

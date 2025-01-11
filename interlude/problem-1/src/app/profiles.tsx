import { useEffect, useState } from "react";
import Image from "next/image";

// ✅ Define a Type for Profile Data
type Profile = {
  name: string;
  email: string;
  photo: string;
};

export default function Profiles() {
  // ✅ Use `useState<Profile[]>` to prevent "never[]" error
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch("/api/profiles")
      .then((res) => res.json())
      .then((data: Profile[]) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <div>
      <h1>Employee Profiles</h1>
      <div className="grid grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <div key={profile.email} className="p-4 border rounded">
            {/* ✅ Replace <img> with Next.js <Image /> for better performance */}
            <Image
              src={profile.photo}
              alt={profile.name}
              width={80} // Set a fixed width
              height={80} // Set a fixed height
              className="rounded-full"
            />
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

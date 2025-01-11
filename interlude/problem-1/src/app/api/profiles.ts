import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profilesPath = path.join(process.cwd(), "public/profiles");
  
  // Read all employee folders
  const employeeDirs = fs.readdirSync(profilesPath);
  
  const profiles = employeeDirs.map((employee) => {
    const contactFile = path.join(profilesPath, employee, "contact.json");
    const contactData = JSON.parse(fs.readFileSync(contactFile, "utf-8"));

    return {
      name: contactData.name,
      email: contactData.email,
      photo: `/profiles/${employee}/photo.jpg`,
    };
  });

  res.status(200).json(profiles);
}

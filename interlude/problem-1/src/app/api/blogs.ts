import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next"; // Import the necessary types

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const profilesPath = path.join(process.cwd(), "public/profiles");
    const employees = fs.readdirSync(profilesPath);

    const blogs = employees.flatMap((employee) => {
      const blogPath = path.join(profilesPath, employee, "blog");

      // Check if the blog directory exists for the employee
      if (!fs.existsSync(blogPath)) return [];

      return fs.readdirSync(blogPath).map((file) => {
        const filePath = path.join(blogPath, file);
        const content = fs.readFileSync(filePath, "utf-8");

        // Parse markdown data and content using gray-matter
        const { data, content: body } = matter(content);

        return { author: employee, ...data, body };
      });
    });

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error reading blogs:", error);
    res.status(500).json({ error: "Failed to load blogs" });
  }
}

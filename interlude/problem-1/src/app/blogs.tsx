import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

// Define the types for the response data
type BlogPost = {
  author: string;
  title: string;
  date: string;
  body: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profilesPath = path.join(process.cwd(), "public/profiles");
  const employees = fs.readdirSync(profilesPath);

  // Get the list of blogs
  const blogs: BlogPost[] = employees.flatMap((employee) => {
    const blogPath = path.join(profilesPath, employee, "blog");

    // Check if the blog folder exists
    if (!fs.existsSync(blogPath)) return [];

    // Read the markdown files and extract the metadata and content
    return fs.readdirSync(blogPath).map((file) => {
      const content = fs.readFileSync(path.join(blogPath, file), "utf-8");
      const { data, content: body } = matter(content);

      // Provide default values for 'title' and 'date' if missing
      const title = data.title || "Untitled"; // Default title if missing
      const date = data.date || new Date().toISOString(); // Default to current date if missing

      // Return the BlogPost with title and date
      return { author: employee, title, date, body };
    });
  });

  // Send the response
  res.status(200).json(blogs);
}

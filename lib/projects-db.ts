import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function getUserByEmail(email: string) {
  if (email === "admin@example.com") {
    return {
      id: "1",
      email: "admin@example.com",
      name: "Admin Sterling",
      passwordHash: "$2b$10$x8IWd4QcEAQXi0p0ZUg3qO43fUIEQaISQA167hDgKJj4k69UIknYG" 
    };
  }
  return null;
}
'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ProjectFormSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  type: z.enum(['opensource', 'school']),
  technologies: z.string().min(2, 'Technologies must include at least one tag'),
  link: z.string().url().optional().or(z.literal('')),
});

export async function createProject(formData: FormData) {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    console.error('Validation error:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid form submission');
  }

  const { title, description, type, technologies, link } = parsed.data;

  const techArray = technologies
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies, link)
      VALUES (${title}, ${description}, ${type}, ${techArray as any}, ${link || null});
    `;
  } catch (error) {
    console.error('Database insert error:', error);
    throw new Error('Failed to create project');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: number, formData: FormData) {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    console.error('Validation error:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid form submission');
  }

  const { title, description, type, technologies, link } = parsed.data;

  const techArray = technologies
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  try {
    await sql`
      UPDATE projects
      SET 
        title = ${title}, 
        description = ${description}, 
        type = ${type}, 
        technologies = ${techArray as any}, 
        link = ${link || null}
      WHERE id = ${id};
    `;
  } catch (error) {
    console.error('Database update error:', error);
    throw new Error('Failed to update project');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: number) {
  try {
    await sql`
      DELETE FROM projects 
      WHERE id = ${id};
    `;
  } catch (error) {
    console.error('Database delete error:', error);
    throw new Error('Failed to delete project');
  }

  revalidatePath('/projects');
}

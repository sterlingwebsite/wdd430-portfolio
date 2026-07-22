'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    type?: string[];
    technologies?: string[];
    link?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

const ProjectFormSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  type: z.enum(['opensource', 'school']),
  technologies: z.string().min(2, 'Technologies must include at least one tag'),
  link: z.string().url().optional().or(z.literal('')),
  yearCompleted: z.coerce
    .number()
    .int()
    .min(2000, 'Year must be 2000 or later')
    .max(2099, 'Year must be 2099 or earlier'),
});

export async function createProject(prevState: State, formData: FormData): Promise<State> {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
    yearCompleted: formData.get('yearCompleted'),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  
  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }

  const { title, description, type, technologies, link, yearCompleted } = parsed.data;

  const techArray = technologies
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies, link, year_completed)
      VALUES (${title}, ${description}, ${type}, ${techArray as any}, ${link || null}, ${yearCompleted});
    `;
  } catch (error) {
    console.error('Database insert error:', error);
    return {
      message: 'Database Error: Failed to Create Project.',
    };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: number, prevState: State, formData: FormData): Promise<State> {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
    yearCompleted: formData.get('yearCompleted'),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      message: 'Missing Fields. Failed to Update Project.',
    };
  }

  const { title, description, type, technologies, link, yearCompleted } = parsed.data;

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
        link = ${link || null},
        year_completed = ${yearCompleted}
      WHERE id = ${id};
    `;
  } catch (error) {
    console.error('Database update error:', error);
    return {
      message: 'Database Error: Failed to Update Project.',
    };
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

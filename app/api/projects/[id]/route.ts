import { NextRequest, NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  try {
    const resolvedParams = await params;
    const rawId = resolvedParams.id;

    const id = Number(rawId);

    if (Number.isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid id: ID must be a valid number' }, 
        { status: 400 }
      );
    }

    const project = getProjectById(id);

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

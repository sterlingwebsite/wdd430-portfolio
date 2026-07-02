// app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const type = searchParams.get('type');

    const projectsList = getProjects(type);

    return NextResponse.json(projectsList, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

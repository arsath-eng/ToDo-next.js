import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Todo from '@/models/Todo';

export async function GET() {
  await dbConnect();
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  return NextResponse.json(todos);
}

export async function POST(request) {
  const { text } = await request.json();
  await dbConnect();
  const todo = await Todo.create({ text });
  return NextResponse.json(todo);
}

export async function PUT(request) {
  const { id, completed } = await request.json();
  await dbConnect();
  const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  return NextResponse.json(todo);
}

export async function DELETE(request) {
  const { id } = await request.json();
  await dbConnect();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Todo deleted' });
}
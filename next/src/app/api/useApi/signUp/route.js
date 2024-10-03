import connect from '../../../config/db';
import UserNext from '../../../models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { email, password } = await req.json();
  await connect();

  try {
    const existingUser = await UserNext.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserNext({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}

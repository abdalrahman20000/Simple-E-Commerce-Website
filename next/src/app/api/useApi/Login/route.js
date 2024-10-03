import connect from '../../../config/db';
import UserNext from '../../../models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export async function POST(req) {
  const { email, password } = await req.json();
  await connect();

  try {
    const user = await UserNext.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "abod", { expiresIn: '1h' });

    return NextResponse.json({ message: 'Login successful', token, user: { email: user.email } }, { status: 200 });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ message: 'Error logging in', error }, { status: 500 });
  }
}

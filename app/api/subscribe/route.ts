import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error:"Email required" }, { status:400 });
    await resend.emails.send({ from:"Richard at Harmonia <hello@harmoniawisdom.com>", to:[email], subject:"Welcome to Harmonia", html:`<p>Welcome to the Sacred Circle. <a href="https://harmoniawisdom.com/courses/free-starter-pack">Start your free practice →</a></p>` });
    return NextResponse.json({ success:true });
  } catch (e) { return NextResponse.json({ error:"Failed" }, { status:500 }); }
}

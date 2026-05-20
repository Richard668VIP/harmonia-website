import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json();
    if (!name || !email || !message) return NextResponse.json({ error:"Missing fields" }, { status:400 });
    await resend.emails.send({ from:"Harmonia <hello@harmoniawisdom.com>", to:["hello@harmoniawisdom.com"], replyTo:email, subject:`[${type}] Enquiry from ${name}`, html:`<h2>${name}</h2><p>${email}</p><p>${message}</p>` });
    await resend.emails.send({ from:"Richard at Harmonia <hello@harmoniawisdom.com>", to:[email], subject:"Thank you — Harmonia", html:`<p>Dear ${name}, thank you for reaching out. We reply within 2 business days.<br/><a href="https://harmoniawisdom.com/courses/free-starter-pack">Begin Free →</a><br/>Richard</p>` });
    return NextResponse.json({ success:true });
  } catch (e) { return NextResponse.json({ error:"Failed" }, { status:500 }); }
}

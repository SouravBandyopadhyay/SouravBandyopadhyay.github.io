import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_aGC1GLoc_9q5djEnneMKmAHDVC3zTrJzc");

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { name, email, message } = await request.json();
    // console.log(name, email, message);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: `New Message from ${name}`,
      react: EmailTemplate({ name: name, message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

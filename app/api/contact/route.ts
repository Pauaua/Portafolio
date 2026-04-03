import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL ?? "paulinefugit@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // Con la cuenta gratuita de Resend solo puedes enviar desde
      // onboarding@resend.dev hasta que verifiques tu dominio propio.
      from: "Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Mensaje de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f1a;color:#ede9fe;border-radius:12px;">
          <h2 style="color:#c084fc;font-weight:400;margin-top:0;">Nuevo mensaje desde tu portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#8e8aab;font-size:13px;width:90px;">Nombre</td>
              <td style="padding:8px 0;font-size:14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#8e8aab;font-size:13px;">Email</td>
              <td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#c084fc;">${email}</a></td>
            </tr>
            ${subject ? `<tr><td style="padding:8px 0;color:#8e8aab;font-size:13px;">Asunto</td><td style="padding:8px 0;font-size:14px;">${subject}</td></tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #252538;margin:20px 0;" />
          <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #252538;margin:20px 0;" />
          <p style="font-size:12px;color:#8e8aab;">Enviado desde paulinaacuna.dev — responde directamente a este email.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}

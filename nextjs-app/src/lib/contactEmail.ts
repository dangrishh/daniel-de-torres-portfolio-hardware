function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  facebook: string;
  device: string;
  concern: string;
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;">
        <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:#64748b;">
          ${label}
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#101825;line-height:1.5;">
          ${value}
        </p>
      </td>
    </tr>`;
}

export function renderContactEmail(data: ContactEmailData): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const facebookRaw = data.facebook.trim();
  const facebookHref = facebookRaw
    ? /^https?:\/\//i.test(facebookRaw)
      ? facebookRaw
      : `https://${facebookRaw.replace(/^@/, "facebook.com/")}`
    : "";
  const facebook = escapeHtml(facebookRaw);
  const facebookHrefEscaped = escapeHtml(facebookHref);
  const device = escapeHtml(data.device);
  const concern = escapeHtml(data.concern).replace(/\n/g, "<br />");
  const initial = data.name.trim().charAt(0).toUpperCase() || "?";

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New inquiry — DTech Solutions</title>
  </head>
  <body style="margin:0;padding:0;background-color:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none;font-size:1px;color:#eef2f7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
      New repair inquiry from ${name} about a ${device} — ${data.concern.slice(0, 100)}
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(10,20,40,0.08);">
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,#29b6f6,#0d47a1);background-color:#1565c0;padding:32px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="middle" width="46">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="width:40px;height:40px;background-color:rgba(255,255,255,0.22);border-radius:11px;">
                        <tr>
                          <td align="center" valign="middle" style="width:40px;height:40px;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:900;color:#ffffff;">
                            D
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="middle" style="padding-left:12px;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:800;color:#ffffff;">
                        DTech Solutions
                      </p>
                      <p style="margin:2px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;color:rgba(255,255,255,0.85);">
                        Cellphone &middot; Laptop &middot; PC &middot; CCTV Repair
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Title -->
            <tr>
              <td style="padding:32px 32px 4px;">
                <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#1565c0;">
                  New Website Inquiry
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="middle" style="width:44px;height:44px;background-color:#e3f2fd;border-radius:50%;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" valign="middle" style="width:44px;height:44px;font-family:Arial,Helvetica,sans-serif;font-size:17px;font-weight:800;color:#1565c0;">
                            ${initial}
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="middle" style="padding-left:14px;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:800;color:#101825;">
                        ${name}
                      </p>
                      <p style="margin:2px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;">
                        wants help with a <strong style="color:#101825;">${device}</strong>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Details -->
            <tr>
              <td style="padding:12px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Email", `<a href="mailto:${email}" style="color:#1565c0;text-decoration:none;">${email}</a>`)}
                  ${row("Contact number", `<a href="tel:${phone}" style="color:#101825;text-decoration:none;">${phone}</a>`)}
                  ${facebook ? row("Facebook", `<a href="${facebookHrefEscaped}" style="color:#1565c0;text-decoration:none;">${facebook}</a>`) : ""}
                  ${row("Device model / brand", device)}
                </table>
                <p style="margin:18px 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:#64748b;">
                  Concern
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef3f9;border-radius:12px;">
                  <tr>
                    <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#101825;">
                      ${concern}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- CTA -->
            <tr>
              <td style="padding:24px 32px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-radius:50px;background:linear-gradient(135deg,#29b6f6,#0d47a1);background-color:#1565c0;">
                      <a href="mailto:${email}" style="display:inline-block;padding:13px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:50px;">
                        Reply to ${name} &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px;background-color:#eef3f9;border-top:1px solid #e2e8f0;">
                <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#101825;">
                  DTech Solutions &middot; Daniel De Torres
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#64748b;line-height:1.6;">
                  Pansol, Calamba City, Laguna, Philippines &middot;
                  <a href="tel:+639243672984" style="color:#64748b;">0924-367-2984</a>
                </p>
                <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#b3ada0;">
                  Sent automatically from the DTech Solutions website contact form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

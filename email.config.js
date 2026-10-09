/**
 * Love Vault Email Service Configuration — Two Years of Us (Mitu ❤️ Ayu)
 *
 * This configuration enables live email delivery directly on GitHub Pages via EmailJS.
 * No separate backend, server, or cloud deployment is required!
 *
 * 💌 Target Recipient: maitrepatel1805.5@gmail.com
 * (Configured securely as the default recipient; never displayed publicly in the website UI).
 *
 * HOW TO GET YOUR 3 EMAILJS KEYS (Takes ~2 minutes):
 * 1. Create a free account at https://www.emailjs.com/
 * 2. In Email Services:
 *    - Click "Add New Service" -> select "Gmail".
 *    - Connect your Gmail account and click "Create Service".
 *    - Copy your Service ID (e.g. "service_xxxxxxx") -> paste below into `serviceId`.
 * 3. In Email Templates:
 *    - Click "Create New Template".
 *    - Subject: 💌 Ayu Has Made a Wish for Year Three! (or {{subject}})
 *    - In the Template Content box:
 *        Feature: {{feature_name}}
 *        Sender: {{sender_name}}
 *        Date & Time: {{submission_date}}
 *
 *        Wish:
 *        {{wish_text}}
 *    - In the Template "Settings" tab:
 *        Set "To Email" to: maitrepatel1805.5@gmail.com (or {{to_email}})
 *    - Save and copy your Template ID (e.g. "template_xxxxxxx") -> paste below into `templateId`.
 * 4. In Account Settings (https://dashboard.emailjs.com/admin/account):
 *    - Copy your Public Key (e.g. "xxxxxxxxxxxxxxxxxxxx") -> paste below into `publicKey`.
 */

window.LOVE_VAULT_CONFIG = {
  // Replace these with your actual EmailJS credentials:
  serviceId: "service_rd0ad7t",    // Your EmailJS Service ID (e.g. "service_xxxxxxx")
  templateId: "template_vxu8zkc",   // Your EmailJS Template ID (e.g. "template_xxxxxxx")
  publicKey: "MN6FmesXd4XD3z2Nd",    // Your EmailJS Public Key (e.g. "xxxxxxxxxxxxxxxxxxxx")

  // Target Recipient & Sender (used internally by template; never shown in UI)
  recipientEmail: "maitrepatel1805.5@gmail.com",
  senderEmail: "maitrepatel1805.5@gmail.com"
};

// Backward-compatibility alias
window.LOVE_VAULT_EMAIL_CONFIG = window.LOVE_VAULT_CONFIG;

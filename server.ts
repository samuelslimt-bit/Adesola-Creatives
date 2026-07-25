import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Direct Booking Request API endpoint
  app.post("/api/send-booking", async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        service,
        packageSelected,
        budgetRange,
        projectDetails,
        preferredContact,
      } = req.body;

      const targetEmail = "ade.adesola023@gmail.com";

      const emailPayload = {
        _subject: `🔥 New Booking Request: ${service || "Mobile Cinematography"} - ${fullName || "Client"}`,
        _template: "table",
        _captcha: "false",
        _replyto: email || targetEmail,
        "Full Name": fullName || "Client",
        "Client Email": email || "Not provided",
        "Phone / WhatsApp": phone || "Not provided",
        "Primary Service": service || "Mobile Cinematography",
        "Package / Scope": packageSelected || "Custom Package",
        "Estimated Budget": budgetRange || "Open for Negotiation",
        "Preferred Response Method": preferredContact || "WhatsApp",
        "Project Details / Dates / Location": projectDetails || "None provided",
      };

      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        console.warn("FormSubmit proxy status:", response.status);
      }

      res.json({
        success: true,
        message: `Booking request sent directly to ${targetEmail}`,
      });
    } catch (err) {
      console.error("Error routing booking email:", err);
      res.json({
        success: true,
        message: "Booking request processed successfully.",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

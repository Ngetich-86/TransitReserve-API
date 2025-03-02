import { Hono } from "hono";
// import { createContactController, getContactsController, resolveContactController } from "../Contact/contact.controller";
import { createContactController, getContactsController, resolveContactController  } from "./Contact.controller";

const contactRoutes = new Hono();

contactRoutes
  .post("/contacts", createContactController) // Create a contact message
  .get("/contacts", getContactsController) // Get all contact messages
  .patch("/contacts/:id/resolve", resolveContactController); // Mark as resolved

export default contactRoutes;

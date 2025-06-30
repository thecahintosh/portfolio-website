"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string



  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  await new Promise((resolve) => setTimeout(resolve, 1000))


  redirect("/contact?success=true")
}

"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createCharacter(formData: FormData) {
  await prisma.character.create({
    data: {
      name: formData.get("name") as string,
      attack: Number(formData.get("attack") || 10),
      defense: Number(formData.get("defense") || 10),
      healthPoints: Number(formData.get("healthPoints") || 100),
    },
  });
  revalidatePath("/characters");
}

import { createCharacter } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function CharactersPage() {
  const characteres = await prisma.character.findMany();

  return (
    <div>
      <h1 className="text-center font-mono text-2xl text-indigo-500">
        Liste de mes personnages !
      </h1>
      <ul className="mx-auto my-10 flex w-4/5 flex-wrap items-center justify-evenly rounded-md bg-zinc-50/10 p-8">
        {characteres.map((character) => (
          <li key={character.id} className="font-mono">
            {character.name}{" "}
            <Link
              className="text-red-500 underline transition-colors hover:text-indigo-500"
              href={`/characters/character/${character.name}`}
            >
              Voir le personnage
            </Link>
          </li>
        ))}
      </ul>

      <form
        action={createCharacter}
        className="mx-auto flex w-1/2 flex-col items-center justify-evenly gap-7 rounded-lg bg-zinc-300 p-4"
      >
        <div className="flex flex-col items-center">
          <label
            htmlFor="name"
            className="font-mono font-bold  tracking-wide text-black"
          >
            Nom du personnage
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom"
            className="rounded-lg border border-indigo-500 bg-slate-400 p-2 text-lg italic tracking-wider transition-colors placeholder:italic placeholder:tracking-widest placeholder:text-pink-500/60 hover:bg-slate-600"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-black p-2 font-bold text-white shadow-lg transition-colors hover:bg-white hover:text-black"
        >
          Ajouter un personnage
        </button>
      </form>
    </div>
  );
}

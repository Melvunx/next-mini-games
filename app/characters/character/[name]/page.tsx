import prisma from "@/lib/db";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const character = await prisma.character.findUnique({
    where: { name },
  });

  if (!character) {
    return <h1 className="text-red-700">Personnage non trouvé</h1>;
  }

  return (
    <div>
      {" "}
      <h1 className="py-10 text-center text-5xl font-bold text-indigo-400">
        {name}
      </h1>
      <ul className="flex min-h-screen flex-col items-center justify-evenly">
        <li className="rounded-lg bg-gray-300 p-3 text-black">
          Attaque: {character.attack}
        </li>
        <li className="rounded-lg bg-gray-300 p-3 text-black">
          Defence: {character.defense}
        </li>
        <li className="rounded-lg bg-gray-300 p-3 text-black">
          Hp: {character.healthPoints}
        </li>
        <li className="rounded-lg bg-gray-300 p-3 text-black">
          Xp: {character.experience}
        </li>
      </ul>
    </div>
  );
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPhrases = async () => {
  return await prisma.phrases.findMany();
}

export const createPhrase = async (phraseName: string) => {
  return await prisma.phrases.create({
    data: {
      body: phraseName,
			wordCount: Number(phraseName.split(" ").length),
			topic: { connect: { id: 1 } },
    }
  });
}

export const deletePhrase = async(id: number) => {
  
  return await prisma.phrases.delete({
      
      where: {
        id: Number(id), 
      } ,
    
  });


}
import { z } from "zod";

export const SegmentoSchema = z.enum([
  "Tecnologia",
  "Comércio",
  "Indústria",
  "Serviços",
  "Agronegócio",
]);

export const StatusSchema = z.enum(["ativo", "inativo"]);

export const EmpreendimentoCreateSchema = z.object({
  nome: z.string().min(1),
  responsavel: z.string().min(1),
  municipio: z.string().min(1),
  segmento: SegmentoSchema,
  contato: z.string().min(1),
  status: StatusSchema.optional(),
});

export const EmpreendimentoUpdateSchema = EmpreendimentoCreateSchema.partial();

export type EmpreendimentoCreateInput = z.infer<
  typeof EmpreendimentoCreateSchema
>;
export type EmpreendimentoUpdateInput = z.infer<
  typeof EmpreendimentoUpdateSchema
>;

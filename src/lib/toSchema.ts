import { z } from "zod";

export const clueZ = z.union([
  z.object({
    cells: z.array(z.number()),
    direction: z.string(),
    label: z.string(),
    text: z.array(z.object({ plain: z.string() })),
  }),
  z.object({
    cells: z.array(z.number()),
    direction: z.string(),
    label: z.string(),
    list: z.number(),
    text: z.array(z.object({ plain: z.string() })),
  }),
  z.object({
    cells: z.array(z.number()),
    direction: z.string(),
    label: z.string(),
    list: z.number(),
    text: z.array(z.object({ formatted: z.string(), plain: z.string() })),
  }),
]);
export const cellZ = z.object({
  answer: z.string().optional(),
  clues: z.array(z.number()).optional(),
  label: z.string().optional(),
  type: z.number().optional(),
});

export const board = z.object({
  board: z.string(),
  cells: z.array(cellZ),
  clueLists: z.array(
    z.object({ clues: z.array(z.number()), name: z.string() }),
  ),
  clues: z.array(clueZ),
  dimensions: z.object({ height: z.number(), width: z.number() }),
  SVG: z.object({
    name: z.string(),
    attributes: z.array(z.object({ name: z.string(), value: z.string() })),
    children: z.array(
      z.union([
        z.object({
          name: z.string(),
          children: z.array(
            z.object({
              name: z.string(),
              attributes: z.array(
                z.object({ name: z.string(), value: z.string() }),
              ),
              children: z.array(
                z.object({
                  name: z.string(),
                  attributes: z.array(
                    z.object({ name: z.string(), value: z.string() }),
                  ),
                }),
              ),
            }),
          ),
        }),
        z.object({
          name: z.string(),
          attributes: z.array(
            z.object({ name: z.string(), value: z.string() }),
          ),
          children: z.array(
            z.union([
              z.object({
                name: z.string(),
                children: z.array(
                  z.union([
                    z.object({
                      name: z.string(),
                      attributes: z.array(
                        z.object({ name: z.string(), value: z.string() }),
                      ),
                    }),
                    z.object({
                      name: z.string(),
                      attributes: z.array(
                        z.object({ name: z.string(), value: z.string() }),
                      ),
                      content: z.string(),
                    }),
                  ]),
                ),
              }),
              z.object({
                name: z.string(),
                children: z.array(
                  z.object({
                    name: z.string(),
                    attributes: z.array(
                      z.object({ name: z.string(), value: z.string() }),
                    ),
                  }),
                ),
              }),
            ]),
          ),
        }),
        z.object({
          name: z.string(),
          attributes: z.array(
            z.object({ name: z.string(), value: z.string() }),
          ),
          children: z.array(
            z.object({
              name: z.string(),
              attributes: z.array(
                z.object({ name: z.string(), value: z.string() }),
              ),
            }),
          ),
        }),
      ]),
    ),
    styles: z.array(z.object({ name: z.string(), value: z.string() })),
  }),
});

export const toSchema = z.object({
  body: z.array(board),
  constructors: z.array(z.string()),
  copyright: z.string(),
  id: z.number(),
  lastUpdated: z.string(),
  publicationDate: z.string(),
  subcategory: z.number(),
});

import { Request, Response } from 'express';

export default async function waifuHandler(req: Request, res: Response) {
    try {
        const apiResponse = await fetch("https://api.waifu.pics/sfw/waifu");
        
        if (!apiResponse.ok) {
            throw new Error(`Waifu API error: ${apiResponse.status}`);
        }
        
        const data = await apiResponse.json() as { url: string };
        
        // Formato exacto que pediste
        res.json({
            url: data.url
        });
        
    } catch (error) {
        console.error("Error waifu:", error);
        
        // En caso de error, también devolvemos solo "url" (vacío o mensaje)
        res.status(500).json({
            url: null
            // o si prefieres: url: "error al obtener waifu"
        });
    }
}
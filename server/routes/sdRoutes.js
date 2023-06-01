import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/:prompt').post( async(req, res) => {
    const Prompt = req.params.prompt;
    try {
        const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "key": process.env.SD_API_KEY,
              "prompt": Prompt,
              "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
              "width": "512",
              "height": "512",
              "samples": "1",
              "num_inference_steps": "20",
              "seed": null,
              "guidance_scale": 7.5,
              "webhook": null,
              "track_id": null
          }),
          });
          const data = await response.json();
          const image = data.output[0]
          res.status(200).json({photo: image})
    } catch (error) {
        console.log(error)
    }
})

export default router;
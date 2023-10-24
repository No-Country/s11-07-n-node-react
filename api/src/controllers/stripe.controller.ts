import { Response, Request } from 'express'
import Stripe from 'stripe'
import { envs } from '../config/envs.config'
import fakeData from '../data/fake-data/fake-data'

interface StripeConfig {
  apiKey: string
}

const stripeConfig: StripeConfig = {
  apiKey: envs.API_KEY_STRIPE
}

const stripe = new Stripe(stripeConfig.apiKey, { apiVersion: '2023-10-16' })

export class StripeController {
  async createCheckoutSession (req: Request, res: Response): Promise<void> {
    const lineItems = fakeData.services.map((data) => ({
      quantity: data.quantity,
      price_data: {
        product_data: {
          name: data.name,
          images: [data.image],
          description: data.description
        },
        currency: data.price_data.currency,
        unit_amount: data.price
      }

    }))

    const session = await stripe.checkout.sessions.create({
      line_items: [...lineItems],
      mode: 'payment',
      success_url: 'http://localhost:3000/api/v1/success',
      cancel_url: 'http://localhost:3000/api/v1/cancel'
    })
    // .then(session => {
    //   res.json({ id: session.id })
    // })
    // .catch(error => {
    //   res.json({ error })
    // })

    res.json({ session })
  }

  async success (req: Request, res: Response): Promise<void> {
    res.json({ message: 'Success json' })
  }

  async webhook (req: Request, res: Response): Promise<void> {
    res.json({ message: 'Webhook json' })
  }

  async cancel (req: Request, res: Response): Promise<void> {
    res.json({ message: 'Cancel json' })
  }
}

// const session = await stripe.checkout.sessions.create({
//   line_items: [
//     {
//       quantity: 2,
//       price_data: {
//         product_data: {
//           name: 'Laptop',
//           images: ['https://i.imgur.com/EHyR2nP.png'],
//           description: 'Laptop de 16 pulgadas, 1TB de disco duro, 16GB de RAM, procesador i7, tarjeta gráfica 2GB'
//         },
//         currency: 'ars',
//         unit_amount: 100000
//       }

//     },
//     {
//       quantity: 4,
//       price_data: {
//         product_data: {
//           name: 'TV',
//           images: ['https://i.imgur.com/EHyR2nP.png'],
//           description: 'TV de 32 pulgadas, 1TB de disco duro, 16GB de RAM, procesador i7, tarjeta gráfica 2GB'
//         },
//         currency: 'ars',
//         unit_amount: 150000
//       }
//     }
//   ],
//   mode: 'payment',
//   success_url: 'http://localhost:3000/api/v1/success',
//   cancel_url: 'http://localhost:3000/api/v1/cancel'
// })
// // .then(session => {
// //   res.json({ id: session.id })
// // })
// // .catch(error => {
// //   res.json({ error })
// // })

// res.json({ session })
// }

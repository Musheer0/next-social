"use server"
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import prisma from '../../../../../db'

export async function POST(req: Request) {

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
 const exists = await prisma.user.findUnique({where: {id: evt.data.id}});
 console.log(eventType)
//webhook when user is created
  if(eventType==="user.created"){
    const parsedBody = JSON.parse(body);
    console.log(parsedBody)
   console.log(exists)
    try{
            await prisma.user.create({
              data:{
                id: evt.data.id,
                username : parsedBody?.data?.username || `${parsedBody?.data?.first_name} ${parsedBody?.data?.last_name || ''}`,
                avatar : JSON.parse(body).data?.image_url || '/noAvatar.png',
                cover : '/noCover.png',
                email: parsedBody?.data?.email_addresses[0].email_address || 'no email found'
              }
            })
            return new Response("User has been created", {status:200})
    }
    catch(e){
      console.log(e);
      return new Response("Failed to create user", {status: 500})
    }
  }
  
//webhook when user is  updated
if(eventType==="user.updated"){
  const parsedBody = JSON.parse(body);
  try{
          await prisma.user.update({where: {id:evt.data.id},
            data:{
              username : parsedBody?.data?.username || `${parsedBody?.data?.first_name} ${parsedBody?.data?.last_name || ''}`,
              avatar : JSON.parse(body).data?.image_url || '/noAvatar.png',

            }
          })
          return new Response("User has been  updated", {status:200})
  }
  catch(e){
    console.log(e);
    return new Response("Failed to create user", {status: 500})
  }
}

  return new Response('Webhook recived', { status: 200 })
}
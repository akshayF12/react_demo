import Shopify from '@shopify/shopify-api';
import { Session } from '@shopify/shopify-api/dist/auth/session';


module.exports.storeCallback = async function storeCallback(session){
  console.log('Running storeCallback')

  const payload = { ...session }
    console.log('StoreCallback session===============================')
    console.log(session)
    console.log('StoreCallback Payload===============================')
    console.log(payload)
    // return prisma.appSession.upsert({
    //     where: { id: session.id },
    //     create: { id: session.id, payload: payload, shop: payload.shop },
    //     update: { payload: payload }
        
    // }).then(_ => {
    //     return true
    // }).catch(err => {
    //     return false
    // })
}

module.exports.loadCallback = async function loadCallback(id) {
     const id_new = "6b3de7bf-28b5-4853-93d7-d0ce4195bbea"
    console.log('loadCallback ID===============================')
        console.log(id_new)
    // return prisma.appSession.findUnique({
    //     where: { id: id }
    // }).then(data => {
    //     if (!data) {
    //         return undefined
    //     }

        const session = new Session(data.id_new)
        // @ts-ignore
        const { shop, state, scope, accessToken, isOnline, expires, onlineAccessInfo } = data.payload
        session.shop = shop
        session.state = state
        session.scope = scope
        session.expires = expires ? new Date(expires) : undefined
        session.isOnline = isOnline
        session.accessToken = accessToken
        session.onlineAccessInfo = onlineAccessInfo

        console.log('loadCallback New session Complete===============================')
        console.log(session)
        return session
 
}


module.exports.deleteCallback = async function deleteCallback(id){
  console.log('deleteCallback ID===============================')
        console.log(id)
    // return prisma.appSession.delete({
    //     where: { id: id }
    // }).then(_ => {
    //     return true
    // }).catch(err => {
    //     return false
    // })
}
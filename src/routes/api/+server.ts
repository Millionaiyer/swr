import { json } from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit'

let list = ['Item 1', 'Item 2', 'Item 3'] 

/** @type {import('./$types').RequestHandler} */
export const GET: RequestHandler = async ({ url }) => {
  const add = url.searchParams.get('add')
  
  const clear = url.searchParams.get('clear')
  console.log(add,clear,'search params');

  if (add) {
    if (!list.includes(add)) {
      list.push(add)
    }
  } else if (clear) {
    list = []
  }
//   await new Promise((r) => setTimeout(r, 200))
  return json(list, { status: 200 })
}

export const prerender = true;
import msgpack from 'msgpack-lite';
import { base64url } from 'rfc4648';

/** @type {import('./$types').PageLoad} */
export async function load({url}) {
  const { searchParams } = url;
  const queryString = searchParams.get('q');
  try {
    return msgpack.decode(base64url.parse(queryString));
  } catch (error) {
    throw error(400, 'Bad Request');
  } 
};
export const BASE_URL = '/'
const BASE_API_URL = 'https://ems-iot.com:8443/'
// const BASE_API_URL = 'http://localhost:8443/'

/**
 * Fetches JSON data asynchronously from a specified API path.
 *
 * @param {string} api_path - The API path relative to the base URL.
 * @returns {Promise<object>} A promise that resolves to an object with the following properties:
 *                   - error: {boolean} - Indicates if an error occurred (true) or not (false).
 *                   - data: {*} (optional) - The parsed JSON data if successful, otherwise undefined.
 *                   - error_msg: {string} (optional) - An error message if an error occurred, otherwise undefined.
 */
export async function fetch_json_data(api_path) {
  try {
    const res = await fetch(BASE_API_URL + api_path)
    if (res.ok) {
      return { error: false, data: await res.json() }
    }
    return { error: true, error_msg: 'server responded:' + res.status }
  } catch (error) {
    return { error: true, error_msg: error }
  }
}
/**
 * Get Device microphone
 */
export function get_microphone_device() {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true
    }
  })
}

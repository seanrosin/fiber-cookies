// src/api/brevo.js
import axios from 'axios';

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts/';
const API_KEY = process.env.REACT_APP_BREVO_API_KEY;

/**
 * Add or update a contact in Brevo
 * @param {string} email - The contact's email address
 * @param {Array<number>} listIds - Optional: Brevo list IDs to assign the contact
 * @returns {Promise<Object>} - Response data from Brevo
 */
export async function addContactToBrevo(email, listIds = []) {
  try {
    const response = await axios.post(
      BREVO_API_URL,
      {
        email,
        listIds,
        updateEnabled: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Brevo API error:', error.response?.data || error.message);
    throw error;
  }
}

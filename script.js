// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = "https://ymyztsxdqmiklnsjurhq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlteXp0c3hkcW1pa2xuc2p1cmhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNDA3MzQsImV4cCI6MjA0OTgxNjczNH0.dGJ9LjCTGvGzUrSQfln_nxiIrxXNBy57Z98b8G7yZqk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchItems() {
    try {
        // Fetch data from 'items' table
        const { data, error } = await supabase.from('items').select('*');
        if (error) throw error;

        // Display data on the webpage
        const container = document.getElementById('items-container');
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.img}" alt="${item.name}">
        <p>UPC: ${item.upc}</p>
        <p>Quantity: ${item.quantity}</p>
        <a href="${item.link}" target="_blank">View Item</a>
      `;
            container.appendChild(itemDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch and display items on page load
fetchItems();
